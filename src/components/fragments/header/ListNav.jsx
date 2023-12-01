import { Link, useNavigate } from 'react-router-dom';
import { listNavbar } from '../../../assets/static';
import PropTypes from 'prop-types';
import Button from '../../elements/Button';
import LOGO from '../../../assets/img/logo.png';
import IMG_3 from '../../../assets/img/svg/blob1.svg';

const ListNav = ({ openMenu }) => {
	const navigate = useNavigate();

	const classMobile = openMenu
		? 'left-0'
		: '-translate-x-full md:translate-x-0';
	return (
		<div
			className={`${classMobile} absolute left-0 top-0 bg-slate-950 bg-opacity-90 md:bg-transparent min-w-[60%] md:w-full h-screen gap-8 md:gap-4 px-8 py-3 md:px-0 md:relative md:h-min duration-500 z-20 overflow-y-auto md:overflow-y-visible`}>
			<div className='flex md:flex-row flex-col items-center justify-between gap-8 py-4 md:py-0'>
				<div className='hidden w-full relative md:flex items-center'>
					<img
						className='absolute -left-52 -bottom-52 -z-10'
						src={IMG_3}
						alt=''
					/>
					<img
						className='w-20 h-20 object-cover'
						src={LOGO}
						alt=''
					/>
					<h1 className='text-2xl text-white font-extrabold text-center t'>
						HOME
					</h1>
				</div>
				<ul className='flex flex-col items-center md:flex-row gap-8'>
					{listNavbar.map((item, idx) => (
						<Link
							key={idx}
							className='uppercase text-base md:text-2xl text-white md:text-black font-extrabold hover:text-cyan-600 duration-300'>
							{item}
						</Link>
					))}
				</ul>
				<Button
					onClick={() => navigate('/login')}
					variant='outline'
					size='sm'
					className='px-12 uppercase border-2'>
					Login
				</Button>
			</div>
		</div>
	);
};

ListNav.propTypes = {
	openMenu: PropTypes.bool,
};

export default ListNav;
