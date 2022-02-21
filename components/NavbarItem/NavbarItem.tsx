import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { setFocused } from "../../redux/slices/navbarSlice";
import DropdownItem, { DropdownItemType } from "../DropdownItem";
import styles from "./NavbarItem.module.scss";

export interface NavbarItemType {
  label: string;
  items?: DropdownItemType[];
}

type NavbarItemProps = NavbarItemType & {
  onRight?: boolean;
};

export default function NavbarItem({ label, items, onRight }: NavbarItemProps) {
  const dispatch = useDispatch();

  const focused = useSelector((state: RootState) => state.navbar.focused);

  const focus = () => dispatch(setFocused(label));
  const unfocus = () => dispatch(setFocused(""));

  const right = onRight ? styles.right : "";
  const parent = items ? styles.parent : "";
  const faded = (focused && focused !== label && styles.faded) || "";
  const visible = focused === label ? styles.visible : "";

  const NavbarItemClass = `${styles.navbarItem} ${right}`;
  const labelClass = `${styles.label} ${parent} ${faded}`;
  const itemClass = `${styles.dropdown} ${visible}`;

  return (
    <div className={NavbarItemClass} onMouseEnter={focus} onMouseLeave={unfocus}>
      <span className={labelClass}>{label}</span>
      {items && (
        <div className={itemClass}>
          {items.map(({ label, img, url }: DropdownItemType) => (
            <DropdownItem key={label} label={label} img={img} url={url} />
          ))}
        </div>
      )}
    </div>
  );
}
