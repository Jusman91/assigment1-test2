import useToggle from '../../../hook';
import Button from '../../elements/Button';
import ListNav from './ListNav';

const NavBar = () => {
	const [toggle, setToggle] = useToggle(false);

	return (
		<header className='bg-white sticky top-0 z-[999]'>
			<nav className='relative flex items-center gap-8 px-4 justify-end'>
				<ListNav openMenu={toggle} />
				<Button // toggle side bar
					variant='text'
					type='button'
					onClick={setToggle}
					className='md:hidden'>
					{toggle ? (
						<span className='icon-[fluent--chat-dismiss-16-regular] text-cyan-800 text-3xl' />
					) : (
						<span className='icon-[fluent--list-rtl-16-filled] text-cyan-800 text-3xl' />
					)}
				</Button>
			</nav>
		</header>
	);
};

export default NavBar;
