import { Link } from "react-router-dom"

import logo from "../assets/logo.png"
import whatsapp from "../assets/whatsapp.png"
import callCenter from "../assets/call_center.png"

import useMediaQuery from "../hooks/useMediaQuery"
import useScrollDirection from "../hooks/useScrollDirection"
import HeaderButtons from "./HeaderButtons"

export default function Header() {
	const tablet = useMediaQuery("(max-width: 1150px)")
	const mobile = useMediaQuery("(max-width: 668px)")
	const scrollDirection = useScrollDirection()

	return (
		<div className='header' style={{ top: scrollDirection === "down" ? "-245px" : "0" }}>
			<div className='header-container'>
				<Link to={"/"}>
					<img src={logo} className='logo' alt='logo' />
				</Link>
				{!mobile && !tablet && <HeaderButtons />}
				<div className='header-contact' style={{ borderLeft: "solid 1px" }}>
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
			{(mobile || tablet) && (
				<div>
					<HeaderButtons />
				</div>
			)}
		</div>
	)
}
