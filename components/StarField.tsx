'use client';

import { useRef, useMemo, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const { viewport } = useThree();

  // Track mouse position globally (normalized -1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Twinkle: store random phase for each star
  const [sphere, twinklePhases] = useMemo(() => {
    const sphere = new Float32Array(5000 * 3);
    const twinklePhases = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      sphere[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      sphere[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      sphere[i * 3 + 2] = radius * Math.cos(phi);
      twinklePhases[i] = Math.random() * Math.PI * 2;
    }
    return [sphere, twinklePhases];
  }, []);

  // Color interpolation based on mouse X
  function lerpColor(a: string, b: string, t: number) {
    const ah = a.replace('#', '');
    const bh = b.replace('#', '');
    const ar = parseInt(ah.substring(0, 2), 16);
    const ag = parseInt(ah.substring(2, 4), 16);
    const ab = parseInt(ah.substring(4, 6), 16);
    const br = parseInt(bh.substring(0, 2), 16);
    const bg = parseInt(bh.substring(2, 4), 16);
    const bb = parseInt(bh.substring(4, 6), 16);
    const rr = Math.round(ar + (br - ar) * t);
    const rg = Math.round(ag + (bg - ag) * t);
    const rb = Math.round(ab + (bb - ab) * t);
    return `#${rr.toString(16).padStart(2, '0')}${rg.toString(16).padStart(2, '0')}${rb.toString(16).padStart(2, '0')}`;
  }

  // Animate
  useFrame((state, delta) => {
    // Parallax effect: move group based on mouse
    if (groupRef.current) {
      groupRef.current.position.x = mouse.x * 2; // adjust multiplier for effect strength
      groupRef.current.position.y = mouse.y * 2;
      groupRef.current.rotation.z = mouse.x * 0.2;
    }
    // Base rotation
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
    // Twinkle: animate star sizes
    if (ref.current) {
      const sizes = (ref.current.geometry as any).attributes.size;
      if (sizes) {
        const time = state.clock.getElapsedTime();
        for (let i = 0; i < 5000; i++) {
          sizes.array[i] = 0.05 + 0.03 * Math.sin(time * 2 + twinklePhases[i]);
        }
        sizes.needsUpdate = true;
      }
    }
  });

  // Color shift based on mouse X
  const color = lerpColor('#fff', '#00bfff', (mouse.x + 1) / 2); // white to blue

  // Custom attribute for twinkle (size)
  const sizes = useMemo(() => {
    const arr = new Float32Array(5000);
    arr.fill(0.05);
    return arr;
  }, []);

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color={color}
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function StarFieldCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 35], fov: 75 }}
      style={{
        background: 'transparent',
        display: 'block',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      }}
      onCreated={(state) => {
        if (state.gl.domElement) {
          state.gl.domElement.style.border = '';
        }
      }}
    >
      <Suspense fallback={null}>
        <Stars />
      </Suspense>
    </Canvas>
  );
}

export function StarField() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        width: '100vw',
        height: '100vh',
        background: 'transparent',
        pointerEvents: 'none',
      }}
    >
      <StarFieldCanvas />
    </div>
  );
}
