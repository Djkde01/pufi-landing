import Link from "next/link";

const Button = ({ text, link, type }) =>
  type === "primary" ? (
    <Link href={link}>
      <button className={`button button_${type}`}>{text}</button>
    </Link>
  ) : (
    <Link href={link}>
      <button className={`button button_${type}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
        {text}
      </button>
    </Link>
  );

export default Button;
