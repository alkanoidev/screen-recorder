import Button from "./Button";

type Props = { onClick: () => void };

export default function StartButton({ onClick }: Props) {
  return (
    <Button onClick={onClick}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="h ttp://www.w3.org/2000/svg"
      >
        <path
          d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM6.72004 12C6.72004 14.916 9.08396 17.28 12 17.28C14.916 17.28 17.28 14.916 17.28 12C17.28 9.08396 14.916 6.72004 12 6.72004C9.08396 6.72004 6.72004 9.08396 6.72004 12Z"
          className="fill-red-400"
        />
      </svg>
      Record
    </Button>
  );
}
