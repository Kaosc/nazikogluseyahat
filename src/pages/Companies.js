import { useEffect } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Companies() {

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},[])

	const companies = [
		{
			id: "aksu",
			name: "Ak Aksu",
		},
		{
			id: "aras",
			name: "Özgülaras",
		},
		{
			id: "artvin",
			name: "Lüks Artvin",
		},
		{
			id: "bafra",
			name: "As Bafra",
		},
		{
			id: "cizre",
			name: "Özlem Cizre Nuh",
		},
		{
			id: "kanber",
			name: "Kanberoğlu",
		},
		{
			id: "karadeniz",
			name: "Nuhoğlu Karadeniz",
		},
		{
			id: "star",
			name: "Star Diyarbakır",
		},
		{
			id: "yildiz",
			name: "Tokat Yıldızı",
		},
	]

	return (
		<>
			<Header />
			<div className='companies-layout'>
				{companies.map((item) => (
					<div key={item.id} className='companies-card fade-in-card'>
						<h1 className="text-6xl p-7">{item.name}</h1>
						<hr  style={{borderBlockColor: "#9c9b9b"}}/>
						<div className="company-logo" >
							<img alt='company-logo' src={require(`../assets/firmalar/${item.id}.png`)} />
						</div>
					</div>
				))}
			</div>
			<Footer />

		</>
	)
}
