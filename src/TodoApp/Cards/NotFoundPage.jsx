import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "lucide-react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".container", { opacity: 30, duration: 3, y: -50 });
    gsap.set(".fourofour2", { scale: 1 });
    const tl = gsap.timeline({
      repeat: -1,
      delay: 3,
      defaults: { duration: 0.5, ease: "none" },
    });
    tl.to(".fourofour2", { scale: 1.1 }).to(".fourofour2", { scale: 1 });
  }, []);

  return (
    <div className="container  z-50 mt-[88px]  flex justify-center flex-col text-center">
      {/* Lottie Player */}

      <lottie-player
        src="https://assets5.lottiefiles.com/packages/lf20_3a0bpmmc.json"
        background="transparent"
        speed="1"
        style={{ width: "500px", height: "500px", margin: "auto" }}
        autoplay
      ></lottie-player>
      <div className="flex  justify-center items-center flex-col">
        {/* 404 Message */}
        <h2 className="fourofour2   text-2xl font-bold text-black mt-4">
          Page Not Found!
        </h2>

        {/* Button */}
        <NavLink to="/allproducts">
          <button className="zoom bg-black  text-white px-4 py-2 rounded mt-8 capitalize hover:bg-gray-800">
            Go To Home
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NotFoundPage;
