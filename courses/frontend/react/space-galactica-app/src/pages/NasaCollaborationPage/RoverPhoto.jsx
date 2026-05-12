import styles from './NasaCollaborationPage.module.css';

const RoverPhoto = ({ photo }) => {
  return (
    <div className={styles.roverPhotoCard}>
      <h3>🤖 {photo.data[0].title}</h3>
      <p>📅 {photo.data[0].date_created}</p>
      <img className={styles.nasaPicOfTheDayImg} src={photo.links[0].href} alt={photo.data[0].title} />
      <hr />
    </div>
  );
};

export default RoverPhoto;