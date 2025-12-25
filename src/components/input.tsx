import { cva, type VariantProps } from "class-variance-authority";

// 버튼 스타일 정의
const inputVariants = cva(
  "border border-gray-300 rounded  outline-none disabled:bg-gray-200 disabled:text-gray-900",
  {
    variants: {
      variant: {
        default: "",
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-200 text-black",
      },
      inputSize: {
        default: "h-10 text-sm px-2 py-1",
        small: "h-8 text-xs px-2 py-1",
        large: "h-12 text-xl px-3 py-1",
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
