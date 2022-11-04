import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" })
	}, [])

	return (
		<div className='App'>
			<Header />

			<div className='home-container'>
				{/* <div className='title-logo'>
					<img className='banner-img' src={require("../assets/placeholder.png")} alt='bus' />
				</div> */}
				<div className="banner-container">
					<div className='banner'>
						<img className='banner-img banner-img-canvas' src={require("../assets/new-banner-1.png")} alt='banner1' />
					</div>
					<div className='banner'>
						<img className='banner-img banner-img-canvas' src={require("../assets/new-banner-2-edited.png")} alt='banner2' />
					</div>
				</div>

				<div className='google-map-container'>
					<h1 className='adress-title'>ADRES</h1>
					<h1 className='adress-body'>
						Cumhuriyet Mahallesi, Rıhtım Sokak, NO: 6, Of / Trabzon - Yeni Terminal
					</h1>
					<iframe
						className='google-map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6026.851799163944!2d40.25334564187645!3d40.950247859140624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4065d42e2cb3ab75%3A0x2fd95ef843d6fbf6!2sOf%2C%20Trabzon!5e0!3m2!1str!2str!4v1667387821630!5m2!1str!2str'
						allowfullscreen=''
						loading='lazy'
						title='map'
						referrerpolicy='no-referrer-when-downgrade'></iframe>
				</div>
			</div>
				<Footer />
		</div>
	)
}
