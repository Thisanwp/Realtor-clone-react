import React from 'react';
import {FcGoogle} from "react-icons/fc"


export default function OAuth() {
  return (
    <button className="flex items-center justify-center w-full bg-red-600 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-400 active:bg-yellow-300 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded-md ">
          <FcGoogle className=" text-2xl bg-black rounded-full mr-2"/>
        Continue with Google
    </button>
  );
}
