"use client";

import { Provider } from "react-redux";
import { ReactNode } from "react";
import { store } from ".";

export const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
