import React from 'react'

const ErrorMessage = () => {
  return (
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2  p-2 text-center">
      <h1 className="font-semibold text-2xl sm:text-3xl text-slate-900">
        Page Not Found
      </h1>
      <div className="font-semibold  text-normal sm:text-xl  mt-3 text-slate-700 mb-6">
        Page you are looking for could not be found.
      </div>
    </div>
  );
}

export default ErrorMessage;