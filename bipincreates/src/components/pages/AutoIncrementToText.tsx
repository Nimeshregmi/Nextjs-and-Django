import { useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
  value: number;
}
const AnimatedValue = ({ value }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <span ref={ref}></span>;
};

const AutoIncrementToText = () => {
  return (
    <div className="col-span-2  flex  items-start justify-center gap-3 md:gap-16  ">
      <div className="flex flex-col  shadow-inner shadow-innershadow px-3 pt-1 rounded-xl   justify-center items-center">
        <span className="inline-block xl:text-7xl font-bold md:text-4xl text-2xl  ">
          <AnimatedValue value={2019} />
        </span>
        <h2
          className="inline-block xltext-xl font-medium  text-dark/75 capitalize
                xl:text-center md:text-lg  text-sm
                 "
        >
          Started 
        </h2>
      </div>
      <div className=" shadow-inner shadow-innershadow flex rounded-xl flex-col px-3 pt-1 justify-center items-center">
        <span className="inline-block xl:text-7xl font-bold md:text-4xl text-2xl ">
          <AnimatedValue value={50} />+
        </span>
        <h2
          className="inline-block xltext-xl font-medium  text-dark/75 capitalize
          xl:text-center md:text-lg sm:text-base text-sm"
        >
          Projects
        </h2>
      </div>
      <div className="flex  shadow-inner shadow-innershadow rounded-xl  flex-col px-3 pt-1 justify-center items-center">
        <span className="inline-block xl:text-7xl font-bold md:text-4xl text-2xl ">
          <AnimatedValue value={4} />+
        </span>
        <h2
          className="inline-block xltext-xl font-medium  text-dark/75 capitalize
          xl:text-center md:text-lg sm:text-base text-sm"
        >
          Team Members
        </h2>
      </div>
    </div>
  );
};

export default AutoIncrementToText;
