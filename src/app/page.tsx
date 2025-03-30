import Image from "next/image";
import { title } from "./config/primitives";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-9xl">Xochikua</h1>

      <Image
        src="/images/xochi.png"
        alt="SKL Logo"
        width={500}
        height={500}
      />
    </div>
  );
}