const Sandwich = ({ color }: { color?: string }) => {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill={color ? color : "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6875 15.5C24.6875 14.9822 24.2678 14.5625 23.75 14.5625H6.25C5.73223 14.5625 5.3125 14.9822 5.3125 15.5C5.3125 16.0178 5.73223 16.4375 6.25 16.4375H23.75C24.2678 16.4375 24.6875 16.0178 24.6875 15.5Z"
        fill={color ? color : "inherit"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6875 9.25C24.6875 8.73223 24.2678 8.3125 23.75 8.3125H6.25C5.73223 8.3125 5.3125 8.73223 5.3125 9.25C5.3125 9.76777 5.73223 10.1875 6.25 10.1875H23.75C24.2678 10.1875 24.6875 9.76777 24.6875 9.25Z"
        fill={color ? color : "inherit"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.6875 21.75C24.6875 21.2322 24.2678 20.8125 23.75 20.8125H6.25C5.73223 20.8125 5.3125 21.2322 5.3125 21.75C5.3125 22.2678 5.73223 22.6875 6.25 22.6875H23.75C24.2678 22.6875 24.6875 22.2678 24.6875 21.75Z"
        fill={color ? color : "inherit"}
      />
    </svg>
  );
};

export default Sandwich;
