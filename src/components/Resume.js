import React from 'react'

// images
import ucLogo from '../images/UC_logo.png'
import cctLogo from '../images/cct.png'
import farmatodoImg from '../images/farmatodo.jpg'
import groupImg from '../images/group.png'
import biekosImg from '../images/biekos.png'
import Title from './Title'

const Resume = ({ resumeRef, language, option }) => {
	const cardsTitleTemplate = (english, spanish, icon) => (
		<div className="cards-title">
			<i className={`${icon}`}></i>
			<span>{language === 'english' ? english : spanish}</span>
		</div>
	)

	const educationTemplate = () => (
		<div className="text-cards">
			{cardsTitleTemplate('education', 'educacion', 'fas fa-university')}
			<div className="card">
				<div className="card-top">
					<div className="card-top-left">
						<div className="date">2016 - 2019</div>
						<div className="card-title">CCT</div>
						<div className="card-sub-title">College of Computing Technology</div>
						<div className="location">
							{language === 'english' ? 'Dublin - Ireland' : 'Dublín - Irlanda'}
						</div>
					</div>
					<img src={cctLogo} alt="cct-logo"></img>
				</div>
				<div className="card-body">
					{language === 'english'
						? "Bachelor's Degree en Computer Science"
						: "Bachelor's en Ciencias de la Computación"}
				</div>
				<div className="card-line"></div>
			</div>
			<div className="card">
				<div className="card-top">
					<div className="card-top-left">
						<div className="date">2009 - 2014</div>
						<div className="card-title">UC</div>
						<div className="card-sub-title">
							{language === 'english' ? 'University of Carabobo' : 'Universidad de Carabobo'}
						</div>
						<div className="location">Aragua - Venezuela</div>
					</div>
					<img className="tall-logo" src={ucLogo} alt="uc-logo"></img>
				</div>
				<div className="card-body">
					{language === 'english'
						? "Honor's Degree in Administration"
						: 'Licenciatura en Administración Comercial'}
				</div>
				<div className="card-line"></div>
			</div>
		</div>
	)

	const experienceTemplate = () => (
		<div className="text-cards">
			<div className="card">
				<div className="card-top">
					<div className="card-top-left">
						<div className="date">2/2021 - 5/2021</div>
						<div className="card-title">{language === 'english' ? 'Biekos' : 'Biekos'}</div>
						<div className="location">
							{language === 'english' ? 'Lysaker – Norway (Remote)' : 'Lysaker – Noruega (Remoto)'}
						</div>
					</div>
					<img src={biekosImg} alt="restaurants"></img>
				</div>
				<div className="card-body">
					{language === 'english' ? 'Front-End Developer Junior' : 'Desarrollador Front-End Junior'}
				</div>
				<div className="card-line"></div>
			</div>
			<div className="card">
				<div className="card-top">
					<div className="card-top-left">
						<div className="date">2015 - 2019</div>
						<div className="card-title">
							{language === 'english' ? 'Bars, Restaurants and pubs.' : 'Bares, Restaurantes y pubs'}
						</div>
						<div className="location">
							{language === 'english' ? 'Dublin - Ireland' : 'Dublín - Irlanda'}
						</div>
					</div>
					<img src={groupImg} alt="restaurants"></img>
				</div>
				<div className="card-body">{language === 'english' ? 'Waiter and Barman' : 'Mesero y Barman'}</div>
				<div className="card-line"></div>
			</div>
			<div className="card">
				<div className="card-top">
					<div className="card-top-left">
						<div className="date">2011 - 2014</div>
						<div className="card-title">Farmatodo</div>
						<div className="card-sub-title">
							{language === 'english' ? 'Pharmacy / Retailer' : 'Farmacia / Minorista'}
						</div>
						<div className="location">Aragua - Venezuela</div>
					</div>
					<img className="big-img" src={farmatodoImg} alt="farmatodo"></img>
				</div>
				<div className="card-body">{language === 'english' ? 'Floor Staff' : 'Asistente de Ventas'}</div>
				<div className="card-line"></div>
			</div>
		</div>
	)

	const skills = [
		{
			titleEn: 'front - end',
			titleSp: 'front - end',
			icon: 'fas fa-desktop',
			items: [
				{ name: 'React js', icon: 'fab fa-react' },
				{ name: 'Html', icon: 'fab fa-html5' },
				{ name: 'Css', icon: 'fab fa-css3-alt' },
				{ name: 'Sass', icon: 'fab fa-sass' },
				{ name: 'Next js', icon: 'fas fa-step-forward' },
			],
		},
		{
			titleEn: 'back - end',
			titleSp: 'back - end',
			icon: 'fas fa-server',
			items: [
				{ name: 'Node js', icon: 'fab fa-node-js' },
				{ name: 'Express js', icon: 'fab fa-etsy' },
			],
		},
		{
			titleEn: 'databases',
			titleSp: 'bases de datos',
			icon: 'fas fa-database',
			items: [
				{ name: 'MongoDB', icon: 'fas fa-leaf' },
				{ name: 'PostgreSQL', icon: 'fas fa-republican' },
			],
		},
		{
			titleEn: 'languages',
			titleSp: 'lenguages',
			icon: 'fas fa-laptop-code',
			items: [
				{ name: 'Javascript', icon: 'fab fa-js-square' },
				{ name: 'Python', icon: 'fab fa-python' },
			],
		},
		{
			titleEn: 'deployment',
			titleSp: 'implementación',
			icon: 'fas fa-rocket',
			items: [
				{ name: 'AWS', icon: 'fab fa-aws' },
				{ name: 'Heroku', icon: 'fas fa-heading' },
				{ name: 'Digital Ocean', icon: 'fab fa-digital-ocean' },
			],
		},
		{
			titleEn: 'other',
			titleSp: 'otras',
			icon: 'fas fa-laptop-house',
			items: [
				{ name: 'GitHub', icon: 'fab fa-github-alt' },
				{ name: 'Phabricator', icon: 'fab fa-phabricator' },
				{ name: 'Selenium', icon: 'far fa-check-square' },
			],
		},
	]

	const skillTemplate = (skill) => (
		<div className="text-cards">
			{cardsTitleTemplate(skill.titleEn, skill.titleSp, skill.icon)}
			<div className="items-list">
				{skill.items.map((item) => (
					<div key={item.name} className="item">
						<i className={`${item.icon}`}></i>
						<span>{item.name}</span>
					</div>
				))}
			</div>
		</div>
	)

	return (
		<div ref={resumeRef} className={option === 'resume' ? 'section' : 'section-closed'}>
			<Title language={language} english={['R', 'esume']} spanish={['C', 'V']} />
			{/**
			 *  Skills
			 */}
			<Title language={language} english={['My', ' Skills']} spanish={['H', 'abilidades']} />
			{skills.map((skill) => (
				<span key={skill.titleEn}>{skillTemplate(skill)}</span>
			))}
			{/**
			 * Experience
			 */}
			<Title language={language} english={['E', 'xperience']} spanish={['E', 'xperiencia']} />
			{experienceTemplate()}
			{/**
			 * Education
			 */}
			{educationTemplate()}
		</div>
	)
}

export default Resume
