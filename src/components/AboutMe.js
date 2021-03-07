import React from 'react'
import Title from './Title'

const AboutMe = ({ aboutRef, language, option }) => {
	const intro = () => (
		<div className="text">
			{language === 'english' ? (
				<>
					I am <span className="text-primary">Jonathan Medina</span>, i really enjoy building websites, so i'm
					looking for a job where i could show my skills and gain more experience, while helping my employer
					achieve their goals.
				</>
			) : (
				<>
					Soy <span className="text-primary">Jonathan Medina</span>, disfruto mucho creando paginas web, por
					eso busco un trabajo donde pueda mostrar mis hablilidades y ganar mas experiencia, ayudando a mi
					empleador a conseguir sus metas en el proceso.
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
