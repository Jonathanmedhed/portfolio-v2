import React from 'react'

const Navbar = ({ goTo, language, option }) => {
	const options = [
		{ name: 'about', icon: 'fas fa-user', contentEn: 'about', contentSp: 'sobre mí' },
		{ name: 'resume', icon: 'fas fa-file-alt', contentEn: 'resume', contentSp: 'cv' },
		{ name: 'projects', icon: 'fas fa-laptop', contentEn: 'projects', contentSp: 'proyectos' },
		{ name: 'contact', icon: 'fas fa-mail-bulk', contentEn: 'contact', contentSp: 'contacto' },
	]

	const navOption = (item) => (
		<span onClick={() => goTo(item.name)} className={option !== item.name ? 'option' : 'option-selected'}>
			<i className={`${item.icon}`}></i>
			<span className="text">{language === 'english' ? item.contentEn : item.contentSp}</span>
		</span>
	)
	return (
		<div className="navbar">
			<div className="my-info">
				<h1>Jonathan Medina</h1>
				<h3>{language === 'english' ? 'Web Developer' : 'Desarrollador Web'}</h3>
			</div>
			<div className="options">
				{options.map((item) => (
					<span key={item.name}>{navOption(item)}</span>
				))}
			</div>
		</div>
	)
}

export default Navbar
