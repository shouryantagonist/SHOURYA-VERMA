import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { COLORS } from '../constants';

// Add type declarations for React Three Fiber intrinsic elements to fix TypeScript errors
declare global {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      fog: any;
      ambientLight: any;
      gridHelper: any;
      group: any;
    }
  }
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      instancedMesh: any;
      sphereGeometry: any;
      meshBasicMaterial: any;
      fog: any;
      ambientLight: any;
      gridHelper: any;
      group: any;
    }
  }
}

const Fireflies = ({ count = 50 }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);

  // Generate random positions and speeds for fireflies
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 10 - 5; // Keep them somewhat in background
      temp.push({ t, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z } = particle;
      
      // Update time
      t = particle.t += speed / 2;
      
      // Update position based on noise-like movement
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      
      // Scale pulse
      const scale = (1 + Math.sin(t * 5)) * 0.5; // Pulse size
      dummy.scale.set(scale, scale, scale);
      
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshBasicMaterial color={COLORS.accent} transparent opacity={0.6} />
    </instancedMesh>
  );
};

const TechGrid = () => {
  const gridRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
     if (gridRef.current) {
        // Slow rotation to give depth
        gridRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
     }
  });

  return (
    <group ref={gridRef} rotation={[0.2, 0, 0]} position={[0, -5, -5]}>
       <gridHelper args={[40, 40, 0x9b72cf, 0x1a0b2e]} />
    </group>
  );
};

const VisualLayer: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <fog attach="fog" args={[COLORS.bgDark, 5, 25]} />
        <ambientLight intensity={0.2} />
        <TechGrid />
        <Fireflies count={60} />
      </Canvas>
    </div>
  );
};

export default VisualLayer;