import { forwardRef } from "react";

const Input = forwardRef(function ({ title, textarea, ...props }, ref) {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-cyan-800">
        {title}
      </label>
      {textarea ? (
        <textarea
          ref={ref}
          className="w-full mb-6 p-1 border-2 rounded-sm bg-stone-200 text-stone-600 focus:outline-none focus:border-cyan-700"
          {...props}
        />
      ) : (
        <input
          ref={ref}
          className="w-full pt-3 mb-6 p-1 border-2 rounded-sm  bg-stone-200 text-stone-600 focus:outline-none focus:border-cyan-700"
          {...props}
        />
      )}
    </p>
  );
});

export default Input;
