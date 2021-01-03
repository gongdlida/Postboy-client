export default function OrangeButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-orange-400 rounded focus:outline-none ml-2"
    >
      <p className="px-2 py-1 text-sm font-medium text-white">{children}</p>
    </button>
  );
}
