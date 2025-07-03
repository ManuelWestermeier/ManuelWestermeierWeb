import { useInView } from "react-intersection-observer";
import React, { useEffect, useState } from "react";

function AnimCt({
  children,
  className = "",
  animClassName = "",
  notAnimClassName = "",
}) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [rerender, setRerender] = useState();

  useEffect(() => {
    if (rerender != inView) setRerender(inView);
  }, [inView]);

  return (
    <div
      ref={ref}
      key={rerender}
      className={`${className} ${inView ? animClassName : notAnimClassName}`}
    >
      {children}
    </div>
  );
}

export default AnimCt;
