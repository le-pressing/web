import Image from "next/image";
import styles from "./DropdownItem.module.scss";

export interface DropdownItemType {
  label: string;
  img: string;
  url: string;
}

export default function DropdownItem({ label, img, url }: DropdownItemType) {
  return (
    <a className={styles.dropdownItem} href={url}>
      {img && <Image src={img} objectFit="none" width={248} height={155} alt={label} />}
      <span className={styles.label}>{label}</span>
    </a>
  );
}
