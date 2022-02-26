import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

import NavbarDropdown, { NavbarDropdownType } from "../NavbarDropdown";
import NavbarItem from "../NavbarItem";
import styles from "./NavbarItemLeft.module.scss";

export interface NavbarItemLeftType {
  label: string;
  items?: NavbarDropdownType[];
}

export default function NavbarItemLeft({ label, items }: NavbarItemLeftType) {
  const { focused } = useSelector((state: RootState) => state.navbar);

  const visible = focused === label ? styles.visible : "";
  const itemClass = `${styles.dropdown} ${visible}`;
  const extraClasses = [items ? "parent" : ""];

  return (
    <NavbarItem label={label} extraClasses={extraClasses}>
      {items && (
        <div className={itemClass}>
          {items.map(({ label, img, url }: NavbarDropdownType) => (
            <NavbarDropdown key={label} label={label} img={img} url={url} />
          ))}
        </div>
      )}
    </NavbarItem>
  );
}
