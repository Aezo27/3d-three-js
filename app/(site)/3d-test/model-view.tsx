'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei';

interface ModelViewerProps {
  url: string | null;
  domElement?: HTMLElement;
  onChange: (event: any) => void;
}

function ModelViewer({ url , domElement, onChange}: ModelViewerProps) {
  
  const { scene } = useGLTF(url ?? '/assets/models/MosquitoInAmber.glb');

  return (
    <Canvas camera={{ position: [0, 0, -0.2], near: 0.025  }}>
      <Environment files="assets/models/img/lonely_road_afternoon_puresky_1k.hdr" background />
      {url && <primitive object={scene} />}
      <OrbitControls autoRotate domElement={domElement} onChange={onChange} />
    </Canvas>
  );
}

export default ModelViewer;