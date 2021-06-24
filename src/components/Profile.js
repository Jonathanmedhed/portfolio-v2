import React, { useState } from 'react'

// Images
import profileImg from '../images/descarga.jpg'
import loadingImg from '../images/loading.svg'

const Profile = ({ goTo, language }) => {
	const [loaded, setLoaded] = useState(false)

	return (
		<div className={loaded ? 'profile--loaded' : 'profile'}>
			<img alt="loading" className="loader" src={loadingImg}></img>
			<img alt="profile-pic" className="picture" onLoad={() => setLoaded(true)} src={profileImg}></img>
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
							? 'https://drive.google.com/file/d/1nxkYBgUtDRrIRMhxRqguLkZZob9FSqEU/view?usp=sharing'
							: 'https://drive.google.com/file/d/11sFdTsbF1xxkyU4Wn-5ZAYcK3Cxshfml/view?usp=sharing'
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
