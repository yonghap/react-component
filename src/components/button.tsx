import { cva, type VariantProps } from "class-variance-authority";

// 버튼 스타일 정의
const buttonVariants = cva(
  "button inline-flex items-center justify-center whitespace-nowrap  transition-all cursor-pointer rounded",
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-black",
      },
      size: {
        small: "px-2 py-1 text-sm",
        large: "px-4 py-2 text-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "small",
    },
  }
);

// VariantProps로 타입 추출
type ButtonProps = VariantProps<typeof buttonVariants> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ intent, size, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ intent, size })}>
      {props.children}
    </button>
  );
}

export { Button, buttonVariants };
