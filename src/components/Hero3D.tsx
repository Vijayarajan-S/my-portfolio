import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

function DataPoints() {
  const meshRef = useRef<THREE.Group>(null);
  const { viewport, mouse } = useThree();
  
  const points = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 50; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        scale: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.02 + 0.01
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.children.forEach((child, i) => {
        const point = points[i];
        child.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001;
        child.position.x += mouse.x * 0.001;
        child.position.z += mouse.y * 0.001;
      });
    }
  });

  return (
    <group ref={meshRef}>
      {points.map((point, i) => (
        <Sphere key={i} position={point.position as [number, number, number]} scale={point.scale}>
          <meshStandardMaterial color={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#10b981"} />
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
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.8} />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
        <DataPoints />
        <NetworkConnections />
      </Canvas>
    </div>
  );
}