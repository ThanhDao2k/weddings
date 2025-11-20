import style from './WeddingCeremony.module.scss';

export const DecorativeDivider = () => (
  <svg
    className={style.decorative__divider}
    viewBox="0 0 200 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="0"
      y1="20"
      x2="200"
      y2="20"
      stroke="#fff"
      strokeWidth="1"
      opacity="0.5"
    />
    <path d="M100 10 L110 20 L100 30 L90 20 Z" fill="#fff" opacity="0.8" />
    <circle cx="100" cy="20" r="3" fill="#fff" />
    <circle cx="70" cy="20" r="2.5" fill="#fff" opacity="0.7" />
    <circle cx="60" cy="20" r="1.5" fill="#fff" opacity="0.6" />
    <circle cx="130" cy="20" r="2.5" fill="#fff" opacity="0.7" />
    <circle cx="140" cy="20" r="1.5" fill="#fff" opacity="0.6" />
  </svg>
);
