import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

import './ScrollIndicator.css'

const VerticalScrollIndicator = () => {
  const { scrollYProgress, scrollY } = useScroll();

  const skeinOnClickEvent = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const threadPath = `
    M 20 0 
    L 5 80
    L 35 160
    L 10 240
    L 30 320
    L 5 400
    L 35 480
    L 15 560
    L 30 640
    L 10 720
    L 35 800
    L 20 1000
  `;

  const progressPoints = [
    0, 0.0788, 0.1615, 0.2426, 0.3225, 0.4036, 0.4863, 0.5661, 0.6449, 0.7247, 0.8059, 1
  ];

  const xValues = [
    "50%", "12.5%", "87.5%", "25%", "75%", "12.5%", "87.5%", "37.5%", "75%", "25%", "87.5%", "50%"
  ];

  const yValues = [
    "0%", "8%", "16%", "24%", "32%", "40%", "48%", "56%", "64%", "72%", "80%", "100%"
  ];

  const translateX = useTransform(scaleY, progressPoints, yValues);
  const translateY = useTransform(scaleY, progressPoints, xValues);

  const skeinScale = useTransform(scaleY, [0, 1], [1, 0.2]);
  const skeinRotate = useTransform(scrollY, (y) => y / 15);

  return (
    <div id="scroll-container">
      <svg width="100%" height="100%" viewBox="0 0 40 1000" preserveAspectRatio="none" style={{ overflow: 'visible' }} >
        <motion.path d={threadPath} fill="transparent" stroke="rgba(248, 0, 153, 0.85)" strokeWidth="3"
          strokeLinecap="round" strokeLinejoin="round" style={{ pathLength: scaleY }} />
      </svg>
      <motion.div style={{ position: 'absolute', top: translateX, left: translateY, x: "-45%", y: "-55%", }}>
        <motion.div id='skein' style={{ scale: skeinScale, rotate: skeinRotate }}  onClick={skeinOnClickEvent}/>
      </motion.div>
    </div >
  )
};

export default VerticalScrollIndicator;