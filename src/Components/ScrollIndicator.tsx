import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const VerticalScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100, // Merevség
    damping: 30,    // Csillapítás
    restDelta: 0.001 // Mikor álljon meg
  });

  return (
    <motion.div
      style={{
        // Pozicionálás
        position: 'fixed',
        top: 0,
        right: 0, // Teljesen a jobb szélre
        bottom: 0, // Végigérjen fentről lefelé

        // Kinézet
        width: '6px', // A csík szélessége
        backgroundColor: '#e80bf4', // Szép zöld szín
        
        // Transzformáció beállítása
        scaleY: scaleY, // Vagy scaleY: scrollYProgress (ha nem kell a rugó)
        originY: 0, // A transzformáció a tetejétől induljon (ne középről)
        
        // Biztosan legfelül legyen minden felett
        zIndex: 1000,
        
        // Egy enyhe árnyék, hogy jobban elváljon
        boxShadow: '-1px 0px 5px rgba(0,0,0,0.2)'
      }}
    />
  );
};

export default VerticalScrollIndicator;