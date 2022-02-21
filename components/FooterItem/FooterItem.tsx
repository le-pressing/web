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
      <div className={styles.items}>
        {items.map(({ label }) => (
          <a key={label}>{label}</a>
        ))}
      </div>
    </div>
  );
}
