import { motion } from "framer-motion";



function Button({
  backgroundColor = "bg-red",
  textColor = "text-veryLightGray",
  hover = true,
  className = "",
  children,
}) {
  return (
    <motion.button
      initial={{
        scale: 1,
        boxShadow: "2px 2px 22px -9px #5d5151"
      }}
      whileHover={hover && {
        scale: 1.02,
        boxShadow: "6.5px 6.5px 32px -9px #5d5151",
      }}
      whileTap={
        hover && { scale: 0.98 }
      }
      transition={{ duration: 0.05 }}
      className={`w-fit h-11 rounded-3xl px-8 ${backgroundColor} ${textColor} ${className}`}
    >
      {children}
    </motion.button >
  );
}

export default Button;
