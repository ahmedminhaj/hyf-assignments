export const SocialMediaItem = ({ url, title, icon }) => {
  return (
    <li>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<img 
          className="footerIcon" 
          src={icon} 
          alt={`${title} icon`} 
        />
				{title}
			</a>
    </li>
  );
}       

export default SocialMediaItem;