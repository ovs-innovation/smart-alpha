"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, ContactShadows, RoundedBox } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function RisingBars() {
  const group = useRef<THREE.Group>(null);
  const heights = useMemo(
    () => [1.5, 2.1, 1.75, 2.65, 2.25, 3.15, 2.7, 3.55, 3.1, 3.95, 3.5, 4.4],
    []
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.children.forEach((child, i) => {
      const mesh = child as THREE.Mesh;
      const base = heights[i];
      mesh.scale.y = base + 0.2 * Math.sin(t * 1.25 + i * 0.35);
      mesh.position.y = mesh.scale.y / 2;
    });
    group.current.rotation.y = -0.22 + Math.sin(t * 0.15) * 0.1;
  });

  return (
    <group ref={group} position={[-2.7, -1.7, 0.2]}>
      {heights.map((h, i) => {
        const t = i / (heights.length - 1);
        const color = new THREE.Color().lerpColors(
          new THREE.Color("#A8E6C0"),
          new THREE.Color("#1FAF52"),
          0.25 + t * 0.75
        );
        return (
          <RoundedBox
            key={i}
            args={[0.36, 1, 0.36]}
            radius={0.08}
            smoothness={4}
            position={[i * 0.48, h / 2, 0]}
            castShadow
          >
            <meshStandardMaterial color={color} roughness={0.22} metalness={0.14} />
          </RoundedBox>
        );
      })}
    </group>
  );
}

function BrandArrow() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.position.y = 1.55 + Math.sin(t * 1.05) * 0.15;
    ref.current.rotation.z = -0.7 + Math.sin(t * 0.55) * 0.05;
  });

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.3}>
      <group ref={ref} position={[2.35, 1.55, 0.4]} scale={1.15}>
        {/* Shaft */}
        <mesh rotation={[0, 0, -0.7]} castShadow position={[0, 0, 0]}>
          <boxGeometry args={[0.32, 2.1, 0.22]} />
          <meshStandardMaterial color="#2FBE63" roughness={0.18} metalness={0.2} />
        </mesh>
        {/* Head */}
        <mesh position={[0.72, 0.95, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
          <coneGeometry args={[0.48, 0.85, 3]} />
          <meshStandardMaterial color="#2FBE63" roughness={0.18} metalness={0.2} />
        </mesh>
      </group>
    </Float>
  );
}

function Orbs() {
  return (
    <>
      <Float speed={0.9} floatIntensity={0.5}>
        <mesh position={[-2.4, 2.4, -1.4]}>
          <sphereGeometry args={[0.7, 32, 32]} />
          <meshStandardMaterial
            color="#2FBE63"
            emissive="#2FBE63"
            emissiveIntensity={0.45}
            transparent
            opacity={0.28}
          />
        </mesh>
      </Float>
      <Float speed={1.2} floatIntensity={0.35}>
        <mesh position={[3.1, 0.2, -1.2]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial
            color="#7ED9A0"
            emissive="#2FBE63"
            emissiveIntensity={0.3}
            transparent
            opacity={0.35}
          />
        </mesh>
      </Float>
    </>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 9, 5]} intensity={1.5} castShadow />
      <pointLight position={[-2, 3, 3]} intensity={0.7} color="#2FBE63" />
      <pointLight position={[4, 1, -1]} intensity={0.4} color="#B8E8CB" />
      <RisingBars />
      <BrandArrow />
      <Orbs />
      <ContactShadows position={[0, -1.72, 0]} opacity={0.24} scale={18} blur={2.6} far={8} />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas
        shadows
        dpr={[1, 1.8]}
        camera={{ position: [0.4, 1.85, 7.0], fov: 34 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
