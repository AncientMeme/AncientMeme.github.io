import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function Slider({text="placeholder", repeatCount=5, isReverse=false}) {
  // Check mobile query
  const isMobile = useMediaQuery({maxWidth: 800});
  const isDesktopOrLaptop = useMediaQuery({minWidth: 1224})

  // Slider property
  const direction = isReverse ? ['0%', '-100%'] : ['-100%', '0%'] ;
  let realCount = repeatCount;
  if(!isMobile) {
    realCount += 3;
  }
  if(isDesktopOrLaptop) {
    realCount += 2;
  }

  const scrollDuration = (isMobile) ? 5 : 15;
  const [scope, animate] = useAnimate();

  // Build the slider elements
  const elements = [];
  for (let i = 0; i < realCount * 2; ++i) {
    elements.push(
      <div key={i} className="flex-shrink-0 px-4" style={{ width: `${100 / realCount}%` }}>
        <div className={`flex flex-col items-center justify-center h-full font-black text-base cursor-default md:text-xl`}>
          {text}
        </div>
      </div>
    );
  }

  // Animate after dom is rendered
  useEffect(() => {
      animate(
        scope.current,
        {x: direction},
        {
          ease: "linear",
          duration: scrollDuration, 
          repeat: Infinity
        }
      )
    }
  );

  return(
    <section className={"p-2 text-dark-text relative w-full overflow-hidden"}>
      <div className="flex" ref={scope}>
        {elements}
      </div>
    </section>
  );
}

export default Slider;