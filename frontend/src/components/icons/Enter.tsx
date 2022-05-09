const Enter = ({ color }: { color?: string }) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color ? color : "inherit"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.80125 15.625L9.3925 19.005C9.56827 19.1766 9.66965 19.4104 9.67481 19.656C9.67998 19.9016 9.58853 20.1395 9.42014 20.3184C9.25174 20.4972 9.01986 20.6029 8.77437 20.6125C8.52889 20.6222 8.28943 20.5351 8.1075 20.37L2.795 15.37C2.70193 15.2823 2.62776 15.1766 2.57707 15.0592C2.52638 14.9418 2.50023 14.8153 2.50023 14.6875C2.50023 14.5597 2.52638 14.4332 2.57707 14.3158C2.62776 14.1984 2.70193 14.0927 2.795 14.005L8.1075 9.005C8.19662 8.91798 8.30218 8.84959 8.41802 8.80382C8.53387 8.75806 8.65767 8.73584 8.7822 8.73846C8.90673 8.74108 9.02949 8.76849 9.14331 8.81909C9.25712 8.86968 9.35972 8.94245 9.44509 9.03314C9.53047 9.12384 9.59692 9.23063 9.64056 9.3473C9.6842 9.46396 9.70415 9.58815 9.69926 9.71261C9.69436 9.83707 9.66471 9.9593 9.61204 10.0722C9.55937 10.185 9.48474 10.2863 9.3925 10.37L5.80125 13.75H18.4375C19.0177 13.75 19.5741 13.5195 19.9843 13.1093C20.3945 12.6991 20.625 12.1427 20.625 11.5625V5.9375C20.625 5.68886 20.7238 5.4504 20.8996 5.27459C21.0754 5.09877 21.3139 5 21.5625 5C21.8111 5 22.0496 5.09877 22.2254 5.27459C22.4012 5.4504 22.5 5.68886 22.5 5.9375V11.5625C22.5 12.6399 22.072 13.6733 21.3101 14.4351C20.5483 15.197 19.5149 15.625 18.4375 15.625H5.80125Z"
        fill={color ? color : "inherit"}
      />
    </svg>
  );
};

export default Enter;