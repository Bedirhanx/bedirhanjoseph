'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sparkles, Stars } from '@react-three/drei';

function Blob({ scale, detail }) {
  const ref = useRef();
  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15 + pointer.y * 0.4;
    ref.current.rotation.y = t * 0.2 + pointer.x * 0.6;
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.4}>
      <mesh ref={ref} scale={scale}>
        <icosahedronGeometry args={[1, detail]} />
        <MeshDistortMaterial
          color="#ff3cac"
          emissive="#784ba0"
          emissiveIntensity={0.4}
          roughness={0.1}
          metalness={0.2}
          distort={0.45}
          speed={2.5}
        />
      </mesh>
    </Float>
  );
}

function Shape({ position, color, geometry, speed = 1, scale = 1 }) {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.5 * speed;
    ref.current.rotation.y += delta * 0.7 * speed;
  });
  return (
    <Float speed={speed * 2} floatIntensity={2} rotationIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        {geometry}
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.3} />
      </mesh>
    </Float>
  );
}

function Rig() {
  // camera gently follows the mouse
  useFrame(({ camera, pointer }) => {
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (pointer.y * 0.8 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

// Layout tuned for wide screens; on tall/narrow screens (phones, portrait iPads)
// pull shapes toward the center, spread them vertically and shrink the blob.
function Shapes() {
  const { size } = useThree();
  const aspect = size.width / size.height;
  const k = Math.min(1, aspect / 1.2);
  const narrow = k < 1;
  const mobile = size.width < 768;
  const pos = (x, y, z) => [x * k, narrow ? Math.max(-2.8, Math.min(2.8, y * 1.25)) : y, z];
  const shapeScale = narrow ? Math.max(0.6, k * 1.3) : 1;

  return (
    <>
      <Blob scale={1.7 * Math.max(0.62, k)} detail={mobile ? 24 : 64} />
      <Shape position={pos(-3.6, 1.8, -1)} scale={shapeScale} color="#c6ff3d" geometry={<torusKnotGeometry args={[0.5, 0.18, 128, 16]} />} speed={1.2} />
      <Shape position={pos(3.8, 1.6, -2)} scale={shapeScale} color="#ffe53b" geometry={<octahedronGeometry args={[0.8]} />} speed={0.8} />
      <Shape position={pos(-3.2, -2, 0)} scale={shapeScale} color="#3dfcff" geometry={<torusGeometry args={[0.6, 0.22, 32, 64]} />} speed={1} />
      <Shape position={pos(3.4, -1.9, -0.5)} scale={shapeScale} color="#784ba0" geometry={<dodecahedronGeometry args={[0.7]} />} speed={1.4} />
      <Shape position={pos(0, 3, -3)} scale={shapeScale} color="#ff3cac" geometry={<coneGeometry args={[0.5, 1, 4]} />} speed={0.9} />
      <Sparkles count={mobile ? 50 : 120} scale={[14, 8, 6]} size={3} speed={0.4} color="#ffffff" />
      <Stars radius={60} depth={40} count={mobile ? 1000 : 2500} factor={4} fade speed={1} />
    </>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 50 }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#3dfcff" />
      <pointLight position={[4, -2, 3]} intensity={30} color="#c6ff3d" />

      <Shapes />
      <Rig />
    </Canvas>
  );
}
