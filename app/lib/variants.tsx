import { tv } from "tailwind-variants";

export const chip = tv({
  base: "w-max px-2 py-1 bg-neutral-200 text-neutral-500 text-xs rounded-full uppercase tracking-wide",
  variants: {
    type: {
      danger: "bg-red-200 text-red-500",
      success: "bg-green-200 text-green-500",
      warning: "bg-yellow-200 text-yellow-500",
    },
  },
});

export const button = tv({
  base: "flex self-center justify-center items-center gap-2 font-semibold rounded-lg",
  variants: {
    type: {
      filled: "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-md",
      outline:
        "bg-transparent text-neutral-900 border-2 border-neutral-900 hover:bg-neutral-100 hover:shadow-md",
      link: "bg-transparent text-neutral-900 hover:underline hover:underline-offset-4",
      lightOutline:
        "bg-transparent text-neutral-100 border-2 border-neutral-400 hover:bg-neutral-800 hover:shadow-md",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-8 py-4 text-lg",
    },
  },
  defaultVariants: {
    type: "filled",
    size: "md",
  },
});
