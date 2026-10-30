import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center bg-white pt-24">
      <Image
        src="/brand/smart-alpha-logo.png"
        alt="Smart Alpha"
        width={200}
        height={66}
        className="h-11 w-auto animate-pulse"
        priority
      />
    </div>
  );
}
