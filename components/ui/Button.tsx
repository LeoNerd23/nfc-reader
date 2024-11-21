import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import { cva, type VariantProps } from "class-variance-authority";
import { la } from "@/lib/utils";

const buttonVariants = cva(
  "items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-blue-500 text-white hover:bg-blue-600",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gray-300 text-gray-800 hover:bg-gray-100",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        ghost: "bg-transparent text-gray-800 hover:bg-gray-100",
      },
      size: {
        default: "h-10 px-4",
        sm: "h-8 px-3",
        lg: "h-12 px-6",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends TouchableOpacityProps,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  textClassName?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  textClassName,
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      className={la(buttonVariants({ variant, size, className }))}
    >
      <View className="flex-row items-center justify-center gap-3">
        {React.Children.map(children, (child) =>
          typeof child === "string" ? (
            <Text className={la(textClassName)}>{child}</Text>
          ) : (
            child
          )
        )}
      </View>
    </TouchableOpacity>
  );
};

export { Button, buttonVariants };
