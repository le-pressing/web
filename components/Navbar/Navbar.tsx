import styles from "./Navbar.module.scss";

import NavbarItemLeft, { NavbarItemLeftType } from "../NavbarItemLeft";
import NavbarItemRight, { NavbarItemRightType } from "../NavbarItemRight";

import leftItems from "./leftNavbarItems.json";
import rightItems from "./rightNavbarItems.json";

export default function Navbar() {
  const leftSectionClass = `${styles.section} ${styles.left}`;
  const midSectionClass = `${styles.section} ${styles.mid}`;
  const rightSectionClass = `${styles.section} ${styles.right}`;

  return (
    <div className={styles.navbar}>
      <div className={leftSectionClass}>
        {leftItems.map(({ label, items }: NavbarItemLeftType) => (
          <NavbarItemLeft key={label} label={label} items={items} />
        ))}
      </div>
      <div className={midSectionClass}>le pressing</div>
      <div className={rightSectionClass}>
        {rightItems.map(({ label, modal }: NavbarItemRightType) => (
          <NavbarItemRight key={label} label={label} modal={modal} />
        ))}
      </div>
    </div>
  );
}
