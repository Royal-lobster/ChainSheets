import React, { useState } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type FieldWrapperProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
};

const FieldWrapper = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
  children,
}: FieldWrapperProps) => {
  // State to hold the value of the range input
  const [rangeValue, setRangeValue] = useState("");

  // Function to handle range value change
  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(event.target.value);
  };

  return (
    <div className="my-4">
      <label className="block text-lg mb-2 text-neutral-400">{label}:</label>
      {type === "range" ? (
        <div className="range-container">
          <input
            {...register(name)}
            type={type}
            className="block border w-full p-2 rounded text-black"
            onChange={handleRangeChange}
          />
          <div className="range-value">{rangeValue}%</div>
        </div>
      ) : children || (
        <input
          {...register(name)}
          placeholder={placeholder}
          type={type}
          className="block border w-full p-2 rounded text-black"
        />
      )}
      <p className="text-xs text-red-500 mt-1">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

export default FieldWrapper;
