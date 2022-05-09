const Email = ({ color }: { color?: string }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill={color ? color : "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.38964 4.96354C12.7878 4.5703 17.2123 4.5703 21.6104 4.96354L23.5071 5.13313C25.3976 5.30216 26.925 6.74638 27.1996 8.62441C27.8177 12.8523 27.8177 17.1477 27.1996 21.3756C26.925 23.2536 25.3976 24.6978 23.5071 24.8669L21.6104 25.0364C17.2123 25.4297 12.7878 25.4297 8.38965 25.0364L6.49297 24.8669C4.60251 24.6978 3.07507 23.2536 2.8005 21.3756C2.18239 17.1477 2.18238 12.8523 2.8005 8.62441C3.07507 6.74638 4.60251 5.30216 6.49297 5.13313L8.38964 4.96354ZM7.3195 8.54955C7.02897 8.39311 6.67758 8.40093 6.39429 8.57013C6.111 8.73934 5.93753 9.04502 5.93753 9.37499V21.25C5.93753 21.7678 6.35726 22.1875 6.87503 22.1875C7.3928 22.1875 7.81253 21.7678 7.81253 21.25V10.9446L14.5556 14.5754C14.833 14.7248 15.167 14.7248 15.4445 14.5754L22.1875 10.9446V21.25C22.1875 21.7678 22.6073 22.1875 23.125 22.1875C23.6428 22.1875 24.0625 21.7678 24.0625 21.25V9.37499C24.0625 9.04502 23.8891 8.73934 23.6058 8.57013C23.3225 8.40093 22.9711 8.39311 22.6806 8.54955L15 12.6852L7.3195 8.54955Z"
        fill={color ? color : "inherit"}
      />
    </svg>
  );
};

export default Email;