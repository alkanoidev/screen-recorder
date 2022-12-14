type Props = { children: any; onClick: () => void; className?: string };

export default function IconButton({ children, onClick, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full bg-light px-2 py-2 flex items-center justify-center gap-2 font-bold hover:ring hover:ring-light/50 transition-all" +
        className
      }
    >
      {children}
    </button>
  );
}
