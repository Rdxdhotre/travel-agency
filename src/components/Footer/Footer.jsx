import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <a href="#">Home |</a>
        <a href="#">About Us |</a>
        <a href="#">Contact |</a>
      </nav>
      <p>© 2025 Travel Agency. All rights reserved.</p>
    </footer>
  );
}
