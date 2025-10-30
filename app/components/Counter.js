"use client";

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>;
}
export default Counter;
