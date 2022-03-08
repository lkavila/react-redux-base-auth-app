
interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  children?: React.ReactNode;
  name?: string;
}

const CustomButton = ({ type, className, children, name }: ButtonProps) => {
  return (
    <button
      name={name}
      id={name}
      type={type}
      className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

export default CustomButton;