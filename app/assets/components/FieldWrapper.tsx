import { IconAlertCircle } from "@tabler/icons-react";
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
  isOnDark?: boolean;
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
  isOnDark = false,
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
    <div>
      <div className="flex justify-between items-center mb-2 w-full">
        <label
          data-on-dark={isOnDark ? "yes" : undefined}
          className="block text-lg text-neutral-500 data-[on-dark]:text-neutral-400"
        >
          {label}:
        </label>
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
      ) : type === "textarea" ? (
        <textarea
          {...register(name)}
          placeholder={placeholder}
          className="block border w-full p-2 rounded text-black"
          rows={3}
        />
      ) : (
        children || (
          <input
            {...register(name)}
            placeholder={placeholder}
            type={type}
            className="block border w-full p-2 rounded text-black"
          />
        )
      )}
      {errors[name]?.message && (
        <p className="flex gap-2 text-xs text-red-500 mt-1">
          <IconAlertCircle />
          {errors[name]?.message?.toString()}
        </p>
      )}
    </div>
  );
};

export default FieldWrapper;
