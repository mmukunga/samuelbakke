import React from 'react'
import CardUI from './CardUI'

function Cards({ results }) {

	return (
			
		<>
			<section className='container'>
					<div className='row'>

					
					{
							results.map((result, i) => (
									<div key={i} className='col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center'> 
									sdfds
											<CardUI key={result.Title} result={result}/>
									</div>
									
							))
					}

					</div>
			</section>
		</>
	)
}
export default Cards
