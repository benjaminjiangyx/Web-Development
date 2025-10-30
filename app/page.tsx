 // app/page.tsx
 import Greeting from "./components/Greeting";
 import LikeButton from "./components/LikeButton"
 import LikeButtonTS from "./components/LikeButtonTS";
 
 export default function Home() {
  return (
    <main>
      <Greeting name="DevLab" />
      <LikeButton/>
      <hr></hr>
      <LikeButtonTS/>
    </main>
  );
 }