import React, { useState, createRef } from 'react'

// Images
import profileImg from './images/descarga.jpg'
import ucLogo from './images/UC_logo.png'
import cctLogo from './images/cct.png'
import heddrichImg from './images/heddrichITSolutions.png'
import ecommerceImg from './images/eCommerceImg.png'
import myOnlineShopImg from './images/myonlineshop.png'
import componetsImg from './images/components.png'
import portfolioImg from './images/portfolio.png'
import easyPeasyImg from './images/easypeasy.png'
import farmatodoImg from './images/farmatodo.jpg'
import groupImg from './images/group.png'

// Components
import LanguageSwitch from './LanguageSwitch'

const Main = () => {
	const [option, setOption] = useState('about')

	const [language, setLanguage] = useState('spanish')

	let aboutRef = createRef()
	let resumeRef = createRef()
	let projectsRef = createRef()
	let contactRef = createRef()

	const goTo = (option) => {
		setOption(option)

		switch (option) {
			case 'about':
				window.scrollTo({ left: 0, top: aboutRef.current.offsetTop - 100, behavior: 'smooth' })
				break
			case 'resume':
				window.scrollTo({ left: 0, top: resumeRef.current.offsetTop - 100, behavior: 'smooth' })
				break
			case 'projects':
				window.scrollTo({ left: 0, top: projectsRef.current.offsetTop - 100, behavior: 'smooth' })
				break
			case 'contact':
				window.scrollTo({ left: 0, top: contactRef.current.offsetTop - 100, behavior: 'smooth' })
				break
			default:
				break
		}
	}

	return (
		<div className="main">
			<LanguageSwitch setValue={setLanguage} value={language} />
			{/**
			 * Navbar
			 */}
			<div className="navbar">
				<div className="my-info">
					<h1>Jonathan Medina</h1>
					<h3>{language === 'english' ? 'Web Developer' : 'Desarrollador Web'}</h3>
				</div>
				<div className="options">
					<span onClick={() => goTo('about')} className={option !== 'about' ? 'option' : 'option-selected'}>
						<i className="fas fa-user"></i>
						<span className="text">{language === 'english' ? 'about' : 'sobre mi'}</span>
					</span>
					<span onClick={() => goTo('resume')} className={option !== 'resume' ? 'option' : 'option-selected'}>
						<i className="fas fa-file-alt"></i>
						<span className="text">{language === 'english' ? 'resume' : 'cv'}</span>
					</span>
					<span
						onClick={() => goTo('projects')}
						className={option !== 'projects' ? 'option' : 'option-selected'}
					>
						<i className="fas fa-laptop"></i>
						<span className="text">{language === 'english' ? 'projects' : 'proyectos'}</span>
					</span>
					<span
						onClick={() => goTo('contact')}
						className={option !== 'contact' ? 'option' : 'option-selected'}
					>
						<i className="fas fa-mail-bulk"></i>
						<span className="text">{language === 'english' ? 'contact' : 'contacto'}</span>
					</span>
				</div>
			</div>
			{/**
			 * Profile
			 */}
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
								? 'https://drive.google.com/file/d/1fruVufOd372XqOyPA3N933JcAbu3BoNp/view?usp=sharing'
								: 'https://drive.google.com/file/d/1JVzxmZOmiFdxYktbtv6FzvHKXS_s7W2O/view?usp=sharing'
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
			{/**
			 * Sections
			 */}
			<div className="sections">
				{/**
				 * About Me
				 */}
				<div ref={aboutRef} className={option === 'about' ? 'section' : 'section-closed'}>
					<h1 className="top">
						{language === 'english' ? (
							<>
								<span>About</span> Me
							</>
						) : (
							<>
								<span>Sobre</span> Mí
							</>
						)}
					</h1>
					<div className="text-list">
						<div className="text">
							{language === 'english' ? (
								<>
									I am <span className="text-primary">Jonathan Medina</span>, i have obtained my
									bachelor's degree in Computer Science, i'm eager to find a job as a web developer,
									as i really enjoy building websites.
								</>
							) : (
								<>
									Soy <span className="text-primary">Jonathan Medina</span>, obtuve mi título en
									Ciencias de la Computación recientemente, me gustaría conseguir un trabajo como
									Desarrollador Web, ya que disfruto mucho creando paginas web.
								</>
							)}
						</div>
						<div className="list">
							<div className="item">
								<div className="label">{language === 'english' ? 'Age....' : 'Edad....'}</div>
								<div className="value">33</div>
							</div>
							<div className="item">
								<div className="label">
									{language === 'english' ? 'Residence...' : 'Residencia....'}
								</div>
								<div className="value">Venezuela</div>
							</div>
							<div className="item">
								<div className="label">{language === 'english' ? 'Status...' : 'Estado Civil...'}</div>
								<div className="value">{language === 'english' ? 'Single' : 'Soltero'}</div>
							</div>
						</div>
					</div>
					<h1 className="top">
						{language === 'english' ? (
							<>
								<span>My</span> Hobbies
							</>
						) : (
							<>
								<span>Mis</span> Hobbies
							</>
						)}
					</h1>
					<div className="icon-list">
						<i className="fas fa-book"></i>
						<i className="fas fa-dumbbell"></i>
						<i className="fas fa-futbol"></i>
						<i className="fas fa-laptop-code"></i>
						<i className="fas fa-headphones"></i>
					</div>
				</div>
				{/**
				 * Resume
				 */}
				<div ref={resumeRef} className={option === 'resume' ? 'section' : 'section-closed'}>
					<h1 className="top">
						{language === 'english' ? (
							<>
								<span>R</span>esume
							</>
						) : (
							<>
								<span>C</span>V
							</>
						)}
					</h1>
					{/**
					 * Education
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-university"></i>
							<span>{language === 'english' ? 'education' : 'educación'}</span>
						</div>
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
					{/**
					 * Experience
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-briefcase"></i>
							<span>{language === 'english' ? 'experience' : 'experiencia'}</span>
						</div>
						<div className="card">
							<div className="card-top">
								<div className="card-top-left">
									<div className="date">2015 - 2019</div>
									<div className="card-title">
										{language === 'english'
											? 'Bars, Restaurants and pubs.'
											: 'Bares, Restaurantes y pubs'}
									</div>
									<div className="location">
										{language === 'english' ? 'Dublin - Ireland' : 'Dublín - Irlanda'}
									</div>
								</div>
								<img src={groupImg} alt="restaurants"></img>
							</div>
							<div className="card-body">
								{language === 'english' ? 'Waiter and Barman' : 'Mesero y Barman'}
							</div>
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
							<div className="card-body">
								{language === 'english' ? 'Floor Staff' : 'Asistente de Ventas'}
							</div>
							<div className="card-line"></div>
						</div>
					</div>
					{/**
					 *  Skills
					 */}
					<h1 className="top mt-1">
						{language === 'english' ? (
							<>
								<span>My</span> Skills
							</>
						) : (
							<>
								<span>H</span>abilidades
							</>
						)}
					</h1>
					{/**
					 * Front end
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-desktop"></i>
							<span>front - end</span>
						</div>
						<div className="items-list">
							<div className="item">
								<i className="fab fa-react"></i>
								<span>React</span>
							</div>
							<div className="item">
								<i className="fab fa-html5"></i>
								<span>Html</span>
							</div>
							<div className="item">
								<i className="fab fa-css3-alt"></i>
								<span>Css</span>
							</div>
							<div className="item">
								<i className="fab fa-sass"></i>
								<span>Sass</span>
							</div>
						</div>
					</div>
					{/**
					 * Back end
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-server"></i>
							<span>back - end</span>
						</div>
						<div className="items-list">
							<div className="item">
								<i className="fab fa-node-js"></i>
								<span>Node js</span>
							</div>
						</div>
					</div>
					{/**
					 * Databases
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-database"></i>
							<span>{language === 'english' ? 'databases' : 'bases de datos'}</span>
						</div>
						<div className="items-list">
							<div className="item">
								<i className="fas fa-leaf"></i>
								<span>MongoDB</span>
							</div>
							<div className="item">
								<i className="fas fa-republican"></i>
								<span>PostgreSQL</span>
							</div>
						</div>
					</div>
					{/**
					 * Lenguages
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-laptop-code"></i>
							<span>{language === 'english' ? 'languages' : 'lenguages'}</span>
						</div>
						<div className="items-list">
							<div className="item">
								<i className="fab fa-js-square"></i>
								<span>Javascript</span>
							</div>
						</div>
					</div>
				</div>
				{/**
				 * Projects
				 */}
				<div ref={projectsRef} className={option === 'projects' ? 'section' : 'section-closed'}>
					<h1 className="top">
						{language === 'english' ? (
							<>
								<span>My</span> Projects
							</>
						) : (
							<>
								<span>Mis</span> Proyectos
							</>
						)}
					</h1>
					<div className="project-list">
						{/**
						 * heddrich IT solutions
						 */}
						<div className="project">
							<img src={heddrichImg} atl="heddrich-solutions"></img>
							<div className="project-body">
								<span className="date">{language === 'english' ? 'Dec' : 'Dic'} 2020</span>
								<h3>{language === 'english' ? 'Web Design Services' : 'Servicios de Diseño Web'}</h3>
								<p>
									{language === 'english'
										? 'Website to offer my services as a e-commerce web developer.'
										: 'Página para ofrecer mis servicios de desarrollador para comercios electrónicos'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://heddrichitsoluciones.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
						{/**
						 * eCommerce Vzla
						 */}
						<div className="project">
							<img src={ecommerceImg} atl="ecommerce"></img>
							<div className="project-body">
								<span className="date">Nov 2020</span>
								<h3>
									{language === 'english' ? 'eCommerce Website' : 'Página de Comercio Electrónico'}
								</h3>
								<p>
									{language === 'english'
										? 'eCommerce website for the Venezuelan market.'
										: 'Comercio Electrónico para el mercado Venezolano'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://ecommercespanish.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
						{/**
						 * Online Shop
						 */}
						<div className="project">
							<img src={myOnlineShopImg} atl="my online shop"></img>
							<div className="project-body">
								<span className="date">{language === 'english' ? 'Aug' : 'Ago'} 2020</span>
								<h3>
									{language === 'english'
										? 'Online Shop Creator Website'
										: 'Creador de Tiendas en Línea'}
								</h3>
								<p>
									{language === 'english'
										? 'Website that allows users to create an online shop for free.'
										: 'Página que permite crear tiendas en línea de forma gratuita.'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://myonlineshopvzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
						{/**
						 * Components
						 */}
						<div className="project">
							<img src={componetsImg} atl="my online shop"></img>
							<div className="project-body">
								<span className="date">{language === 'english' ? 'Apr' : 'Abr'} 2020</span>
								<h3>
									{language === 'english' ? 'My Components Website' : 'Página de mis Componentes'}
								</h3>
								<p>
									{language === 'english'
										? 'Website to showcase my react components for personal use.'
										: 'Página de uso personal, para mostrar mis componentes react.'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://react-components-vzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
						{/**
						 * Portfolio
						 */}
						<div className="project">
							<img src={portfolioImg} atl="portfolio"></img>
							<div className="project-body">
								<span className="date">Feb 2020</span>
								<h3>{language === 'english' ? 'My Old Portfolio' : 'Mi Viejo Portafolio'}</h3>
								<p>
									{language === 'english'
										? 'Website to showcase my personal development projects.'
										: 'Página para mostrar mis proyectos personales de desarrollo web'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://portfolio-jonathanvzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
						{/**
						 * Easy Peasy
						 */}
						<div className="project">
							<img src={easyPeasyImg} atl="portfolio"></img>
							<div className="project-body">
								<span className="date">{language === 'english' ? 'Dec' : 'Dic'} 2019</span>
								<h3>{language === 'english' ? 'College Project' : 'Proyecto Universitario'}</h3>
								<p>
									{language === 'english'
										? 'Website that allows small business to order products from different suppliers.'
										: 'Página que permite a usuarios ordenar productos a diferentes proveedores.'}
								</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://easy-peasy-v2.herokuapp.com/'}
									className="btn btn-primary"
								>
									{language === 'english' ? 'Visit' : 'Visitar'}
								</a>
							</div>
						</div>
					</div>
				</div>
				{/**
				 * Contact
				 */}
				<div ref={contactRef} className={option === 'contact' ? 'section' : 'section-closed'}>
					<h1 className="top">
						{language === 'english' ? (
							<>
								<span>Contact</span> Me
							</>
						) : (
							<>
								<span>C</span>ontacto
							</>
						)}
					</h1>
					<div className="contact-list">
						<div className="show-sm">
							<a href={`tel:+582432450361`} className="item">
								<i className="fas fa-phone"></i>
								<div className="data">+58-243-2450361</div>
							</a>
						</div>
						<div className="hide-sm">
							<div className="item">
								<i className="fas fa-phone"></i>
								<div className="data">+58-243-2450361</div>
							</div>
						</div>
						<div className="show-sm">
							<a href={`https://wa.me/+584126289924`} className="item">
								<i className="fab fa-whatsapp"></i>
								<div className="data">+58-412-6289924</div>
							</a>
						</div>
						<div className="hide-sm">
							<div className="item">
								<i className="fab fa-whatsapp"></i>
								<div className="data">+58-412-6289924</div>
							</div>
						</div>
						<div className="show-sm">
							<a href={`mailto:jonathanmedhed@gmail.com`} className="item">
								<i className="far fa-envelope"></i>
								<div className="data">jonathanmedhed@gmail.com</div>
							</a>
						</div>
						<div className="hide-sm">
							<div className="item">
								<i className="far fa-envelope"></i>
								<div className="data">jonathanmedhed@gmail.com</div>
							</div>
						</div>
						<div className="show-sm">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/'}
								className="item"
							>
								<i className="fab fa-linkedin-in"></i>
								<div className="data">jonathan-medina-heddrich</div>
							</a>
						</div>
						<div className="hide-sm">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={'https://www.linkedin.com/in/jonathan-medina-heddrich-49164196/'}
								className="item"
							>
								<i className="fab fa-linkedin-in"></i>
								<div className="data">jonathan-medina-heddrich</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Main
