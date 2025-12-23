import { cva, type VariantProps } from "class-variance-authority";

// 버튼 스타일 정의
const inputVariants = cva(
  "inline-flex items-center justify-start whitespace-nowrap transition-all rounded border focus:outline-none",
  {
    variants: {
      variant: {
        default: "bg-gray-100 text-black",
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-black",
      },
      inputSize: {
        default: "px-4 py-1 text-base",
        small: "px-3 py-1 text-xs",
        large: "px-6 py-1.5 text-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

// VariantProps로 타입 추출
type InputProps = VariantProps<typeof inputVariants> &
  React.InputHTMLAttributes<HTMLInputElement>;

function Input({ variant, inputSize, ...props }: InputProps) {
  return (
    <input
      type="text"
      className={inputVariants({ variant, inputSize })}
      {...props}
    />
  );
}

export { Input, inputVariants };
