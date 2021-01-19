import React from 'react'
import Title from './Title'

const Contact = ({ contactRef, language, option }) => {
	const mobileIcon = (ref, icon, content) => (
		<div className="show-sm">
			<a href={`${ref}`} className="item">
				<i className={`${icon}`}></i>
				<div className="data">{content}</div>
			</a>
		</div>
	)

	const desktopIcon = (icon, content) => (
		<div className="hide-sm">
			<div className="item">
				<i className={`${icon}`}></i>
				<div className="data">{content}</div>
			</div>
		</div>
	)

	return (
		<div ref={contactRef} className={option === 'contact' ? 'section' : 'section-closed'}>
			<Title language={language} english={['Contact', ' Me']} spanish={['C', 'ontacto']} />
			<div className="contact-list">
				{mobileIcon(`tel:+582432450361`, 'fas fa-phone', '+58-243-2450361')}
				{desktopIcon('fas fa-phone', '+58-243-2450361')}
				{mobileIcon(`https://wa.me/+584126289924`, 'fab fa-whatsapp', '+58-412-6289924')}
				{desktopIcon('fab fa-whatsapp', '+58-412-6289924')}
				{mobileIcon(`mailto:jonathanmedhed@gmail.com`, 'far fa-envelope', 'jonathanmedhed@gmail.com')}
				{desktopIcon('far fa-envelope', 'jonathanmedhed@gmail.com')}
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
	)
}

export default Contact
