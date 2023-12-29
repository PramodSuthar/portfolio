// import React from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// const SvgAnimations = ({ isVisible = true }) => {
//   const radius = 100 // Adjust the radius based on your needs

//   const calculateX = (angle) => radius * Math.cos(angle)
//   const calculateY = (angle) => radius * Math.sin(angle)
//   return (
//     <>
//       {isVisible && (
//         <motion.div
//           animate={{
//             x: [0, 100, 200, 300, 400, 500, 400, 300, 200, 0],
//             y: [0, 100, 200, 300, 400, 500, 400, 300, 200, 0],
//           }}
//           transition={{
//             duration: 2, // Duration of the animation
//             ease: 'linear', // Linear easing for a circular motion
//             loop: Infinity, // Infinite loop for continuous animation
//             repeat: true,
//           }}
//         >
//           <div>
//             <AcrylicIcons />
//           </div>
//           <div>
//             <Viber />
//           </div>
//           <div>
//             <SuperTux />
//           </div>
//         </motion.div>
//       )}
//     </>
//   )
// }
// export default SvgAnimations
