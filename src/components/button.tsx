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
      },
      size: {
        default: "px-4 py-1 text-base",
        small: "px-3 py-1 text-xs",
        large: "px-6 py-1.5 text-xl",
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

function Button({ variant, size, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ variant, size })}>
      {props.children}
    </button>
  );
}

export { Button, buttonVariants };
