type Props = {
    fill: string;
    className: string;
  }

export default function AccountIcon({fill, className}: Props) {
  return (
    <svg
      width="76"
      height="81"
      viewBox="0 0 76 81"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="36" cy="22" r="22" />
      <path d="M0 78.2432C0 60.9881 13.9881 47 31.2432 47H44.7568C62.0119 47 76 60.9881 76 78.2432V78.2432C76 79.7658 74.7658 81 73.2432 81H2.75676C1.23425 81 0 79.7658 0 78.2432V78.2432Z" />
    </svg>
  );
}