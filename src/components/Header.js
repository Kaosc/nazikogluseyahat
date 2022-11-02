import logo from "../assets/logo.png"
import whatsapp from "../assets/whatsapp.png"
import callCenter from "../assets/call_center.png"
import React from "react"
import useMediaQuery from "../hooks/useMediaQuery";

import HeaderServices from "./HeaderServices"
export default function Header() {
	const desktop = useMediaQuery('(max-width: 960px)');
	const tablet = useMediaQuery('(max-width: 1150px)');
	const mobile = useMediaQuery('(max-width: 668px)');

	return (
		<div>
			<div className='header-container'>
				<img src={logo} className='logo' alt='logo' />
				{!mobile && !tablet && <HeaderServices/>}
				<div className='header-contact' style={{borderLeft: "solid 1px"}}>
					<div className='header-contact-in-container'>
						<img src={whatsapp} className='header-contact-icons' alt='logo' />
						<div>
							<p className='header-contact-text'>Whatsapp Hattı</p>
							<p className='header-contact-number'>0462 771 69 23</p>
						</div>
					</div>
					<div className='header-contact-in-container'>
						<img src={callCenter} className='header-contact-icons' alt='logo' />
						<div>
							<p className='header-contact-text'>7/24 Çağrı Merkezi</p>
							<p className='header-contact-number'>0531 512 39 73</p>
						</div>
					</div>
				</div>
			</div>
			{(mobile || tablet) && <div className="navbar">
				 <HeaderServices/>
			</div>}
		</div>
	)
}
