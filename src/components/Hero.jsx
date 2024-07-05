import Link from "next/link";
import React from "react";
import { RxSwitch } from "react-icons/rx";
import { FcBriefcase } from "react-icons/fc";

function Hero() {
  return (
    <div className="h-screen w-full main px-40">
      {/* header */}
      <div className="flex justify-between items-center gap-3  w-full pt-8">
        {/* logo */}
        <div className=" w-1/3">
          <h1>
            KAZI<span>KAZINI</span>
          </h1>
        </div>
        {/* navbar */}
        <div className=" w-2/3 text-lg text-gray-800">
          <ul className="flex justify-end items-center gap-8">
            <li>
              <Link href="#">Find a Job</Link>
            </li>
            <li>
              <Link href="#">Talents</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li className=" login text-400">
              <Link href="#">Login</Link>
            </li>
            <li className="btn px-4 py-2 text-white rounded-lg">
              <Link className="text-white" href="#">
                SignUp
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* hero */}
      <div className="flex justify-between items-center">
        <div className="px-6 mt-[5rem] w-1/2 flex flex-col gap-4 justify-center items-start  min-h-[60vh]">
          <span className="flex gap-2 items-center">
            <RxSwitch /> Find your dream job
          </span>
          <h1 className="text-6xl font-bold">
            Freelance Jobs and Talent at your fingertips.
          </h1>
          <p className="text-2xl">
            We help you find your next great talent. Start your search here
          </p>
          <div>
            <button className="btn px-4 py-2 text-white rounded-lg">
              Get Started
            </button>
          </div>
        </div>

        <div className="w-1/2  min-h-[60vh] bg-[url('/hero.svg')] bg-cover bg-center relative">
          {/* right */}
          <div className="absolute top-1/4 right-10 bg-gray-50 text-white px-4 py-2 shadow-lg h-[100px] w-[150px] rounded-lg">
            <h2 className="font-bold text-xl flex justify-center items-center gap-2">
              30k + {<FcBriefcase fontSize={30} />}
            </h2>
            <p className="text-white mt-2 text-center">People Hired.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
