import { motion } from "framer-motion";

type Props = { children: any };

export default function Toolbar({ children }: Props) {
  return (
    <motion.div
      className="fixed w-screen bottom-6 flex items-center justify-center gap-2"
      initial={{
        y: 100,
      }}
      animate={{ y: 0 }}
    >
      {children}
    </motion.div>
  );
}
