import React from 'react'

// Images
import heddrichImg from '../images/heddrichITSolutions.png'
import ecommerceImg from '../images/eCommerceImg.png'
import myOnlineShopImg from '../images/myonlineshop.png'
import componetsImg from '../images/components.png'
import portfolioImg from '../images/portfolio.png'
import easyPeasyImg from '../images/easypeasy.png'
import Title from './Title'

const Projects = ({ projectsRef, language, option }) => {
	const projects = [
		{
			img: heddrichImg,
			monthEn: 'Dec',
			monthSp: 'Dic',
			year: '2020',
			titleEn: 'Web Design Services',
			titleSp: 'Servicios de Diseño Web',
			contentEn: 'Website to offer my services as a e-commerce web developer.',
			contentSp: 'Página para ofrecer mis servicios de desarrollador para comercios electrónicos',
			link: 'https://heddrichitsoluciones.online/',
		},
		{
			img: ecommerceImg,
			monthEn: 'Nov',
			monthSp: 'Nov',
			year: '2020',
			titleEn: 'eCommerce Website',
			titleSp: 'Página de Comercio Electrónico',
			contentEn: 'eCommerce website for the Venezuelan market.',
			contentSp: 'Comercio Electrónico para el mercado Venezolano.',
			link: 'https://ecommercespanish.herokuapp.com/',
		},
		{
			img: myOnlineShopImg,
			monthEn: 'Aug',
			monthSp: 'Ago',
			year: '2020',
			titleEn: 'Online Shop Creator Website',
			titleSp: 'Creador de Tiendas en Línea',
			contentEn: 'Website that allows users to create an online shop for free.',
			contentSp: 'Página que permite crear tiendas en línea de forma gratuita.',
			link: 'https://myonlineshopvzla.herokuapp.com/',
		},
		{
			img: componetsImg,
			monthEn: 'Feb',
			monthSp: 'Abr',
			year: '2020',
			titleEn: 'My Components Website',
			titleSp: 'Página de mis Componentes',
			contentEn: 'Website to showcase my react components for personal use.',
			contentSp: 'Página de uso personal, para mostrar mis componentes react.',
			link: 'https://react-components-vzla.herokuapp.com/',
		},
		{
			img: portfolioImg,
			monthEn: 'Feb',
			monthSp: 'Feb',
			year: '2020',
			titleEn: 'My Old Portfolio',
			titleSp: 'Mi Viejo Portafolio',
			contentEn: 'Website to showcase my personal development projects.',
			contentSp: 'Página para mostrar mis proyectos personales de desarrollo web.',
			link: 'https://portfolio-jonathanvzla.herokuapp.com/',
		},
		{
			img: easyPeasyImg,
			monthEn: 'Dec',
			monthSp: 'Dic',
			year: '2019',
			titleEn: 'College Project',
			titleSp: 'Proyecto Universitario',
			contentEn: 'Website that allows small business to order products from different suppliers.',
			contentSp: 'Página que permite a usuarios ordenar productos a diferentes proveedores.',
			link: 'https://easy-peasy-v2.herokuapp.com/',
		},
	]

	const projectTemplate = (item) => (
		<div className="project">
			<img src={`${item.img}`} alt={item.titleEn}></img>
			<div className="project-body">
				<span className="date">
					{language === 'english' ? item.monthEn : item.monthSp} {item.year}
				</span>
				<h3>{language === 'english' ? item.titleEn : item.titleSp}</h3>
				<p>{language === 'english' ? item.contentEn : item.contentSp}</p>
				<a target="_blank" rel="noopener noreferrer" href={`${item.link}`} className="btn btn-primary">
					{language === 'english' ? 'Visit' : 'Visitar'}
				</a>
			</div>
		</div>
	)
	return (
		<div ref={projectsRef} className={option === 'projects' ? 'section' : 'section-closed'}>
			<Title language={language} english={['My', ' Projects']} spanish={['Mis', ' Proyectos']} />
			<div className="project-list">
				{projects.map((item) => (
					<span key={item.name}>{projectTemplate(item)}</span>
				))}
			</div>
		</div>
	)
}

export default Projects
