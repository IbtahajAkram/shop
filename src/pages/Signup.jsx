import { Edit2Icon } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [showImage, setShowImage] = useState(null);
  const ImageUrl = showImage ? URL.createObjectURL(showImage) : "";
  const [name, setName] = useState([]);
  const navigate = useNavigate();
  const handleSignupData = () => {
    const ProfileData = {
      Username: name,
      ProfImage: ImageUrl,
    };
    localStorage.setItem("ProfileData", JSON.stringify(ProfileData));
    toast.success("Successfully Register!");
    setTimeout(() => {
        navigate("/");
    }, 2000);
  };

  return (
    <div>
      <div class="max-w-4xl mx-auto font-[sans-serif] p-[64px]">
        <div className="text-center mb-16">
          {/* Image with hover effects */}
          <div className="relative inline-block">
            <img
              src={
                ImageUrl
                  ? ImageUrl
                  : "https://tse2.mm.bing.net/th?id=OIP.jryuUgIHWL-1FVD2ww8oWgHaHa&pid=Api&P=0&h=220"
              }
              onClick={() => document.getElementById("ProImage").click()}
              className="w-[166px] h-[166px] rounded-full border-4 border-gray-300 shadow-md object-cover cursor-pointer transition-transform transform hover:scale-105"
            />
          </div>
          <input
            id="ProImage"
            type="file"
            name="ProImage"
            required
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setShowImage(e.target.files[0])}
          />

          {/* Subtitle */}
          <h4 className="text-gray-800 text-3xl font-semibold mt-6">
            Sign up into your account
          </h4>
        </div>
        <form>
          <div class="grid sm:grid-cols-2 gap-8">
            <div>
              <label class="text-gray-800 text-sm mb-2 block">First Name</label>
              <input
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Last Name</label>
              <input
                name="lname"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter last name"
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Email Id</label>
              <input
                name="email"
                type="text"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter email"
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Mobile No.</label>
              <input
                name="number"
                type="number"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter mobile number"
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                name="password"
                type="password"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter password"
              />
            </div>
            <div>
              <label class="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <input
                name="cpassword"
                type="password"
                class="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-blue-500 transition-all"
                placeholder="Enter confirm password"
              />
            </div>
          </div>

          <div class="!mt-12">
            <button
              type="button"
              onClick={handleSignupData}
              class="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md text-white bg-[#007bff] hover:bg-blue-700 focus:outline-none w-full"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
