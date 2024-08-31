import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

function HomePage() {
  //count up
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(6000); // adjust this to your desired target number
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    let interval = null;

    if (count < target) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 50);
      }, 20); // adjust this to your desired interval (in ms)
    }

    setIntervalId(interval);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [count, target]);

  return (
    <div className="content flex flex-1 gap-2 w-full">
      <div className="text flex-[3] flex gap-8 flex-col p-4 items-start sm:justify-center justify-stretch h-full">
        <h1 className="font-[950] text-3xl md:text-6xl">
          Explore Our Hidden Gems for{" "}
          <span className="text-[#536cb0]">Sale</span> and{" "}
          <span className="text-[#d1b899]">Rent</span>
        </h1>

        <p className="text-lg font-light">
          Imagine a breezy summer destination, soaked in the North Coast’s
          sizzling sun where blue skies, pristine sea views, scenic pools and
          crystal-clear lagoons stretch out as far as you can see, so feel the
          summer.
        </p>

        <Link to="/list" className=" p-5 bg-[#536cb0] text-white rounded-md text-xl ">
          Explore Latest Offers
        </Link>

        <div className="flex items-center sm:items-start gap-8 sm:justify-between w-full sm:mt-0  md:pr-20">
          <div>
            <h2 className="font-bold text-2xl">10+</h2>
            <span className="font-normal text-[#d1b899] text-sm">
              Years of Experience
            </span>
          </div>

          <div>
            <h2 className="font-bold text-2xl">150+</h2>
            <span className="font-normal text-[#d1b899] text-sm">
              Rewards Gained
            </span>
          </div>

          <div>
            <h2 className="font-bold text-2xl">{count}</h2>
            <span className="font-normal text-[#d1b899] text-sm">
              Property Ready
            </span>
          </div>
        </div>
      </div>
      <div className="image flex items-center flex-[2] h-full bg-[#fffbf8]">
        <img
          src="https://github.com/safak/react-estate-ui/blob/completed/public/bg.png?raw=true"
          alt="homepage img"
        />
      </div>
    </div>
  );
}

export default HomePage;
