import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const states = {
  success: "bg-green-600",
  error: "bg-red-600",
  warning: "bg-yellow-600",
}

export default function MessageAlert({ message, state = states.success }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if(message) {
      setIsVisible(true);
    }
  }, [message]);

  return (
    <div
      className={`fixed top-0 right-0 z-50 lg:m-4 mt-4 w-max transition-transform duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`${
          states[state]
        } rounded-lg p-4 shadow-lg flex gap-4`}
      >
        <p className="text-center text-white">{message}</p>
        <button onClick={() => setIsVisible(false)} className="bg-transparent">
          <XMarkIcon
            className="h-6 w-6 text-white cursor-pointer"
            onClick={() => setIsVisible(false)}
          />
        </button>
      </div>
    </div>
  );
}
