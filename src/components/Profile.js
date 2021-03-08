import React from 'react'

// Images
import profileImg from '../images/descarga.jpg'

const Profile = ({ goTo, language }) => {
	return (
		<div className="profile">
			<img src={profileImg} alt="profile-pic"></img>
			<div className="profile-body">
				<h1>Jonathan Medina</h1>
				<h3>{language === 'english' ? 'Web Developer' : 'Desarrollador Web'}</h3>
				<div className="socials">
					<a target="_blank" rel="noopener noreferrer" href={'https://github.com/Jonathanmedhed'}>
						<i className="fab fa-github"></i>
					</a>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={'https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/'}
					>
						<i className="fab fa-linkedin-in"></i>
					</a>
				</div>
			</div>
			<div className="profile-footer">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={
						language === 'english'
							? 'https://drive.google.com/file/d/1Gq8DHHYlaysSTnVSqMHPGOPWfwi12TVS/view?usp=sharing'
							: 'https://drive.google.com/file/d/1LbClQEWKyv7_R2WDOcb6KiESA2eRLtsq/view?usp=sharing'
					}
					className="button"
				>
					{language === 'english' ? 'download cv' : 'descargar cv'}
				</a>
				<div onClick={() => goTo('contact')} className="button">
					{language === 'english' ? 'contact me' : 'contacto'}
				</div>
			</div>
		</div>
	)
}

export default Profile
