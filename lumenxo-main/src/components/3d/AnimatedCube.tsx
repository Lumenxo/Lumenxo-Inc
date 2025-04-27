import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface AnimatedCubeProps {
  size?: number;
  wireframe?: boolean;
  rotationSpeed?: number;
  glowIntensity?: number;
}

const AnimatedCube: React.FC<AnimatedCubeProps> = ({
  size = 200, // Reduced from 300 to make it smaller
  wireframe = true,
  rotationSpeed = 0.005,
  glowIntensity = 0.8,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const minDimension = Math.min(width, height, 500); // Reduced cap from 600px to 500px
      
      setDimensions({
        width: minDimension,
        height: minDimension
      });
    };
    
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  
  useEffect(() => {
    if (!containerRef.current || dimensions.width === 0) return;
    
    // Clear any existing content
    while (containerRef.current.firstChild) {
      containerRef.current.removeChild(containerRef.current.firstChild);
    }
    
    // Create scene with improved lighting
    const scene = new THREE.Scene();
    
    // Create camera with dynamic aspect ratio
    const camera = new THREE.PerspectiveCamera(
      60, 
      dimensions.width / dimensions.height, 
      0.1, 
      2000
    );
    // Move camera back for better perspective
    camera.position.z = dimensions.width * 0.95;
    
    // Create renderer with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true,
      precision: 'highp'
    });
    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    
    // Create cube geometry - smaller size
    const cubeSize = dimensions.width * 0.45; // Reduced from 0.65 to 0.45 to make cube smaller
    const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
    
    // Create materials with improved aesthetics
    const mainColor = new THREE.Color(0xF8C12C);
    const edgeColor = new THREE.Color(0xFFD700);
    
    const createMaterial = () => new THREE.MeshBasicMaterial({ 
      color: mainColor, 
      wireframe, 
      transparent: true, 
      opacity: 0.35,
      wireframeLinewidth: 2
    });
    
    const materials = Array(6).fill(null).map(() => createMaterial());
    
    // Create cube
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);
    
    // Add enhanced glow effect
    const glowGeometry = new THREE.BoxGeometry(
      cubeSize * 1.08, 
      cubeSize * 1.08, 
      cubeSize * 1.08
    );
    const glowMaterial = new THREE.MeshBasicMaterial({ 
      color: edgeColor,
      transparent: true,
      opacity: glowIntensity / 5,
      side: THREE.BackSide
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);
    
    // Add a second glow layer for increased effect
    const outerGlowGeometry = new THREE.BoxGeometry(
      cubeSize * 1.15, 
      cubeSize * 1.15, 
      cubeSize * 1.15
    );
    const outerGlowMaterial = new THREE.MeshBasicMaterial({ 
      color: edgeColor,
      transparent: true,
      opacity: glowIntensity / 10,
      side: THREE.BackSide
    });
    const outerGlow = new THREE.Mesh(outerGlowGeometry, outerGlowMaterial);
    scene.add(outerGlow);
    
    // Add edges for more definition
    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: edgeColor,
      linewidth: 2,
      opacity: 0.9,
      transparent: true
    });
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
    cube.add(edges);
    
    // Function to create better text textures
    const createTextTexture = (text: string, fontSize: number, bold: boolean = true) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512; // Higher resolution
      canvas.height = 512;
      const context = canvas.getContext('2d');
      if (!context) return null;
      
      // Clear background
      context.fillStyle = 'rgba(0,0,0,0)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Add gradient background for text area
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = canvas.width * 0.4;
      
      const gradient = context.createRadialGradient(
        centerX, centerY, 0,
        centerX, centerY, radius
      );
      gradient.addColorStop(0, 'rgba(248, 193, 44, 0.2)');
      gradient.addColorStop(1, 'rgba(248, 193, 44, 0)');
      
      context.fillStyle = gradient;
      context.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw text with shadow for depth
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.font = `${bold ? 'bold' : ''} ${fontSize}px Arial, sans-serif`;
      
      // Text shadow for depth
      context.shadowColor = 'rgba(0, 0, 0, 0.6)';
      context.shadowBlur = 10;
      context.shadowOffsetX = 2;
      context.shadowOffsetY = 2;
      
      // Main text
      context.fillStyle = '#F8C12C';
      context.fillText(text, centerX, centerY);
      
      // Remove shadow for highlight
      context.shadowColor = 'transparent';
      
      // Add highlight
      context.fillStyle = '#FFD700';
      context.fillText(text, centerX - 1, centerY - 1);
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      return texture;
    };
    
    // Add text to each face
    const addTextToFace = (text: string, position: THREE.Vector3, rotation: THREE.Euler, isMain: boolean = false) => {
      const fontSize = isMain ? 70 : 56; // Reduced font sizes
      const texture = createTextTexture(text, fontSize);
      if (!texture) return;
      
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
      });
      
      const planeSize = cubeSize * (isMain ? 0.95 : 0.9);
      const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(planeSize, planeSize),
        material
      );
      
      plane.position.copy(position);
      plane.rotation.copy(rotation);
      
      // Add to cube instead of scene for better rotation
      cube.add(plane);
    };
    
    // Add text to each face - LumenXo is front face
    const halfSize = cubeSize / 2 + 1;
    addTextToFace('LumenXo', new THREE.Vector3(0, 0, halfSize), new THREE.Euler(0, 0, 0), true);
    addTextToFace('Innovation', new THREE.Vector3(0, 0, -halfSize), new THREE.Euler(0, Math.PI, 0));
    addTextToFace('Software', new THREE.Vector3(halfSize, 0, 0), new THREE.Euler(0, Math.PI / 2, 0));
    addTextToFace('Solutions', new THREE.Vector3(-halfSize, 0, 0), new THREE.Euler(0, -Math.PI / 2, 0));
    addTextToFace('Digital', new THREE.Vector3(0, halfSize, 0), new THREE.Euler(Math.PI / 2, 0, 0));
    addTextToFace('Growth', new THREE.Vector3(0, -halfSize, 0), new THREE.Euler(-Math.PI / 2, 0, 0));
    
    // Initial rotation to show LumenXo
    cube.rotation.y = -Math.PI / 6;
    cube.rotation.x = Math.PI / 6;
    
    // Animation loop
    let frameId: number;
    let autoRotate = true;
    
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      if (autoRotate) {
        // Smooth rotation
        cube.rotation.x += rotationSpeed;
        cube.rotation.y += rotationSpeed * 1.2;
      }
      
      // Sync glow rotation
      glow.rotation.copy(cube.rotation);
      outerGlow.rotation.copy(cube.rotation);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Mouse interaction with improved controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      autoRotate = false;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      setTimeout(() => {
        if (!isDragging) autoRotate = true;
      }, 1500);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      // Make rotation more responsive and smooth
      const rotationSpeed = 0.005;
      cube.rotation.y += deltaMove.x * rotationSpeed;
      cube.rotation.x += deltaMove.y * rotationSpeed;
      
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        autoRotate = false;
        previousMousePosition = { 
          x: e.touches[0].clientX, 
          y: e.touches[0].clientY 
        };
      }
    };
    
    const handleTouchEnd = () => {
      isDragging = false;
      setTimeout(() => {
        if (!isDragging) autoRotate = true;
      }, 1500);
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      
      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };
      
      const rotationSpeed = 0.005;
      cube.rotation.y += deltaMove.x * rotationSpeed;
      cube.rotation.x += deltaMove.y * rotationSpeed;
      
      previousMousePosition = { 
        x: e.touches[0].clientX, 
        y: e.touches[0].clientY 
      };
      
      // Prevent page scrolling
      e.preventDefault();
    };
    
    // Add all event listeners
    containerRef.current.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mousemove', handleMouseMove);
    
    containerRef.current.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    
    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      
      containerRef.current?.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mousemove', handleMouseMove);
      
      containerRef.current?.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [dimensions, wireframe, rotationSpeed, glowIntensity]);
  
  return (
    <div 
      ref={containerRef}
      className="w-full h-full flex items-center justify-center"
      style={{ 
        perspective: '1200px',
        minHeight: '300px', // Reduced from 350px for smaller screens
        height: '100%',
        maxHeight: '500px' // Added max height to ensure it fits well
      }}
    />
  );
};

export default AnimatedCube;