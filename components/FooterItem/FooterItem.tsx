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
      <span>{label}</span>
      <ul>
        {items.map(({ label }, i) => (
          <li key={label + i}>
            <a href="">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
