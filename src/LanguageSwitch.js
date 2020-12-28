import React from 'react'

// Images
import spainIcon from './images/spanish-icon.png'
import britishIcon from './images/british-icon.jpg'

const LanguageSwitch = ({ value, setValue }) => {
	return (
		<div className="switch-currency">
			<img className={'spanish'} src={spainIcon} alt="sp-flag"></img>
			<label className="switch">
				<input
					checked={value !== 'spanish'}
					onChange={() => setValue(value === 'spanish' ? 'english' : 'spanish')}
					type="checkbox"
				></input>
				<span className="slider round"></span>
			</label>
			<img className={'british'} src={britishIcon} alt="gb-flag"></img>
		</div>
	)
}

export default LanguageSwitch
