function Button({
  backgroundColor = "rgb(242, 76, 61)",
  color = "rgb(250, 250, 250)",
  hover = true,
  className = "",
  children,
}) {
  return (
    <button
      className={`w-fit h-11 rounded-3xl transition-all ease-in-out  px-8 ${hover ? "hover:shadow-2xl shadow-md hover:scale-105" : ""
        } ${className}`}
      style={{
        backgroundColor: backgroundColor,
        color: color,
      }}
    >
      {children}
    </button>
  );
}

export default Button;
