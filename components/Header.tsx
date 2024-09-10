import { Bolt } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CartCount from "./CartCount";
import LoginButton from "./LoginButton";

const Header = () => {
  return (
    <header className="bg-gradient-to-bl from-cyan-500 to-blue-500 text-white md:p-4">
      <div className="mx-auto flex justify-between p-4">
        <Link
          href="/"
          className="flex items-center justify-center align-middle"
        >
          <Image src="/logo.svg" alt="Logo" height={45} width={45} />
          <p className="md:2xl px-2 font-sans text-3xl font-semibold">
            Next Ecommerce
          </p>
        </Link>
        <nav className="flex items-center justify-center align-middle">
          <CartCount />
        </nav>
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
