const Space = ({ color }: { color?: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color ? color : "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7083 13.5417H7.29168V9.375H5.20834V15.625H19.7917V9.375H17.7083V13.5417Z"
        fill={color ? color : "inherit"}
      />
    </svg>
  );
};

export default Space;
