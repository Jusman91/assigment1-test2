import BottomLeft from './BottomLeft';
import BottomRight from './BottomRight';
import Middle from './Middle';

const LandingPage = () => {
	return (
		<section className='relative w-full min-h-[calc(100vh-80px)] overflow-hidden'>
			<Middle />
			<BottomLeft />
			<BottomRight />
		</section>
	);
};

export default LandingPage;
