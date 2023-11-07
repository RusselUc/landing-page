const ChevronRightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="10"
        strokeDashoffset="10"
        strokeLinecap="round"
        strokeWidth="2"
        d="M9 5L16 12M9 19L16 12"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.3s"
          values="10;0"
        />
      </path>
    </svg>
  );
};

export default ChevronRightIcon;
