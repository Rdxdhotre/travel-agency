import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1>Discover Your Next Adventure</h1>
      <p>Explore the india's most beautiful destinations with us.</p>
      <div className={styles.btnGroup}>
        <button className={styles.btn}>Explore Now</button>
        <button className={`${styles.btn} ${styles.alt}`}>Book Today</button>
      </div>
    </section>
  );
}
