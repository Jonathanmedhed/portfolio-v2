import React from 'react'
import Title from './Title'

const AboutMe = ({ aboutRef, language, option }) => {
	const intro = () => (
		<div className="text">
			{language === 'english' ? (
				<>
					I am <span className="text-primary">Jonathan Medina</span>, i have obtained my bachelor's degree in
					Computer Science, i'm eager to find a job as a web developer, as i really enjoy building websites.
				</>
			) : (
				<>
					Soy <span className="text-primary">Jonathan Medina</span>, obtuve mi título en Ciencias de la
					Computación recientemente, me gustaría conseguir un trabajo como Desarrollador Web, ya que disfruto
					mucho creando paginas web.
				</>
			)}
		</div>
	)

	const personalInfo = () => (
		<div className="list">
			<div className="item">
				<div className="label">{language === 'english' ? 'Age....' : 'Edad....'}</div>
				<div className="value">33</div>
			</div>
			<div className="item">
				<div className="label">{language === 'english' ? 'Residence...' : 'Residencia....'}</div>
				<div className="value">Venezuela</div>
			</div>
			<div className="item">
				<div className="label">{language === 'english' ? 'Status...' : 'Estado Civil...'}</div>
				<div className="value">{language === 'english' ? 'Single' : 'Soltero'}</div>
			</div>
		</div>
	)

	const hobbieIcons = () => (
		<div className="icon-list">
			<i className="fas fa-book"></i>
			<i className="fas fa-dumbbell"></i>
			<i className="fas fa-futbol"></i>
			<i className="fas fa-laptop-code"></i>
			<i className="fas fa-headphones"></i>
		</div>
	)

	return (
		<div ref={aboutRef} className={option === 'about' ? 'section' : 'section-closed'}>
			<Title language={language} english={['About', ' Me']} spanish={['Sobre', ' Mí']} />
			<div className="text-list">
				{intro()}
				{personalInfo()}
			</div>
			<Title language={language} english={['My', ' Hobbies']} spanish={['Mis', ' Hobbies']} />
			{hobbieIcons()}
		</div>
	)
}

export default AboutMe
