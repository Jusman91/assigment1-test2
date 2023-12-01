import Footer from '../components/fragments/footer/Footer';
import NavBar from '../components/fragments/header/NavBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
	return (
		<div className='container max-w-7xl min-h-screen mx-auto'>
			<NavBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Layout;
