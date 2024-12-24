import React from 'react'

export default function Sidebar() {
  return (
    <div className="bg-white max-w-full sm:max-w-3xl rounded-tl-[20px] rounded-bl[20px] rounded-br-[20px] dark:bg-gray-800">
      <ProgressStep />
    </div>
  )
}

function ProgressStep() {
  return (
    <div className="flex flex-col space-y-8 mx-8 mt-8">
      {[1, 2, 3, 4].map((stepNumber) => (
        <div key={stepNumber} className="flex items-center space-x-5">
          <div className="flex items-center justify-center w-12 h-12 border-2 bg-gray-800 text-white font-bold rounded-full dark:bg-white dark:text-gray-800">
            {stepNumber}
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-600 dark:text-white">STEP {stepNumber}</div>
            <div className="text-lg text-gray-900 dark:text-white">
              {stepNumber === 1
                ? "Personal Info"
                : stepNumber === 2
                ? "Address Details"
                : stepNumber === 3
                ? "Preferences"
                : "Review & Submit"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
