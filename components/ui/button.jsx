export function Button({ children, ...props }) {
  return <button {...props} className="bg-pink-500 text-white py-2 px-4 rounded">{children}</button>;
}
