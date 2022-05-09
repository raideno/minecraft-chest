const Arrow = ({ color }: { color?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={color ? color : "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.8371 10.6629C16.471 10.2968 16.471 9.7032 16.8371 9.33709C17.2032 8.97097 17.7968 8.97097 18.1629 9.33709L23.1629 14.3371C23.529 14.7032 23.529 15.2968 23.1629 15.6629L18.1629 20.6629C17.7968 21.029 17.2032 21.029 16.8371 20.6629C16.471 20.2968 16.471 19.7032 16.8371 19.3371L20.2367 15.9375H8.125C7.60723 15.9375 7.1875 15.5178 7.1875 15C7.1875 14.4822 7.60723 14.0625 8.125 14.0625H20.2367L16.8371 10.6629Z"
        fill={color ? color : "inherit"}
      />
    </svg>
  );
};

export default Arrow;
