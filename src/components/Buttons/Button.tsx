type Props = { children: any; onClick?: () => void };

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="rounded-full bg-light text-dark px-4 py-2 flex items-center justify-center gap-2 font-bold min-w-[150px] hover:ring hover:ring-light/50 transition-all"
    >
      {children}
    </button>
  );
}
