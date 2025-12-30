import { cva, type VariantProps } from "class-variance-authority";

// 버튼 스타일 정의
const buttonVariants = cva(
  "button inline-flex items-center justify-center whitespace-nowrap  transition-all cursor-pointer rounded",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-black",
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-black",
        icon: "bg-white border border-gray-300",
        disabled: "bg-gray-200 text-gray-400 cursor-not-allowed",
      },
      size: {
        default: "px-5 py-1.5 text-base",
        small: "px-3 py-1 text-xs",
        large: "px-7 py-2 text-xl",
        full: "w-full px-5 py-1.5",
        iconSmall: "w-8 h-8  [&_img]:w-4.5 [&_img]:h-4.5",
        iconDefault: "w-10 h-10  [&_img]:w-7 [&_img]:h-7",
        iconLarge: "w-12 h-12 [&_img]:w-8 [&_img]:h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// VariantProps로 타입 추출
type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant, size, disabled, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })} disabled={disabled}>
      {props.children}
    </button>
  );
}

export { Button, buttonVariants };
