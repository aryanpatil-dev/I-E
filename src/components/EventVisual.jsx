import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { AdditiveBlending } from 'three';

function AbstractBurst() {
  const groupRef = useRef(null);
  const pointsRef = useRef(null);
  const positions = useMemo(() => {
    const count = 700;
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = Math.random() * 2.7;
      const angle = Math.random() * Math.PI * 2;
      values[i * 3] = Math.cos(angle) * radius;
      values[i * 3 + 1] = (Math.random() - 0.5) * 2.7;
      values[i * 3 + 2] = Math.sin(angle) * radius;
    }
    return values;
  }, []);

  useFrame(({ clock, pointer }) => {
    const elapsed = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = elapsed * 0.18 + pointer.x * 0.18;
      groupRef.current.rotation.x = elapsed * 0.08 + pointer.y * 0.14;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.z = elapsed * -0.12;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <octahedronGeometry args={[1.45, 4]} />
        <meshBasicMaterial color="#3730a3" wireframe transparent opacity={0.44} />
      </mesh>
      <mesh rotation={[0.35, 0.8, 0]}>
        <torusGeometry args={[2.05, 0.01, 10, 180]} />
        <meshBasicMaterial color="#4f46e5" transparent opacity={0.52} />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color="#c2653c"
          size={0.016}
          transparent
          opacity={0.7}
          depthWrite={false}
          blending={AdditiveBlending}
        />
      </points>
    </group>
  );
}

export default function EventVisual() {
  return (
    <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-electric/10 bg-cloud shadow-soft">
      <Canvas camera={{ position: [0, 0, 5.7], fov: 44 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true }}>
        <color attach="background" args={['#0d1b2a']} />
        <AbstractBurst />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(7,17,30,0.85)_78%)]" />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-lg border border-electric/10 bg-cloud/80 px-4 py-3 text-xs font-black uppercase tracking-[0.18em] text-ink backdrop-blur-xl">
        <span>Innovation Visual</span>
        <span className="text-electric">Build Mode</span>
      </div>
    </div>
  );
}
