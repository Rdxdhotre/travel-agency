import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Ayesha Kapoor",
    quote:
      "Incredible experience! The tour was well organized and the service was excellent. I'll travel again with them!",
    country: "us",
    rating: 4.5,
  },
  {
    name: "Rohit Dhotre",
    quote:
      "Amazing destinations and great value for money. Highly recommended!",
    country: "🇮🇳",
    rating: 5.0,
  },
  {
    name: "Anita Patel",
    quote: "Loved every moment of our trip. Will book again soon!",
    country: "🇮🇳",
    rating: 4.0,
  },
];

function stars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return (
    <>
      {"★".repeat(fullStars)}
      {halfStar ? "☆" : ""}
      {"☆".repeat(emptyStars)}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What Our Travelers Say</h2>
      <div className={`${styles.testimonialGrid} container`}>
        {testimonials.map(({ name, quote, country, rating }) => (
          <blockquote key={name} className={styles.card}>
            <p className={styles.quote}>“{quote}”</p>
            <footer className={`${styles.footer} ${styles.div}`}>
              <span>{country}</span> {name}
              <div className={styles.rating}>
                <span className={styles.stars}>{stars(rating)}</span>(
                {rating.toFixed(1)})
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
