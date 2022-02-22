import styles from "./FooterItem.module.scss";

interface ItemLink {
  label: string;
  url: string;
}

interface FooterItemProps {
  label: string;
  items: ItemLink[];
}

export default function FooterItem({ label, items }: FooterItemProps) {
  return (
    <div className={styles.footerItem}>
      <div className={styles.label}>{label}</div>
      <ul className={styles.items}>
        {items.map(({ label }) => (
          <li key={label}>
            <a href="">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
