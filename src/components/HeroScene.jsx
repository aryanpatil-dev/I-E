import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdditiveBlending, MathUtils } from 'three';

function ParticleField({ count = 1500 }) {
  const pointsRef = useRef(null);
  const positions = useMemo(() => {
    const values = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      const radius = 2.2 + Math.random() * 4.4;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 5.8;
      values[index * 3] = Math.cos(angle) * radius;
      values[index * 3 + 1] = height;
      values[index * 3 + 2] = Math.sin(angle) * radius;
    }
    return values;
  }, [count]);

  useFrame(({ clock, pointer }) => {
    if (!pointsRef.current) return;
    const elapsed = clock.getElapsedTime();
    pointsRef.current.rotation.y = elapsed * 0.035;
    pointsRef.current.rotation.x = MathUtils.lerp(pointsRef.current.rotation.x, pointer.y * 0.08, 0.04);
    pointsRef.current.position.x = MathUtils.lerp(pointsRef.current.position.x, pointer.x * 0.55, 0.04);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#3730a3"
        transparent
        opacity={0.5}
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

function WireCore() {
  const orbRef = useRef(null);
  const ringRef = useRef(null);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (orbRef.current) {
      orbRef.current.rotation.x = elapsed * 0.18 + pointer.y * 0.16;
      orbRef.current.rotation.y = elapsed * 0.22 + pointer.x * 0.16;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.4 + Math.sin(elapsed * 0.28) * 0.1;
      ringRef.current.rotation.z = elapsed * 0.11;
    }
  });

  return (
    <group position={[1.1, -0.12, -1.15]}>
      <mesh ref={orbRef}>
        <icosahedronGeometry args={[1.9, 5]} />
        <meshBasicMaterial color="#4f46e5" wireframe transparent opacity={0.28} />
      </mesh>
      <mesh ref={ringRef}>
        <torusGeometry args={[2.72, 0.008, 10, 160]} />
        <meshBasicMaterial color="#c2653c" transparent opacity={0.72} />
      </mesh>
      <mesh rotation={[1.25, 0.3, 0.15]}>
        <torusGeometry args={[3.25, 0.005, 8, 160]} />
        <meshBasicMaterial color="#c2653c" transparent opacity={0.52} />
      </mesh>
    </group>
  );
}

function AmbientBeams() {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = clock.getElapsedTime() * 0.018;
  });

  return (
    <group ref={groupRef} position={[-1.8, -0.3, -2.4]}>
      <mesh rotation={[0.8, 0.2, 0.6]} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1.7, 0.008, 180, 8]} />
        <meshBasicMaterial color="#3730a3" transparent opacity={0.28} />
      </mesh>
      <mesh rotation={[0.2, 0.9, 0.1]} position={[0.8, -0.2, 0.4]}>
        <torusKnotGeometry args={[1.25, 0.006, 160, 8]} />
        <meshBasicMaterial color="#c2653c" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-paper" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.1, 7.4], fov: 48 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
        <color attach="background" args={['#07111e']} />
        <ParticleField />
        <WireCore />
        <AmbientBeams />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(30,77,140,0.22),transparent_32%),linear-gradient(90deg,rgba(7,17,30,0.96)_0%,rgba(13,27,42,0.7)_44%,rgba(7,17,30,0.85)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-paper to-transparent" />
    </div>
  );
}
