import styles from "./OurValues.module.css";
import { aboutGalacticaData } from "../../../data/about_galactica_data";

const ValueCard = ({ value, index }) => {
  const num = String(index + 1).padStart(2, "0");

  return (
    <div className={styles.valueCard} >
      <span className={styles.valueNumber}>{num}</span>
      <h3 className={styles.valueName}>{value.name}.</h3>
      <p className={styles.valueDescription}>{value.description}</p>
    </div>
  );
}

export const OurValues = () => {
  const { values } = aboutGalacticaData;

  return (
    <section className={styles.valuesSection}>
      <p className={styles.valuesEyebrow}>Our Values</p>

      <div className={styles.valuesGrid}>
        {values.map((v, i) => (
          <ValueCard key={v.name} value={v} index={i} />
        ))}
      </div>
    </section>
  );
}

export default OurValues;