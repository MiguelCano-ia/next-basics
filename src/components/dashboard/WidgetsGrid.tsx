"use client";

import { IoStorefront } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const { counter } = useAppSelector((state) => state.counter);

  return (
    <div className="flex flex-wrap p-2 justify-center">
      <SimpleWidget
        title={counter}
        icon={<IoStorefront className="text-gray-400" size={70} />}
        subTitle={"Ready to order?"}
        label={"Products"}
        href={"counter"}
      />
      <SimpleWidget title={0} />
    </div>
  );
};
