import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { shopConfig } from '../config/shop';
import { openWhatsApp, quickServiceMessage } from '../utils/whatsapp';

function FloatingShape({ position, color }) {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.005;
    ref.current.rotation.y += 0.008;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
  });
  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.4, 0]} />
      <meshBasicMaterial color={color} wireframe />
    </mesh>
  );
}

function Scene() {
  const shapes = React.useMemo(() =>
    Array.from({ length: 18 }, () => ({
      position: [
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 5
      ],
      color: `hsl(${Math.random() * 60 + 240}, 80%, 65%)`,
    })), []);

  return (
    <>
      {shapes.map((s, i) => <FloatingShape key={i} {...s} />)}
    </>
  );
}

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-canvas-wrap">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="glow-text">{shopConfig.name}</h1>
        <p className="tagline">{shopConfig.tagline}</p>
        <div className="hero-buttons">
          <a href="#request" className="cta-btn">Request a Service →</a>
          <button
            className="cta-btn whatsapp-cta"
            onClick={() => openWhatsApp(quickServiceMessage())}
          >
            💬 Chat on WhatsApp
          </button>
        </div>
      </motion.div>
    </section>
  );
}