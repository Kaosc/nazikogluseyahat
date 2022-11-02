import { useEffect } from 'react';
import Header from '../components/Header';

export default function Home() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	},[])

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

