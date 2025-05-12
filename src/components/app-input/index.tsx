import { cn } from "@/lib/utils";
import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import type { ControllerFieldState, ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface IProps<TFieldValues extends FieldValues> {
  label: string;
  field?: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
  formState?: ControllerFieldState;
  disabled?: boolean;
  isRequired?: boolean;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  className?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const AppInput = <TFieldValues extends FieldValues>({
  label,
  field,
  formState,
  disabled,
  isRequired,
  rightIcon,
  leftIcon,
  className,
  placeholder,
  onChange,
  ...props
}: IProps<TFieldValues> & Partial<HTMLInputElement>) => {
  const [type, setType] = useState(props?.type ?? "text");
  return (
    <div className={cn("flex flex-col", className)}>
      <label className="mb-1 text-sm text-gray-900 font-medium">
        {label ?? "Please enter your email address"} {isRequired ? <span className="text-red-500">*</span> : null}
      </label>
      <div
        className={cn(
          `flex items-center shrink-0 border gap-1.5 border-gray-400 rounded-lg py-2.5 px-3 focus-within:border-blue-dark-500 hover:border-blue-dark-500 ${formState?.error ? "border-red-500" : "border-gray-400"}`,
        )}
      >
        {leftIcon}
        <Input
          onChange={onChange}
          {...field}
          {...(props as Omit<React.InputHTMLAttributes<HTMLInputElement>, "capture">)}
          placeholder={placeholder}
          disabled={disabled}
          type={type}
          className="border-0 text-base focus-visible:ring-0 focus:right-0 h-full shadow-none"
        />
        {props?.type === "password" ? (
          <Button
            variant={"ghost"}
            className="p-1 m-0 h-full"
            onClick={() => {
              setType((prev) => (prev === "password" ? "text" : "password"));
            }}
          >
            {type !== "password" ? (
              <Eye className="w-5 h-5 stroke-gray-500" />
            ) : (
              <EyeOff className="w-5 h-5 stroke-gray-500" />
            )}
          </Button>
        ) : null}
        {rightIcon}
        {field?.value && formState?.isTouched ? (
          <Button
            variant={"ghost"}
            className="p-1 m-0 h-full"
            disabled={disabled}
            onClick={() => {
              field?.onChange("");
            }}
          >
            <X className="w-5 h-5" />
          </Button>
        ) : null}
      </div>
      {formState?.error ? (
        <div className="text-[0.8rem] font-medium text-destructive mt-1">{formState?.error?.message}</div>
      ) : null}
    </div>
  );
};

export default AppInput;
