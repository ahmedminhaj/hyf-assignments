import { aboutGalacticaData } from "../../../data/about_galactica_data";
import styles from "./OurCrew.module.css";
import aboutUsStyles from "./AboutUsPage.module.css";
import uuid from 'react-uuid';

const CrewCard = ({member, index}) => {
  return (
    <div
      className={styles.crewCard}
      style={{ animationDelay: `${0.1 + index * 0.1}s` }}
    >
      <div className={styles.crewCardImageWrap}>
        <img
          className={styles.crewCardImage}
          src={member.image}
          alt={member.name}
        />
      </div>
      <div className={styles.crewCardInfo}>
        <p className={styles.crewCardName}>{member.name}</p>
        <p className={styles.crewCardRole}>{member.role}</p>
      </div>
    </div>
  );
};

export const OurCrew = () => {
  const { crew } = aboutGalacticaData;      

    return (
      <section className={aboutUsStyles.aboutCardSection}>
        <div className={aboutUsStyles.aboutUsHeader}>
					<p className={aboutUsStyles.aboutCardEyebrowTitle}>Our Team</p>
					<h4 className={aboutUsStyles.aboutUsTitle}>Meet the Crew</h4>
					<p className={styles.crewDescription}>{crew.description}</p>
        </div>
    
        <div className={styles.crewGrid}>
					{crew.members.map((member, i) => (
						<CrewCard key={uuid} member={member} index={i} />
					))}
        </div>
    	</section>
    )
};

export default OurCrew;