
interface InputProps {
  name: string;
  type: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}

const CustomInput = ({ name, type, autoComplete, placeholder, className }: InputProps) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      autoComplete={autoComplete}
      className={`relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none ${className}`}
      placeholder={placeholder}
    />
  )
}

export default CustomInput;