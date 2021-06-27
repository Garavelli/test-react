import React, { useRef } from 'react';
import Block from './components/Block';
import Container from './components/Container';
import './styles/app.css';

export default function App(): React.ReactElement {
  const leftBlock = useRef<HTMLDivElement | null>(null);
  const rightBlock = useRef<HTMLDivElement | null>(null);

  const cssRoot = document.documentElement;

  function handleScrolling(event: React.SyntheticEvent) {
    const target = event.currentTarget;    
    cssRoot.style.setProperty('--width-before', `${target.scrollLeft}px`);    
  }
  
  return (
    <Container id="container" onScroll={handleScrolling}>
      <Block id="left" className="scrollBlocks" innerRef={leftBlock} />     
      <Block id="right" className="scrollBlocks" innerRef={rightBlock} />
    </Container>
  );
};
