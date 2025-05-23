import styles from "./WhyChooseUs.module.css";

const features = [
  {
    icon: "📞",
    title: "24/7 Support",
    desc: "We're here to help anytime you need.",
  },
  {
    icon: "💰",
    title: "Best Price Guarantee",
    desc: "Competitive prices for your dream trips.",
  },
  {
    icon: "📍",
    title: "Handpicked Tours",
    desc: "Curated tours for unforgettable experiences.",
  },
  {
    icon: "✈️",
    title: "Flexible Booking",
    desc: "Change plans without hassle.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.whyChoose}>
      <h2>Why Choose Us</h2>
      <div className={`${styles.features} container`}>
        {features.map(({ icon, title, desc }) => (
          <div key={title} className={styles.feature}>
            <div className={styles.featureIcon}>{icon}</div>
            <h3 className={styles.featureTitle}>{title}</h3>
            <p className={styles.featureDesc}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
