type Props = {
  children: string;
  onClick?: () => Promise<void>;
};

const Button = (props: Props) => {
  const { children, onClick } = props;
  return (
    <div className="flex justify-center">
      <button onClick={onClick}
        className=" rounded-full bg-blue-500 py-2 px-6 text-white"
        type="submit"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
