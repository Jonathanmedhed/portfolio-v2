import React, { useState, createRef } from 'react'
import profileImg from './images/descarga.jpg'
import ucLogo from './images/UC_logo.png'
import cctLogo from './images/cct.png'
import heddrichImg from './images/heddrichITSolutions.png'
import ecommerceImg from './images/eCommerceImg.png'
import myOnlineShopImg from './images/myonlineshop.png'
import componetsImg from './images/components.png'
import portfolioImg from './images/portfolio.png'
import easyPeasyImg from './images/easypeasy.png'

const Main = () => {
	const [option, setOption] = useState('about')

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
			{/**
			 * Navbar
			 */}
			<div className="navbar">
				<div className="my-info">
					<h1>Jonathan Medina</h1>
					<h3>Web Developer</h3>
				</div>
				<div className="options">
					<span onClick={() => goTo('about')} className={option !== 'about' ? 'option' : 'option-selected'}>
						<i className="fas fa-user"></i>
						<span className="text">about</span>
					</span>
					<span onClick={() => goTo('resume')} className={option !== 'resume' ? 'option' : 'option-selected'}>
						<i className="fas fa-file-alt"></i>
						<span className="text">resume</span>
					</span>
					<span
						onClick={() => goTo('projects')}
						className={option !== 'projects' ? 'option' : 'option-selected'}
					>
						<i className="fas fa-laptop"></i>
						<span className="text">projects</span>
					</span>
					<span
						onClick={() => goTo('contact')}
						className={option !== 'contact' ? 'option' : 'option-selected'}
					>
						<i className="fas fa-mail-bulk"></i>
						<span className="text">contact</span>
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
					<h3>Web Developer</h3>
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
						href={'https://drive.google.com/file/d/1K4J48Ul0AJn_4_hiFmIJ1WnxdPC5Qo2u/view?usp=sharing'}
						className="button"
					>
						download cv
					</a>
					<div onClick={() => goTo('contact')} className="button">
						contact me
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
						<span>About</span> Me
					</h1>
					<div className="text-list">
						<div className="text">
							I am <span className="text-primary">Jonathan Medina</span>, recently obtained my bachelor's
							degree in computer science, i'm eager to find a job as a web developer, as i really enjoy
							building websites.
						</div>
						<div className="list">
							<div className="item">
								<div className="label">Age....</div>
								<div className="value">33</div>
							</div>
							<div className="item">
								<div className="label">Residence...</div>
								<div className="value">Venezuela</div>
							</div>
							<div className="item">
								<div className="label">Status...</div>
								<div className="value">Single</div>
							</div>
						</div>
					</div>
					<h1 className="top">
						<span>My</span> Hobbies
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
						<span>R</span>esume
					</h1>
					{/**
					 * Education
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-university"></i>
							<span>education</span>
						</div>
						<div className="card">
							<div className="card-top">
								<div className="card-top-left">
									<div className="date">2016 - 2019</div>
									<div className="card-title">CCT</div>
									<div className="card-sub-title">College of Computing Technology</div>
									<div className="location">Dulin - Ireland</div>
								</div>
								<img src={cctLogo} alt="cct-logo"></img>
							</div>
							<div className="card-body">Bachelor's Degree in Computer Science</div>
							<div className="card-line"></div>
						</div>
						<div className="card">
							<div className="card-top">
								<div className="card-top-left">
									<div className="date">2009 - 2014</div>
									<div className="card-title">UC</div>
									<div className="card-sub-title">University of Carabobo</div>
									<div className="location">Aragua - Venezuela</div>
								</div>
								<img className="tall-logo" src={ucLogo} alt="uc-logo"></img>
							</div>
							<div className="card-body">Honor's Degree in Administration</div>
							<div className="card-line"></div>
						</div>
					</div>
					{/**
					 * Experience
					 */}
					<div className="text-cards">
						<div className="cards-title">
							<i className="fas fa-briefcase"></i>
							<span>experience</span>
						</div>
						<div className="card">
							<div className="card-top">
								<div className="card-top-left">
									<div className="date">2016 - 2019</div>
									<div className="card-title">Different Bars, Restaurants and pubs.</div>
									<div className="location">Dulin - Ireland</div>
								</div>
							</div>
							<div className="card-body">Waiter and Barman</div>
							<div className="card-line"></div>
						</div>
						<div className="card">
							<div className="card-top">
								<div className="card-top-left">
									<div className="date">2010 - 2013</div>
									<div className="card-title">Farmatodo</div>
									<div className="card-sub-title">Pharmacy / Retailer</div>
									<div className="location">Aragua Venezuela</div>
								</div>
							</div>
							<div className="card-body">Floor Staff</div>
							<div className="card-line"></div>
						</div>
					</div>
					{/**
					 *  Skills
					 */}
					<h1 className="top mt-1">
						<span>My</span> Skills
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
							<span>databases</span>
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
							<span>languages</span>
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
						<span>My</span> Projects
					</h1>
					<div className="project-list">
						{/**
						 * heddrich IT solutions
						 */}
						<div className="project">
							<img src={heddrichImg} atl="heddrich-solutions"></img>
							<div className="project-body">
								<span className="date">Dec 2020</span>
								<h3>Web Design Services</h3>
								<p>Website to offer my services as a e-commerce web developer.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://heddrichitsoluciones.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
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
								<h3>eCommerce Website</h3>
								<p>eCommerce website for the Venezuelan market.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://ecommercespanish.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
								</a>
							</div>
						</div>
						{/**
						 * Online Shop
						 */}
						<div className="project">
							<img src={myOnlineShopImg} atl="my online shop"></img>
							<div className="project-body">
								<span className="date">Aug 2020</span>
								<h3>Online Shop Creator Website</h3>
								<p>Website that allows users to create an online shop for free.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://myonlineshopvzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
								</a>
							</div>
						</div>
						{/**
						 * Components
						 */}
						<div className="project">
							<img src={componetsImg} atl="my online shop"></img>
							<div className="project-body">
								<span className="date">Apr 2020</span>
								<h3>My Components Website</h3>
								<p>Website to showcase my react components for personal use.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://react-components-vzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
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
								<h3>My Old Portfolio</h3>
								<p>Website to showcase my personal development projects.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://portfolio-jonathanvzla.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
								</a>
							</div>
						</div>
						{/**
						 * Easy Peasy
						 */}
						<div className="project">
							<img src={easyPeasyImg} atl="portfolio"></img>
							<div className="project-body">
								<span className="date">Dec 2019</span>
								<h3>College Project</h3>
								<p>Website that allows small business to order products from different suppliers.</p>
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={'https://easy-peasy-v2.herokuapp.com/'}
									className="btn btn-primary"
								>
									View
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
						<span>Contact</span> Me
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
