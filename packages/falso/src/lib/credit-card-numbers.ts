import { rand } from './core';

export function creditCardNumbers() {
  return rand([
    "1234-2121-1221-1211",
    "1212-1221-1121-1234",
    "1211-1221-1234-2201",
    "1228-1221-1221-1431"
  ]);
}
