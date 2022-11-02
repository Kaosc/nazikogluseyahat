import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer"

export default function RentCar() {

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},[])

	const cars = [
		{
			id: "1",
			name: "Car Name Field",
      img: require("../assets/araba2.jpeg")
		},
		{
			id: "2",
			name: "Car Name Field",
      img: require("../assets/araba1.jpeg")
		},
		{
			id: "3",
			name: "Car Name Field",
      img: require("../assets/araba2.jpeg")
		},
		{
			id: "4",
			name: "Car Name Field",
      img: require("../assets/araba1.jpeg")
		},
	]

  return (
    <>
			<Header />
			<div className='rentcar-layout'>
				{cars.map((item) => (
					<div key={item.id} className='rentcar-card fade-in-card'>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <h1 className="rentcar-title">{item.name}</h1>
              <a href='tel:+905315123973'>
                <div style={{justifyContent: "center", display: "flex", alignItems: "center"}}>
                  <h1 className="rentcar-call-text">Kirala</h1>
                  <img alt='phone' src={require('../assets/phone.png')} className="w-14" />
                </div>
              </a>
            </div>
						<hr  style={{borderBlockColor: "#9c9b9b"}}/>

						<div className="car-img-div" >
							<img className='car-img' alt='car-img' src={item.img} />
						</div>
					</div>
				))}
			</div>
			<Footer />

    </>
  );
}

