import React from "react";
interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className="w-full h-96 flex flex-col lg:flex-row gap-8  p-5">
      {children}
    </div>
  );
};
export default Container;
