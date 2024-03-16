import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import "./App.css";

function App() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let context = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from('#intro-slide', {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(['#title-1','#title-2','#title-3'], {
        opacity: 0,
        xPercent: "-40",
        duration:1,
        y: '=+30',
        stagger:0.5,
      }).to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: '-=30',
        delay: 0.3,
        stagger:0.5,
      }).to('#intro-slide', {
        xPercent: '-100',
        duration:1.3,
      })
        .from('#welcome', {
        opacity: 0,
        duration:0.5,
      })
    }, container);
    return () => context.revert();

  }, []);
  return (
    <>
      <div className="relative" ref={container}>
        <div
          id="intro-slide"
          className="h-screen bg-gray-100 p-10 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tighter"
        >
          <div id="title-1" className="text-9xl ">
            software Engineer
          </div>
          <div id="title-2" className="text-9xl ">
            Designer
          </div>
          <div id="title-3" className="text-9xl ">
            freeLancer
          </div>
        </div>
        
        
        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Welcome.
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
