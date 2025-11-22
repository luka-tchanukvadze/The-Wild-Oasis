import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 z-10 sm:gap-4">
      <Image
        src={logo}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        quality={100}
      />
      {/* <Image src="/logo.png" height="60" width="60" alt="The Wild Oasis logo" /> */}
      <span className="text-sm font-semibold text-primary-100 sm:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
