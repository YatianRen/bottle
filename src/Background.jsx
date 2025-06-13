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

  const play = useStore((s) => s.play);

  const material = useRef();

  const {
    viewport: { width, height },
  } = useThree();

  const handleClick = () => {
    if (play) {
      index == wines.length - 1 ? setIndex(0) : setIndex(index + 1);
    }
  };

  useEffect(() => {
    animate(0, 1, {
      onUpdate(v) {
        if (!material.current) return;

        material.current.u_progress = v;
      },

      duration: 2.5,
      ease: easeQuadOut,
    });
  }, [index]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    material.current.u_time = time;
  });

  return (
    <mesh onClick={(e) => handleClick(e)}>
      <planeGeometry args={[width, height]} />
      <backgroundMaterial
        ref={material}
        key={BackgroundMaterial.key}
        u_aspect={width / height}
        u_color={new Color(wines[index].color)}
        
        {/* 🎯 BACKGROUND ANIMATION CENTER CONTROL - Change these values! */}
        u_centerX={0.7}  {/* 0.0 = left edge, 0.5 = center, 1.0 = right edge */}
        u_centerY={0.5}  {/* 0.0 = bottom, 0.5 = center, 1.0 = top */}
        
        {/* 
        🎨 EXAMPLES TO TRY:
        
        Center (default):     u_centerX={0.5} u_centerY={0.5}
        Top-left corner:      u_centerX={0.0} u_centerY={1.0}
        Top-right corner:     u_centerX={1.0} u_centerY={1.0}
        Bottom-left corner:   u_centerX={0.0} u_centerY={0.0}
        Bottom-right corner:  u_centerX={1.0} u_centerY={0.0}
        Left side center:     u_centerX={0.0} u_centerY={0.5}
        Right side center:    u_centerX={1.0} u_centerY={0.5}
        Top center:           u_centerX={0.5} u_centerY={1.0}
        Bottom center:        u_centerX={0.5} u_centerY={0.0}
        
        🌊 CREATIVE POSITIONS:
        Slightly off-center:  u_centerX={0.6} u_centerY={0.4}
        Far right:            u_centerX={0.8} u_centerY={0.5}
        Upper right:          u_centerX={0.7} u_centerY={0.7}
        */}
      />
    </mesh>
  );
}

export default Background;