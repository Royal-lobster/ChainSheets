import { tv } from "tailwind-variants";

export const chip = tv({
  base: "w-max px-2 py-1 bg-neutral-200 font-semibold text-neutral-500 text-xs rounded-full uppercase tracking-wide",
  variants: {
    type: {
      danger: "bg-red-300 text-red-700",
      success: "bg-green-300 text-green-700",
      warning: "bg-yellow-300 text-yellow-700",
    },
  },
});

export const button = tv({
  base: "flex self-center justify-center items-center gap-2 font-semibold rounded-lg",
  variants: {
    type: {
      filled:
        "bg-neutral-900 text-white border-2 border-neutral-900 hover:bg-neutral-800 hover:shadow-md",
      outline:
        "bg-transparent text-neutral-900 border-2 border-neutral-900 hover:bg-neutral-100 hover:shadow-md",
      link: "bg-transparent text-neutral-900 hover:underline hover:underline-offset-4",
      lightOutline:
        "bg-transparent text-neutral-100 border-2 border-neutral-400 hover:bg-neutral-800 hover:shadow-md",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-1.5 text-base",
      lg: "px-8 py-4 text-lg",
    },
  },
  defaultVariants: {
    type: "filled",
    size: "md",
  },
});
