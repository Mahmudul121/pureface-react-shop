
const AppIcon = ({
  // color = "currentColor",
  // width = "24",
  // height = "24",
  className = "md:w-4 xl:w-5 md:h-4 xl:h-5",
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      width="24" 
      height="24" 
      viewBox="0 0 22 33" 
      className={className}
      fill="none"
    >
      <path d="M17.0909 1.5H5.09094C3.43409 1.5 2.09094 2.84315 2.09094 4.5V28.5C2.09094 30.1569 3.43409 31.5 5.09094 31.5H17.0909C18.7478 31.5 20.0909 30.1569 20.0909 28.5V4.5C20.0909 2.84315 18.7478 1.5 17.0909 1.5Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M11.0159 25.5H11.1659" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

  );
};

export default AppIcon;
