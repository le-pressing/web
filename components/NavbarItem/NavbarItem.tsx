import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { setFocused } from "../../redux/slices/navbarSlice";

import styles from "./NavbarItem.module.scss";

interface NavbarItemProps {
  label: string;
  children: React.ReactNode;
  onClick?: () => void;
  extraClasses?: string;
}

export default function NavbarItem({
  label,
  children,
  extraClasses,
  onClick,
}: NavbarItemProps) {
  const dispatch = useDispatch();

  const { focused } = useSelector((state: RootState) => state.navbar);

  const focus = () => dispatch(setFocused(label));
  const unfocus = () => dispatch(setFocused(""));

  const faded = (focused && focused !== label && styles.faded) || "";
  const labelClass = `${styles.label} ${faded}`;

  const handleClick = onClick || function () {};

  return (
    <div
      className={`${styles.navbarItem} ${extraClasses}`}
      onMouseEnter={focus}
      onMouseLeave={unfocus}
    >
      <span className={labelClass} onClick={handleClick}>
        {label}
      </span>
      {children}
    </div>
  );
}
