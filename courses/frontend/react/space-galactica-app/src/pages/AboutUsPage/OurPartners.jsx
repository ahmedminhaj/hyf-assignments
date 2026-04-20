import { partners } from "../../../data/about_galactica_data";
import aboutUsStyles from "./AboutUsPage.module.css";

export const OurPartners = () => {
	return (
		<section className={aboutUsStyles.aboutCardSection}>
			<p className={aboutUsStyles.aboutCardEyebrowTitle}>Our Partners</p>
			<h4 className={aboutUsStyles.aboutUsTitle}>We collaborate with leading industry brands we believe in.</h4>
			<div className={aboutUsStyles.partnersGrid}>
				{partners.map((partner, index) => (
					<div key={index} className={aboutUsStyles.partnerCard}>
						<img src={partner} alt={`Partner ${index + 1}`} className={aboutUsStyles.partnerLogo} />
					</div>
				))}
			</div>
		</section>
	);
};

export default OurPartners;