type Props = {
  children: string;
  onClick?: (() => Promise<void>) | (() => void);
};

const Button = (props: Props) => {
  const { children, onClick } = props;
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className=" rounded-full bg-blue-500 py-2 px-6 text-white hover:bg-blue-700 outline-none focus:bg-blue-700"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
