'use client'
import React, { useRef, useState } from 'react';
import Select from 'react-select';
import { PerspectiveCamera } from 'three';
import { OrbitControls as DreiOrbitControls } from '@react-three/drei';
import ModelViewer from './model-view';

const Models = [
  { label: 'MosquitoInAmber', value: '/assets/models/MosquitoInAmber.glb' },
  { label: 'Avocado', value: '/assets/models/Avocado.glb' },
]

export default function _3dExample() {
  const [selectedModel1, setSelectedModel1] = useState<string | null>(null);
  const [selectedModel2, setSelectedModel2] = useState<string | null>(null);

  const camera = useRef(new PerspectiveCamera(75, 1, 0.1, 1000));
  const controls = useRef<DreiOrbitControls>(null);

  const handleChange1 = (selectedOption: any) => {
    setSelectedModel1(selectedOption ? selectedOption.value : null);
  };

  const handleChange2 = (selectedOption: any) => {
    setSelectedModel2(selectedOption ? selectedOption.value : null);
  };

  return (
    <div className='h-svh bg-white'>
      <div className="flex justify-around">
        <Select options={Models} onChange={handleChange1} placeholder="Select Model 1" />
        <Select options={Models} onChange={handleChange2} placeholder="Select Model 2" />
      </div>
      <div className="flex h-svh justify-around">
        {selectedModel1 && <ModelViewer url={selectedModel1} camera={camera.current} controls={controls} />}
        {selectedModel2 && <ModelViewer url={selectedModel2} camera={camera.current} controls={controls} />}
      </div>
    </div>
  );
}