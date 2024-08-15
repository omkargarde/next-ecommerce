import { Bolt, NotebookPen } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-bl from-cyan-500 to-blue-500 md:p-4">
      <div className="mx-auto flex justify-between md:w-3/5">
        <div className="flex justify-center align-middle">
          <Bolt />
          <p className="px-2 font-mono text-xl font-semibold">Next Ecommerce</p>
        </div>
        <nav>
          <a className="px-2" href="">
            placeholder
          </a>
          <a className="px-2" href="">
            placeholder
          </a>
          <a className="px-2" href="">
            placeholder
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
