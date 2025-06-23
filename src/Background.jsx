import React, { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { animate } from "framer-motion";
import { easeQuadOut } from "d3-ease";
import { Color } from "three";

import { wines } from "./data";
import { useStore } from "./store";

import { BackgroundMaterial } from "./BackgroundMaterial";

function Background() {
  const [index, setIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(new Color(wines[0].color));
  const [progress, setProgress] = useState(0);
  const play = useStore((s) => s.play);
  const material = useRef();

  const {
    viewport: { width, height },
  } = useThree();

  // Listen for background color change events from the bottle
  useEffect(() => {
    const handleBackgroundChange = () => {
      const nextIndex = index === wines.length - 1 ? 0 : index + 1;
      const nextColor = new Color(wines[nextIndex].color);
      
      // Reset progress and start wave animation with the new color
      setProgress(0);
      setCurrentColor(nextColor);
      setIndex(nextIndex);
      
      console.log("Background wave animation started with color:", nextColor.getHexString());
      
      animate(0, 1, {
        onUpdate(v) {
          if (!material.current) return;
          setProgress(v);
        },
        onComplete() {
          setProgress(0);
        },
        duration: 2.5,
        ease: easeQuadOut,
      });
    };

    window.addEventListener('backgroundColorChange', handleBackgroundChange);
    
    return () => {
      window.removeEventListener('backgroundColorChange', handleBackgroundChange);
    };
  }, [index]);

  useFrame(({ clock }) => {
    if (material.current) {
      material.current.u_time = clock.getElapsedTime();
      material.current.u_progress = progress;
    }
  });

  // 🎯 BACKGROUND ANIMATION CENTER CONTROL - Change these values!
  // u_centerX: 0.0 = left edge, 0.5 = center, 1.0 = right edge
  // u_centerY: 0.0 = bottom, 0.5 = center, 1.0 = top
  //
  // 🎨 EXAMPLES TO TRY:
  // Center (default):     u_centerX={0.5} u_centerY={0.5}
  // Top-left corner:      u_centerX={0.0} u_centerY={1.0}
  // Top-right corner:     u_centerX={1.0} u_centerY={1.0}
  // Bottom-left corner:   u_centerX={0.0} u_centerY={0.0}
  // Bottom-right corner:  u_centerX={1.0} u_centerY={0.0}
  // Left side center:     u_centerX={0.0} u_centerY={0.5}
  // Right side center:    u_centerX={1.0} u_centerY={0.5}
  // Top center:           u_centerX={0.5} u_centerY={1.0}
  // Bottom center:        u_centerX={0.5} u_centerY={0.0}
  //
  // 🌊 CREATIVE POSITIONS:
  // Slightly off-center:  u_centerX={0.6} u_centerY={0.4}
  // Far right:            u_centerX={0.8} u_centerY={0.5}
  // Upper right:          u_centerX={0.7} u_centerY={0.7}

  return (
    <mesh>
      <planeGeometry args={[width, height]} />
      <backgroundMaterial
        ref={material}
        key={BackgroundMaterial.key}
        u_aspect={width / height}
        u_color={currentColor}
        u_progress={progress}
        u_centerX={0.5}
        u_centerY={0.5}
      />
    </mesh>
  );
}

export default Background;