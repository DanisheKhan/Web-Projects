import React from "react";
import { RxCross2 } from "react-icons/rx";

const Model = ({ onClick, isOpen, children }) => {
  return <>{isOpen && <div>
      
      <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-transparent border-2  p-5 rounded-xl">
          <button onClick={onClick} className="absolute right-5 top-5 text-3xl">
          <RxCross2 />
          </button>
          {children}
        </div>
      </div>
    </div>}</>;
};

export default Model;
