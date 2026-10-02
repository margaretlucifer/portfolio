import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, RotateCw, Maximize2, Move3d } from 'lucide-react';

export const Interactive3DDemo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shape, setShape] = useState<'sphere' | 'torus' | 'helix' | 'grid'>('sphere');
  const [particleSpeed, setParticleSpeed] = useState<number>(1);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);
  const [pointCount] = useState<number>(650);

  // References to preserve Three.js state across shape updates
  const sceneRef = useRef<THREE.Scene | null>(null);
  const pointsRef = useRef<THREE.Points | null>(null);
  const targetPositionsRef = useRef<Float32Array | null>(null);
  const currentPositionsRef = useRef<Float32Array | null>(null);

  // Initialize Three.js instance
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Setup positions
    const pos = new Float32Array(pointCount * 3);
    const targetPos = new Float32Array(pointCount * 3);

    for (let i = 0; i < pointCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 20;
      targetPos[i] = pos[i];
    }

    currentPositionsRef.current = pos;
    targetPositionsRef.current = targetPos;

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    // Refined slate & charcoal particles
    const material = new THREE.PointsMaterial({
      color: 0x1e293b,
      size: 0.28,
      transparent: true,
      opacity: 0.8,
      blending: THREE.NormalBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    pointsRef.current = points;

    // Mouse drag interaction
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging || !pointsRef.current) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      pointsRef.current.rotation.y += deltaX * 0.008;
      pointsRef.current.rotation.x += deltaY * 0.008;

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDragging = false;
      setIsInteracting(false);
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // Animation loop
    let animId: number;
    let clock = new THREE.Clock();

    const render = () => {
      animId = requestAnimationFrame(render);
      const delta = clock.getDelta();

      if (!isDragging && pointsRef.current) {
        pointsRef.current.rotation.y += 0.25 * particleSpeed * delta;
        pointsRef.current.rotation.x += 0.08 * particleSpeed * delta;
      }

      // Morphing positions toward target positions smoothly
      if (currentPositionsRef.current && targetPositionsRef.current) {
        const p = currentPositionsRef.current;
        const tp = targetPositionsRef.current;
        const lerpFactor = 0.06;

        for (let i = 0; i < pointCount * 3; i++) {
          p[i] += (tp[i] - p[i]) * lerpFactor;
        }

        const positionAttr = geometry.attributes.position as THREE.BufferAttribute;
        positionAttr.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [pointCount]);

  // Calculate target positions based on selected shape
  useEffect(() => {
    if (!targetPositionsRef.current) return;
    const tp = targetPositionsRef.current;

    if (shape === 'sphere') {
      const radius = 9;
      for (let i = 0; i < pointCount; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = radius * Math.cbrt(0.5 + 0.5 * Math.random());

        tp[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        tp[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        tp[i * 3 + 2] = r * Math.cos(phi);
      }
    } else if (shape === 'torus') {
      const R = 7;
      const r = 3;
      for (let i = 0; i < pointCount; i++) {
        const u = Math.random() * Math.PI * 2;
        const v = Math.random() * Math.PI * 2;
        tp[i * 3] = (R + r * Math.cos(v)) * Math.cos(u);
        tp[i * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
        tp[i * 3 + 2] = r * Math.sin(v);
      }
    } else if (shape === 'helix') {
      const radius = 6;
      for (let i = 0; i < pointCount; i++) {
        const t = (i / pointCount) * Math.PI * 8 - Math.PI * 4;
        const strand = i % 2 === 0 ? 0 : Math.PI;
        const jitter = (Math.random() - 0.5) * 0.8;
        tp[i * 3] = (radius + jitter) * Math.cos(t + strand);
        tp[i * 3 + 1] = t * 1.5;
        tp[i * 3 + 2] = (radius + jitter) * Math.sin(t + strand);
      }
    } else if (shape === 'grid') {
      const side = Math.ceil(Math.cbrt(pointCount));
      const spacing = 2.4;
      const offset = (side * spacing) / 2;
      for (let i = 0; i < pointCount; i++) {
        const x = (i % side) * spacing - offset;
        const y = (Math.floor(i / side) % side) * spacing - offset;
        const z = Math.floor(i / (side * side)) * spacing - offset;
        tp[i * 3] = x + (Math.random() - 0.5) * 0.3;
        tp[i * 3 + 1] = y + (Math.random() - 0.5) * 0.3;
        tp[i * 3 + 2] = z + (Math.random() - 0.5) * 0.3;
      }
    }
  }, [shape, pointCount]);

  return (
    <div className="relative w-full rounded-2xl bg-[#F7F6F2] border border-[#E7E4DC] p-4 sm:p-6 overflow-hidden">
      {/* Top Bar with Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E8E5DC]">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <h4 className="font-heading font-semibold text-sm tracking-tight text-[#18191B]">
              Interactive WebGL Particle System
            </h4>
          </div>
          <p className="text-xs text-[#575B62] mt-0.5">
            Click and drag to rotate in real-time · Three.js & WebGL architecture
          </p>
        </div>

        {/* Shape Selector - Segmented control adhering to zero-pill discipline */}
        <div className="flex items-center p-1 bg-[#ECEAE3] rounded-lg text-xs font-medium self-start sm:self-auto">
          {(['sphere', 'torus', 'helix', 'grid'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setShape(s)}
              className={`px-3 py-1.5 rounded-md transition-all capitalize ${
                shape === s
                  ? 'bg-white text-[#18191B] shadow-sm font-semibold'
                  : 'text-[#626771] hover:text-[#18191B]'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-80 sm:h-96 relative cursor-grab active:cursor-grabbing select-none"
        title="Click and drag to rotate the 3D particle cloud"
      >
        {/* Floating guidance overlay */}
        <div className="absolute bottom-3 left-3 pointer-events-none flex items-center gap-2 text-xs text-[#575B62] bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E5E2DC]">
          <Move3d className="w-3.5 h-3.5 text-[#18191B]" />
          <span>{isInteracting ? 'Rotating 3D Space' : 'Drag to rotate perspective'}</span>
        </div>

        {/* Speed toggle */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded border border-[#E5E2DC] text-xs text-[#575B62]">
          <span>Speed:</span>
          <button
            onClick={() => setParticleSpeed((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
            className="font-semibold text-[#18191B] hover:underline"
          >
            {particleSpeed}x
          </button>
        </div>
      </div>
    </div>
  );
};
