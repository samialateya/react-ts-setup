import clsx from 'clsx';

export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={clsx(
        'bg-secondary focus:ring-secondary focus:ring-opacity-50 inline-block cursor-pointer rounded px-4 py-2 text-white hover:opacity-95 focus:ring-2',
        props.className ?? ''
      )}
    >
      {props.children}
    </button>
  );
}
