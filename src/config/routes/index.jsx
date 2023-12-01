import { useRoutes } from 'react-router-dom';
import Login from '../../pages/Login';
import Home from '../../pages/Home';
import Layout from '../../layout';

const Routes = () => {
	let element = useRoutes([
		{ path: '/login', element: <Login /> },
		{
			path: '',
			element: <Layout />,
			children: [{ path: '/', element: <Home /> }],
		},
	]);

	return element;
};

export default Routes;
