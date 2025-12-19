import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for bubble animation
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// Styled component for the bubble
const Bubble = styled.div`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  bottom: -20px; /* Start position */
  left: ${(props) => props.position}px;
  animation: ${float} ${(props) => props.speed}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  border-radius: 50%;
  z-index: -1; /* Behind other content */
`;

const FloatingBubbles = () => {
  return (
    <>
      <Bubble size={20} position={20} speed={6} delay={0} />
      <Bubble size={15} position={100} speed={4} delay={1} />
      <Bubble size={25} position={200} speed={5} delay={2} />
      {/* Add more bubbles with different sizes, positions, speeds, and delays */}
    </>
  );
};

export default FloatingBubbles;
