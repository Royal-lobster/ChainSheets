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
  return (
    <div className="mb-2">
      <label className="block mb-1 text-sm font-semibold text-gray-700">
        {label}:
      </label>
      {children ? (
        children
      ) : (
        <input
          {...register(name)}
          placeholder={placeholder}
          type={type}
          className="border w-full p-2 rounded"
        />
      )}
      <p className="text-xs text-red-500 mt-1">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

export default FieldWrapper;
