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
      initial={{ scale: 1 }}
      whileHover={hover && {
        scale: 1.05,
      }}
      whileTap={
        hover && { scale: 0.95, rotate: "-1deg" }
      }
      transition={{ duration: 0.05 }}
      className={`w-fit h-11 rounded-3xl px-8 shadow-md ${backgroundColor} ${textColor} ${className} ${hover && "shadow-2xl"}`}
    >
      {children}
    </motion.button >
  );
}

export default Button;
