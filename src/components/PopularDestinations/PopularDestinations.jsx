import styles from "./PopularDestinations.module.css";

const destinations = [
  {
    name: "Ellora Caves",
    image:
      "https://images.unsplash.com/photo-1701430662581-fbda7edaa84a?q=80&w=2093&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.0,
  },
  {
    name: "Varanasi",
    image:
      "https://images.unsplash.com/photo-1599831069477-b2acdc0bcb91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHZhcmFuYXNpfGVufDB8fDB8fHww",
    rating: 4.5,
  },
  {
    name: "hawa Mahal Jaipur ",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3.5,
  },
  {
    name: "Amritsar",
    image:
      "https://plus.unsplash.com/premium_photo-1697730324062-c012bc98eb13?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
  },
  {
    name: "Tanjavur",
    image:
      "https://plus.unsplash.com/premium_photo-1697729536647-4e23a32dd324?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.5,
  },
  {
    name: "Taj mahal ",
    image:
      "https://plus.unsplash.com/premium_photo-1697729486315-46296972d26a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 3.0,
  },
  {
    name: "Kerala ",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.0,
  },
  {
    name: "Victoria Memorial",
    image:
      "https://images.unsplash.com/photo-1496372412473-e8548ffd82bc?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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

export default function PopularDestinations() {
  return (
    <section className={`${styles.popular} container`}>
      <h2>Popular Destinations</h2>
      <div className={styles.destinationsGrid}>
        {destinations.map(({ name, image, rating }) => (
          <article key={name} className={styles.card}>
            <img src={image} alt={name} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{name}</h3>
              <div className={styles.rating}>
                <span className={styles.stars}>{stars(rating)}</span> (
                {rating.toFixed(1)})
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
