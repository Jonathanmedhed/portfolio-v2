import React, { useState, createRef } from 'react'

// Components
import LanguageSwitch from './components/LanguageSwitch'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'

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
			<Navbar goTo={goTo} language={language} option={option} />
			{/**
			 * Profile
			 */}
			<Profile goTo={goTo} language={language} />
			{/**
			 * Sections
			 */}
			<div className="sections">
				{/**
				 * About Me
				 */}
				<AboutMe aboutRef={aboutRef} language={language} option={option} />
				{/**
				 * Resume
				 */}
				<Resume resumeRef={resumeRef} language={language} option={option} />
				{/**
				 * Projects
				 */}
				<Projects projectsRef={projectsRef} language={language} option={option} />
				{/**
				 * Contact
				 */}
				<Contact contactRef={contactRef} language={language} option={option} />
			</div>
		</div>
	)
}

export default Main
