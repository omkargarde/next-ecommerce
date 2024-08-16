import { Bolt } from "lucide-react";
import Link from "next/link";
import CartCount from "./CartCount";

const Header = () => {
  return (
    <header className="bg-gradient-to-bl from-cyan-500 to-blue-500 md:p-4">
      <div className="mx-auto flex justify-between md:w-4/5">
        <Link href="/" className="flex justify-center align-middle">
          <Bolt />
          <p className="px-2 font-mono text-xl font-semibold">Next Ecommerce</p>
        </Link>
        <nav className="">
          <CartCount />
        </nav>
      </div>
    </header>
  );
};

export default Header;
