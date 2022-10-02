import { motion } from "framer-motion";
import { useSettingsContext } from "../context/Settings";
import IconButton from "./Buttons/IconButton";
import SettingsItem from "./SettingsItem";
import SettingsRadioButton from "./SettingsRadioButton";

export default function SettingsModal() {
  const { setIsSettingsModalOpen } = useSettingsContext();
  return (
    <motion.div
      className="w-screen h-screen sm:min-h-[600px] sm:min-w-[500px] sm:w-auto sm:h-auto bg-off-dark gap-3 
                shadow absolute sm:-z-10 z-10 -top-[100vh] -left-[250px] sm:top-[-620px] sm:-left-[225px] rounded-lg p-2 border-none"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="w-full flex justify-between mb-3 items-center">
        <h1 className="font-bold">Settings</h1>
        <IconButton
          onClick={() => {
            setIsSettingsModalOpen(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 320 512"
          >
            <path
              className="fill-light dark:fill-dark"
              d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
            />
          </svg>
        </IconButton>
      </div>
      <SettingsItem title="Recording Countdown">
        <SettingsRadioButton title="OFF" />
        <SettingsRadioButton title="3s" />
        <SettingsRadioButton title="5s" />
        <SettingsRadioButton title="10s" />
      </SettingsItem>
    </motion.div>
  );
}
