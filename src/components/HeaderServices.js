import React from "react"
import { Link } from "react-router-dom"

export default function HeaderServices() {
	return (
		<div className='header-services'>
			<Link to='/services'>
				<button className='nav-btn'>
					<p className=''>Hizmetlerimiz</p>
				</button>
			</Link>
			<Link to='/rentcar'>
				<button className='nav-btn'>
					<p className=''>Rent A Car</p>
				</button>
			</Link>
			<Link to='/companies'>
				<button className='nav-btn'>
					<p className=''>Anlaşmalı Firmalar</p>
				</button>
			</Link>
		</div>
	)
}
