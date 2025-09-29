import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function DataPoints() {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport, mouse } = useThree();
  
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12
        ],
        scale: Math.random() * 0.4 + 0.1,
        speed: Math.random() * 0.02 + 0.005,
        color: i % 4 === 0 ? "#7F00FF" : i % 4 === 1 ? "#E100FF" : i % 4 === 2 ? "#3B82F6" : "#22D3EE"
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
      meshRef.current.children.forEach((child, i) => {
        const point = points[i];
        child.position.y += Math.sin(state.clock.elapsedTime * point.speed + i) * 0.003;
        child.position.x += Math.cos(state.clock.elapsedTime * point.speed + i) * 0.002;
        child.position.z += Math.sin(state.clock.elapsedTime * point.speed + i * 0.5) * 0.002;
        
        // Interactive mouse movement
        child.position.x += mouse.x * 0.5 * point.scale;
        child.position.y += mouse.y * 0.3 * point.scale;
        
        // Pulsing effect
        const scale = point.scale + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1;
        child.scale.setScalar(scale);
      });
    }
  });

  return (
    <group ref={meshRef}>
      {points.map((point, i) => (
        <Sphere key={i} position={point.position as [number, number, number]} scale={point.scale}>
          <meshStandardMaterial 
            color={point.color} 
            emissive={point.color}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </Sphere>
      ))}
    </group>
  );
}

function NetworkConnections() {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
    }
  });

  const connections = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 20; i++) {
      temp.push({
        start: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, 0],
        end: [(Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, 0]
      });
    }
    return temp;
  }, []);

  return (
    <group ref={meshRef}>
      {connections.map((conn, i) => {
        const direction = new THREE.Vector3()
          .subVectors(new THREE.Vector3(...conn.end), new THREE.Vector3(...conn.start));
        const length = direction.length();
        
        return (
          <Box 
            key={i}
            position={[
              (conn.start[0] + conn.end[0]) / 2,
              (conn.start[1] + conn.end[1]) / 2,
              (conn.start[2] + conn.end[2]) / 2
            ]}
            scale={[length, 0.02, 0.02]}
            rotation={[0, 0, Math.atan2(direction.y, direction.x)]}
          >
            <meshStandardMaterial color="#6366f1" opacity={0.6} transparent />
          </Box>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#7F00FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#22D3EE" />
        <pointLight position={[0, 10, -10]} intensity={0.6} color="#E100FF" />
        <DataPoints />
        <NetworkConnections />
        <fog attach="fog" args={['#F0F4FF', 8, 20]} />
      </Canvas>
    </div>
  );
}