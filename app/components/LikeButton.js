"use client";
import { useState } from "react";

export default function LikeButton() {
 const [count, setCount] = useState(0);
 return (
   <button
     onClick={() => setCount(count + 1)}
     className="px-4 py-2 bg-blue-500 text-white rounded"
   >
     👍 Likes: {count}
   </button>
 );
}