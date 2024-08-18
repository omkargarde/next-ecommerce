import { Bolt } from "lucide-react";
import Link from "next/link";
import CartCount from "./CartCount";

const Header = () => {
  return (
    <header className="bg-gradient-to-bl from-cyan-500 to-blue-500 text-white md:p-4">
      <div className="mx-auto flex justify-between p-4 md:w-4/5">
        <Link
          href="/"
          className="flex items-center justify-center align-middle"
        >
          <Bolt />
          <p className="md:2xl px-2 font-sans text-3xl font-semibold">
            Next Ecommerce
          </p>
        </Link>
        <nav className="flex items-center justify-center align-middle">
          <CartCount />
        </nav>
      </div>
    </header>
  );
};

export default Header;
