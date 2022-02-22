import Image from "next/image";
import styles from "./NavbarDropdown.module.scss";

export interface NavbarDropdownType {
  label: string;
  img: string;
  url: string;
}

export default function NavbarDropdown({ label, img, url }: NavbarDropdownType) {
  return (
    <a className={styles.dropdown} href={url}>
      {img && <Image src={img} objectFit="none" width={248} height={155} alt={label} />}
      <span className={styles.label}>{label}</span>
    </a>
  );
}
