import React, { useState, useEffect } from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";

type FieldWrapperProps = {
  label: string;
  name: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  placeholder?: string;
  type?: string;
  children?: React.ReactNode;
  defaultValue?: string; // Add a defaultValue prop for the range
};

const FieldWrapper = ({
  label,
  name,
  register,
  errors,
  placeholder,
  type = "text",
  children,
  defaultValue = "",
}: FieldWrapperProps) => {
  const [rangeValue, setRangeValue] = useState(defaultValue);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(event.target.value);
  };

  useEffect(() => {
    if (type === "range" && !rangeValue) {
      setRangeValue("50");
    }
  }, [type, rangeValue]);

  return (
    <div className="my-4">
      <div className="flex justify-between items-center mb-2">
        <label className="block text-lg text-neutral-400">{label}:</label>
        {type === "range" && <span className="text-lg">{rangeValue}%</span>}
      </div>
      {type === "range" ? (
        <input
          {...register(name)}
          type={type}
          className="w-full h-2 rounded text-black"
          onChange={handleRangeChange}
          value={rangeValue}
        />
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
