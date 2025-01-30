"use client";

import { useAppDispatch, useAppSelector } from "@/store";
import {
  decrement,
  increment,
  initCounterState,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CounterResponse {
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch("/api/counter").then((res) => res.json());
  return data;
};

export const CartCounter = () => {
  const { counter } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, [dispatch, value]);

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => {
        dispatch(initCounterState(count));
      })
      .catch((err) => console.error(err));
  }, [dispatch]);

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[100px]"
          onClick={() => dispatch(decrement())}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all mr-2 w-[100px]"
          onClick={() => dispatch(increment())}
        >
          +1
        </button>
      </div>
    </>
  );
};
