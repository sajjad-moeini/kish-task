import React, { ChangeEvent } from "react";

interface Props<T> {
  title: T;
  setTitle: React.Dispatch<React.SetStateAction<T>>;
  removeErr: (value: boolean) => void;
  placeholder: string;
  type: string;
}

const CustomInput = <T extends string | number | undefined>({
  title,
  setTitle,
  type,
  placeholder,
  removeErr,
}: Props<T>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value as T);
    removeErr(false);
  };

  return (
    <input
      type={type}
      className="px-4 py-2 text-white bg-gray-500 rounded-lg w-full outline-blue-500 my-3"
      value={title || ""}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default CustomInput;
