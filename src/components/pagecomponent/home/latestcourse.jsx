import React from "react";
import laptop from "../../resources/laptop.jpg";
import { BsHourglassBottom } from "react-icons/bs";

const Latestcourse = () => {
  return (
    <div
      className=" h-screen  bg-cover mt-8 "
      style={{ backgroundImage: `url(${laptop})` }}
    >
      <div className="w-3/5 bg-blue-900 opacity-80 h-full ">
        <div className="w-10/12 mx-auto  ">
          <div className="pt-8 ">
            <h1 className="mt-8 text-white text-3xl font-bold">
              Latest Course
            </h1>
            <p className="text-md mt-8 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
              reprehenderit, maiores quae et accusantium aliquid culpa itaque
              illum corporis impedit esse quasi adipisci exercitationem
              consequuntur, ducimus est. Magni laboriosam nesciunt quo et.
            </p>
          </div>
          <div className="grid grid-cols-2 mt-8 gap-8">
            <div>
              <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <BsHourglassBottom />
              </div>
              <div className="mt-8">
                <h1 className="text-3xl font-bold text-white ">
                  Bachelor Degree In Computer Graphics
                </h1>
                <p className="mt-8 text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, libero veritatis deleniti cupiditate nemo et tempora
                  sapiente officiis fugit dolorum.
                </p>
                <button className="mt-8 border border-white py-2 px-4 rounded text-white">
                  View More
                </button>
              </div>
            </div>
            <div>
              <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <BsHourglassBottom />
              </div>
              <div className="mt-8">
                <h1 className="text-3xl font-bold text-white ">
                  Bachelor Degree In Computer Graphics
                </h1>
                <p className="mt-8 text-white text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, libero veritatis deleniti cupiditate nemo et tempora
                  sapiente officiis fugit dolorum.
                </p>
                <button className="mt-8 border border-white py-2 px-4 rounded text-white">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latestcourse;
