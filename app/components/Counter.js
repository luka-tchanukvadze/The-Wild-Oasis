"use client";

import { useState } from "react";

function Counter({ users }) {
  const [count, setCount] = useState(0);

  console.log(users);
  return <div onClick={() => setCount((prev) => prev + 1)}>{count}</div>;
}
export default Counter;
