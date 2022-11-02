import Header from "../components/Header"

export default function Companies() {

	const companies = [
		{
			id: "aksu",
			name: "Ak Aksu",
		},
		{
			id: "aras",
			name: "Gülaras",
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
			name: "Yıldız",
		},
	]

	return (
		<>
			<Header />
			<div className='services-layout'>
				{companies.map((item) => (
					<div key={item.id} className='services-card'>
						<h1 className="text-6xl p-7">{item.name}</h1>
						<hr />
						<div className="company-logo" >
							<img alt='company-logo' src={require(`../assets/firmalar/${item.id}.png`)} />
						</div>
					</div>
				))}
			</div>
		</>
	)
}
