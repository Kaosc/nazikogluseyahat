import useMediaQuery from "../hooks/useMediaQuery"

export default function Header() {
	const desktop = useMediaQuery("(min-width: 1366px)")

	return (
		<footer>
			<div class='footer-content'>
				<div className='socials'>
					<div className='social-container'>
						<a href="https://instagram.com/nazikogluu" target={"_blank"} rel="noreferrer">
							<img alt='instagram' src={require("../assets/instagram.png")} />
						</a>
					</div>
					<div className='social-container'>
						<a href="mailto:nazik.emre.61@gmail.com">
							<img alt='gmail' src={require("../assets/gmail.png")} />
						</a>
					</div>
					<div className='social-container'>
					<a href='https://wa.me/+905315123973' target={desktop && "_blank"} rel="noreferrer">
							<img alt='whatsapp' src={require("../assets/whatsapp-ico.png")} />
						</a>
					</div>
					<div className='social-container'>
					<a href='tel:+904627716923' target={desktop && "_blank"} rel="noreferrer">
							<img alt='phone' src={require("../assets/phone-ico.png")} />
						</a>
					</div>
					<div className='social-container'>
					<a href='https://goo.gl/maps/7fmiDxS3musKD47u7' target={desktop && "_blank"} rel="noreferrer">
							<img alt='map' src={require("../assets/map.png")} />
						</a>
					</div>
				</div>
			</div>

			{/* BOTTOM BAR */}
			<div class='footer-bottom'>
				<p>
					copyright &copy; Nazikoğlu Seyahat
				</p>

				<div class='footer-menu'>
					<a style={{ color: "black", fontSize: 12 }} href='https://kaosc.github.io'>
						{" "}
						Made by Kaosc
					</a>
				</div>
			</div>
		</footer>
	)
}
