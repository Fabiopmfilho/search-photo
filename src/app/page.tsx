// import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  console.log("foi para home");
  return (
    <div>
      <h1>Home</h1>
      <h3>
        <Link href="/photos" className="text-sm">Photos</Link>
      </h3>
    </div>
  );
}
