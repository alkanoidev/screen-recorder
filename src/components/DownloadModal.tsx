import Button from "./Buttons/Button";
import { useSettingsContext } from "../context/Settings";
import { motion } from "framer-motion";

type Props = {
  downloadURL: string;
};

export default function DownloadModal({ downloadURL }: Props) {
  const { setIsDownloadModalOpen } = useSettingsContext();

  return (
    <div className="z-10 w-screen h-screen fixed top-0 left-0 bg-light dark:bg-dark grid place-content-center">
      <div className="h-full flex flex-col items-center gap-10">
        <video
          autoPlay
          controls
          src={downloadURL}
          className="rounded-md aspect-video w-[800px] ring-light/20 ring"
        ></video>
        <motion.div
          className="flex gap-2"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <a href={downloadURL} download="screen-recording.mp4">
            <Button>
              <svg
                width="28"
                height="28"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 12C2 11.4477 1.55228 11 1 11C0.447715 11 0 11.4477 0 12H2ZM1 17.5H0C0 18.0523 0.447715 18.5 1 18.5L1 17.5ZM18 17.5V18.5C18.5523 18.5 19 18.0523 19 17.5H18ZM19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12H19ZM0 12V17.5H2V12H0ZM1 18.5H18V16.5H1V18.5ZM19 17.5V12H17V17.5H19Z"
                  fill="black"
                />
                <path
                  d="M9.5 1V6.5V9.25V12M9.5 12L13 7.875M9.5 12L6 7.875"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Download
            </Button>
          </a>
          <Button
            onClick={() => {
              setIsDownloadModalOpen(false);
            }}
          >
            New Recording
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
