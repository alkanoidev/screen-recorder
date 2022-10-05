import { useRef, useState } from "react";
import StartButton from "./components/Buttons/StartButton";
import StopButton from "./components/Buttons/StopButton";
import Toolbar from "./components/Toolbar";
import { useSettingsContext } from "./context/Settings";
import DownloadModal from "./components/DownloadModal";

export default function App() {
  const [isRecording, setIsRecording] = useState(false);
  const { isDownloadModalOpen, setIsDownloadModalOpen } = useSettingsContext();
  const videoRef = useRef<null | HTMLVideoElement>(null);
  const [downloadURL, setDownloadURL] = useState("");

  let stream: MediaStream;
  let recorder: MediaRecorder;

  const startRecording = async () => {
    try {
      stream = await navigator.mediaDevices.getDisplayMedia({
        audio: false,
        video: { frameRate: { ideal: 30 } },
      });
      setIsRecording(true);
      if (videoRef.current !== null) videoRef.current.srcObject = stream;
    } catch (err) {
      if (err) setIsRecording(false);
    }

    recorder = new MediaRecorder(stream);

    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      setIsRecording(false);
      setDownloadURL(url);
      setIsDownloadModalOpen(true);

      if (videoRef.current !== null) videoRef.current.srcObject = null;
    };

    const chunks: BlobPart[] = [];
    recorder.ondataavailable = (e) => {
      chunks.push(e.data);
    };
    recorder.start(200);
  };

  if (window.innerWidth < 768) {
    return (
      <div className="bg-dark h-full grid place-content-center text-center">
        <h1>
          We are sorry <br /> Screen Recording isn't supported <br /> on mobile
          devices :(
        </h1>
      </div>
    );
  }
  return (
    <div className="bg-dark h-full flex justify-center items-start">
      <video
        ref={videoRef}
        autoPlay
        muted
        onClick={() => {
          startRecording();
        }}
        className="rounded-md aspect-video w-[800px] bg-off-dark/20 ring ring-off-dark/70 mt-5 hover:cursor-pointer"
      ></video>
      <Toolbar isRecording={isRecording}>
        {!isRecording && (
          <StartButton
            onClick={() => {
              startRecording();
            }}
          />
        )}
      </Toolbar>

      {isDownloadModalOpen && <DownloadModal downloadURL={downloadURL} />}
    </div>
  );
}
