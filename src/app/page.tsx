import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col h-screen w-screen mx-auto items-center justify-center">
      <h1 className="font-bold text-2xl my-3">
        Welcome to our Computer Graphics Final Project
      </h1>
      <Link href="/playground" className="p-4 bg-blue-300 rounded-md">
        Press Here to play
      </Link>
    </main>
  );
}
