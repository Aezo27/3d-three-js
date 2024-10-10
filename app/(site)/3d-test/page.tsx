'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react';
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


  const handleChange1 = (selectedOption: any) => {
    setSelectedModel1(selectedOption ? selectedOption.value : null);
  };

  const handleChange2 = (selectedOption: any) => {
    setSelectedModel2(selectedOption ? selectedOption.value : null);
  };

  const container = useRef<HTMLElement>(null);

  const [domElement, setDomElement] = useState(container.current);

  const onChange = useCallback((event) =>
    setDomElement(event.target.domElement)
    , []);

    useEffect(() => {
      setDomElement(container.current);
    }, [])
    

  return (
    <div className='h-svh bg-white'>
      <div className="flex justify-around">
        <Select options={Models} onChange={handleChange1} placeholder="Select Model 1" />
        <Select options={Models} onChange={handleChange2} placeholder="Select Model 2" />
      </div>
      <div ref={container} className="flex h-svh justify-around _3d-wrapper">
        {<ModelViewer url={selectedModel1} domElement={domElement ?? undefined} onChange={onChange} />}
        {<ModelViewer url={selectedModel2} domElement={domElement ?? undefined} onChange={onChange} />}
      </div>
    </div>
  );
}