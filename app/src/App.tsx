import React, { useState, useEffect, useRef } from 'react';
import Block from './components/Block';
import Container from './components/Container';
import './styles/app.css';

export default function App(): React.ReactElement {
  const [scrollLeft, setScrollLeft] = useState(0);
  // const [scrollTop, setScrollTop] = useState(0);
  const [currentMargin, setCurrentMargin] = useState(0)

  const leftBlock = useRef<HTMLDivElement | null>(null);
  const rightBlock = useRef<HTMLDivElement | null>(null);
  const auxBlock = useRef<HTMLDivElement | null>(null);

  // const firstRender = useRef<boolean>(true);
  

  // useEffect(() => {
  //   if (firstRender.current) {
  //     return;
  //   }
  //   console.log('scrolling left: ', scrollLeft, leftBlock.current);
  //   // rightBlock.current?.classList.remove('freeze')
  //   //leftBlock.current?.classList.add('freeze');
  // }, [scrollLeft])

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   console.log('scrolling top: ', scrollTop, rightBlock.current);
    
  //   //leftBlock.current?.classList.remove('freeze');
  //   //rightBlock.current?.classList.add('freeze');
  // }, [scrollTop])

  function handleScrolling(event: React.SyntheticEvent) {
    const target = event.currentTarget;
    const currentScrollLeft = target.scrollLeft;
    const currentScrollTop = target.scrollTop;
    
    setCurrentMargin((prevMargin) => {
      if (currentScrollLeft < scrollLeft) {
        return prevMargin - (scrollLeft - currentScrollLeft) ?? 0
      }
      if (currentScrollLeft > scrollLeft) {
        console.log('maior', prevMargin + (currentScrollLeft - scrollLeft))
        return prevMargin + (currentScrollLeft - scrollLeft)
      }
      return prevMargin
    });

    setScrollLeft(currentScrollLeft)
    rightBlock.current?.setAttribute('style', `margin-left: ${currentMargin}px`)
    console.log(event.currentTarget.scrollLeft)
    //event.currentTarget.scroll(0,0)
    //rightBlock.current?.style.setProperty('margin-left', String(newMargin))
    // if (scrollLeft !== currentScrollLeft) {
    //   console.log(rightBlock.current?.scrollTop, rightBlock.current?.scrollLeft)      
    //   console.log(event.currentTarget.scrollLeft)
    //   // setScrollLeft(currentScrollLeft);
    // }

    // if (scrollTop !== currentScrollTop) {
    //   setScrollTop(currentScrollTop);
    // }
  }//event.currentTarget.scrollTo(0,0)
  
  return (
    <Container id="container" onScroll={handleScrolling}>
      <Block id="left" className="scrollBlocks freeze" innerRef={leftBlock} />     
      <Block id="right" className="scrollBlocks freeze" innerRef={rightBlock} />
    </Container>
  );
};
