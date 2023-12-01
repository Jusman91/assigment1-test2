import About from '../components/fragments/content/About';
import Contact from '../components/fragments/content/Contact';
import Pricing from '../components/fragments/content/Pricing';
import LandingPage from '../components/fragments/landing-page/LandingPage';

const Home = () => {
	return (
		<>
			<LandingPage />
			<About />
			<Pricing />
			<Contact />
		</>
	);
};

export default Home;
