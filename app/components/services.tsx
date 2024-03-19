import { useRef, useState, useEffect } from "react";
import building from "../../public/images/pyramid.png";
import Image from "next/image";

interface CounterProps {
  endValue: number;
  interval: number;
}

function Counter({ endValue, interval }: CounterProps) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clearCounterInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        clearCounterInterval();

        intervalRef.current = setInterval(() => {
          if (count < endValue) {
            setCount(count + interval);
          }
        }, 100);
      } else {
        clearCounterInterval();
      }
    });

    observer.observe(counterRef.current!);

    return () => {
      observer.unobserve(counterRef.current!);
      clearCounterInterval();
    };
  }, [count]);

  return (
    <div ref={counterRef} className="counter">
      <span
        className="count animate__animated animate__count"
        data-count={count}
      >
        {count.toLocaleString()}
      </span>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-cover w-full bg-no-repeat min-h-screen relative">
      <Image
        src={building}
        alt="M.S Traders Background Image"
        className="absolute inset-0 object-cover w-full h-full z-0"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
        <p className="text-7xl text-center font-ogg">Our Services</p>
        <div className="text-left mt-20 flex flex-row justify-between">
          <div>
            <p className="text-6xl text-left">B2B</p>
            <p>Business to Bussiness</p>
            <p className="w-64 font-bold">
              We are in business with leading retail store and wholesale
              distributors across the country
            </p>
          </div>
          <div className="flex flex-row gap-10">
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>Over</div>
              <div className="flex flex-row">
                <Counter endValue={1000} interval={100} />+
              </div>
              <div>Orders</div>
            </div>
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>{""}</div>
              <div className="flex flex-row">
                <Counter endValue={20000} interval={1000} />+
              </div>
              <div>units sold</div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="text-right mt-20 flex flex-row-reverse justify-between overflow-x-hidden">
          <div>
            <p className="text-6xl text-right">B2C</p>
            <p>Business to Consumer</p>
            <p className="w-64 font-bold">
              Shop All you want at wholesale prices
            </p>
          </div>
          <div className="flex flex-row gap-10 text-center">
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>Over</div>
              <div className="flex flex-row font-bold">
                <Counter endValue={3000} interval={200} />+
              </div>
              <div>Satisfied Customers</div>
            </div>
            <div className="w-32 h-32 border-2 border-black rounded-xl flex items-center justify-center text-xl flex-col">
              <div>{""}</div>
              <div className="flex flex-row font-bold">
                <Counter endValue={500} interval={50} />+
              </div>
              <div>Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
