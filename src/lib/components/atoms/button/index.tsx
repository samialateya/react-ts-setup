export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`bg-secondary inline-block cursor-pointer rounded px-4 py-2 text-white hover:opacity-95 ${props.className}`}
    >
      {props.children}
    </button>
  );
}
