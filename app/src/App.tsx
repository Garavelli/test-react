import React, { useState, useEffect } from 'react';
import './styles/app.css';

export default function App(): React.ReactElement {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    console.log('scrolling left: ', scrollLeft)
  }, [scrollLeft])

  useEffect(() => {
    console.log('scrolling top: ', scrollTop);
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
      <div id="left" className="scrollBlocks"></div>
      <div id="right" className="scrollBlocks"></div>      
    </div>
  );
};
