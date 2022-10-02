export default function SettingsRadioButton({ title }: { title: string }) {
  return (
    <button className="py-1 px-2 bg-dark hover:ring-2 hover:ring-light/20 rounded-full transition">
      {title}
    </button>
  );
}
