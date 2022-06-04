import DivideAndConquer from "./DAC";

const arr = [3, 2, 4, 5, 6, 7, 8, 23, 3132, 4, 2, 3];

const fn = (num: number, num2: number) => num < num2;

const dac = new DivideAndConquer(arr, fn);
