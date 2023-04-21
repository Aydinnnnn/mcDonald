import React from "react";
interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="w-full h-full bg-[#DA291C] p-5">{children}</div>;
};
export default Container;
