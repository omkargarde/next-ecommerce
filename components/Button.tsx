const Button = ({
  children,
  onClick,
}: Readonly<{
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}>) => {
  return (
    <button
      className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
