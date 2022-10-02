type Props = { children: any; title: string };

export default function SettingsItem({ children, title }: Props) {
  return (
    <div className="flex w-full justify-between items-center">
      <span>{title}</span>
      <div className="flex gap-2 items-center">{children}</div>
    </div>
  );
}
