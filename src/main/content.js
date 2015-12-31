import React from 'react'

export default class Content extends React.Component {
	render(){
		return (
			<section className="content">
				<div className="grid-flex-container">
					<h1>Here goes the title</h1>
				</div>

				<div className="grid-flex-container">
					<div className="grid-flex-cell">
						<p>Hello</p>
					</div>

					<div className="grid-flex-cell grid-flex-cell-1of2">
						<p>World!</p>
					</div>
				</div>
			</section>
		)
	}
}