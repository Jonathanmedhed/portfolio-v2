import React from 'react'

const Title = ({ language, english, spanish }) => {
	return (
		<h1 className="top">
			{language === 'english' ? (
				<>
					<span>{english[0]}</span>
					{english[1]}
				</>
			) : (
				<>
					<span>{spanish[0]}</span>
					{spanish[1]}
				</>
			)}
		</h1>
	)
}

export default Title
