import { motion } from "framer-motion";

type Props = { children: any; isRecording: boolean };

export default function Toolbar({ children, isRecording }: Props) {
  return (
    <motion.div
      className={`absolute z-0 w-screen bottom-6 flex items-center justify-center gap-2`}
      initial={{
        y: 100,
      }}
      animate={{ y: isRecording ? -40 : 0 }}
    >
      {children}
    </motion.div>
  );
}
