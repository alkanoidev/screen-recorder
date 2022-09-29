import Button from "./Buttons/Button";
import "./style.scss";

type Props = {
  downloadURL: string;
};

export default function DownloadModal({ downloadURL }: Props) {
  return (
    <div className="z-10 w-screen h-screen fixed top-0 left-0 bg-light dark:bg-dark grid place-content-center">
      <div className="h-full flex flex-col items-center gap-20">
        <video
          autoPlay
          controls
          src={downloadURL}
          className="rounded-md aspect-video w-[800px] shadow-left-right"
        ></video>
        <a href={downloadURL} download="test.mp4">
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 512 512"
            >
              <path
                className="fill-light dark:fill-dark"
                d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"
              />
            </svg>
            Download
          </Button>
        </a>
      </div>
    </div>
  );
}
