import FooterItem from "../FooterItem";
import styles from "./Footer.module.scss";

import items from "./footerItems.json";

export default function Footer() {
  return (
    <section className={styles.footer}>
      {items.map(({ label, items }) => (
        <FooterItem key={label} label={label} items={items} />
      ))}
    </section>
  );
}
