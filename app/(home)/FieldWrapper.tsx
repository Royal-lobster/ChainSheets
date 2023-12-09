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
    <div className="my-4">
      <label className="block text-lg mb-2 text-neutral-400">{label}:</label>
      {children ? (
        children
      ) : (
        <input
          {...register(name, {
            valueAsNumber: type === "number" || type === "range",
          })}
          placeholder={placeholder}
          type={type}
          className="block border w-full p-2 rounded"
        />
      )}
      <p className="text-xs text-red-500 mt-1">
        {errors[name]?.message?.toString()}
      </p>
    </div>
  );
};

export default FieldWrapper;
