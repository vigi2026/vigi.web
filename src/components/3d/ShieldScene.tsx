import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { VIGI_LOGO } from '../../utils/assets';

// 3D Holographic Logo Plate
function LogoPlate({ isReducedMotion }: { isReducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  
  // Load official logo texture
  const logoTexture = useTexture(VIGI_LOGO);

  useFrame((state, delta) => {
    if (isReducedMotion) return;

    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.4) * 0.08;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.4;
    }

    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.25;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Holographic Energy Ring */}
      <group ref={outerRingRef}>
        <mesh>
          <torusGeometry args={[2.55, 0.03, 16, 64]} />
          <meshStandardMaterial
            color="#FFB52E"
            emissive="#FFB52E"
            emissiveIntensity={1.2}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </group>

      {/* Inner Neon Cyan Circuit Ring */}
      <group ref={ringRef}>
        <mesh>
          <torusGeometry args={[2.3, 0.025, 16, 48]} />
          <meshStandardMaterial
            color="#00F5FF"
            emissive="#00F5FF"
            emissiveIntensity={1.8}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </group>

      {/* Main Holographic Panel displaying official VIGI LOCK shield logo */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <planeGeometry args={[3.4, 3.4]} />
        <meshStandardMaterial
          map={logoTexture}
          transparent={true}
          roughness={0.3}
          metalness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Back Glass Glow Plate */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[3.5, 3.5]} />
        <meshStandardMaterial
          color="#041020"
          transparent={true}
          opacity={0.7}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* 4 Corner Tech Brackets */}
      {[
        [-1.75, 1.75],
        [1.75, 1.75],
        [-1.75, -1.75],
        [1.75, -1.75]
      ].map(([x, y], idx) => (
        <mesh key={idx} position={[x, y, 0.02]}>
          <boxGeometry args={[0.3, 0.04, 0.04]} />
          <meshStandardMaterial color="#00F5FF" emissive="#00F5FF" emissiveIntensity={2} />
        </mesh>
      ))}
    </group>
  );
}

// Orbiting Cyan and Gold Particle Field
function ParticleField({ count = 80 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color('#00F5FF');
    const gold = new THREE.Color('#FFB52E');

    for (let i = 0; i < count; i++) {
      const radius = 2.8 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      pos[i * 3] = radius * Math.cos(theta) * Math.cos(phi);
      pos[i * 3 + 1] = radius * Math.sin(phi);
      pos[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi);

      const chosenColor = Math.random() > 0.4 ? cyan : gold;
      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.12;
      pointsRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// 2D CSS Fallback for low power or reduced motion
export function ShieldScene2DFallback() {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[500px] flex items-center justify-center">
      {/* Outer Glow Halo */}
      <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-neonCyan/30 animate-pulse-glow" />
      <div className="absolute w-84 h-84 sm:w-96 sm:h-96 rounded-full border border-cyberGold/20 animate-spin-slow" />
      
      {/* Card Plate with Logo */}
      <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-2xl glass-panel p-4 flex flex-col items-center justify-center border-2 border-neonCyan/40 shadow-[0_0_50px_rgba(0,168,255,0.3)] animate-float">
        <img
          src={VIGI_LOGO}
          alt="VIGI LOCK Official 3D Shield & Padlock"
          className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(0,245,255,0.6)]"
        />
        <div className="absolute bottom-3 px-3 py-1 bg-deepNavy/90 border border-cyberGold/50 rounded-full text-[11px] font-mono text-cyberGold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyberGold animate-ping" />
          HOLOGRAPHIC SHIELD ACTIVE
        </div>
      </div>
    </div>
  );
}

interface ShieldSceneProps {
  isReducedMotion?: boolean;
}

export function ShieldScene({ isReducedMotion = false }: ShieldSceneProps) {
  // If user requests reduced motion, show high-fidelity 2D fallback with static glow
  if (isReducedMotion) {
    return <ShieldScene2DFallback />;
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] select-none">
      <Suspense fallback={<ShieldScene2DFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
          gl={{ antialias: true, alpha: true }}
        >
          <ambientLight intensity={0.9} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#00F5FF" />
          <directionalLight position={[-5, -5, -3]} intensity={1.0} color="#FFB52E" />
          <pointLight position={[0, 0, 3]} intensity={1.8} color="#00A8FF" distance={10} />

          <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
            <LogoPlate isReducedMotion={isReducedMotion} />
            <ParticleField count={90} />
          </Float>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.7}
            minPolarAngle={Math.PI / 2.3}
            maxAzimuthAngle={Math.PI / 4}
            minAzimuthAngle={-Math.PI / 4}
          />
        </Canvas>
      </Suspense>

      {/* Interactive Helper Overlay */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass-panel border border-neonCyan/20 text-[11px] font-mono text-neonCyan/80 pointer-events-none flex items-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-neonCyan animate-pulse" />
        Interactive 3D • Drag to Tilt Shield
      </div>
    </div>
  );
}
