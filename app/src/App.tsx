import React, { useState, useEffect, useRef } from 'react';
import './styles/app.css';

export default function App(): React.ReactElement {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const leftBlock = useRef<HTMLDivElement | null>(null);
  const rightBlock = useRef<HTMLDivElement | null>(null);

  const firstRender = useRef<boolean>(true);
  

  useEffect(() => {
    if (firstRender.current) {
      return;
    }
    //console.log('scrolling left: ', scrollLeft, leftBlock.current);
    //rightBlock.current?.classList.remove('freeze')
    leftBlock.current?.classList.add('freeze')
  }, [scrollLeft])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    //console.log('scrolling top: ', scrollTop, rightBlock.current);
    leftBlock.current?.classList.remove('freeze')
    rightBlock.current?.classList.add('freeze')
  }, [scrollTop])

  function handleScrolling(event: React.SyntheticEvent) {
    const currentScrollLeft = event.currentTarget.scrollLeft;
    const currentScrollTop = event.currentTarget.scrollTop;
    if (scrollLeft !== currentScrollLeft) {
      setScrollLeft(currentScrollLeft);
    }

    if (scrollTop !== currentScrollTop) {
      setScrollTop(currentScrollTop);
    }
  }
  return (
    <div className="container" onScroll={handleScrolling}>
      <div id="left" className="scrollBlocks" ref={leftBlock}></div>
      <div id="right" className="scrollBlocks" ref={rightBlock}></div>      
    </div>
  );
};
