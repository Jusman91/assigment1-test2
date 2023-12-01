import IMG_2 from '../../../assets/img/svg/shapes2.svg';

const BottomRight = () => {
	return (
		<div className='w-full'>
			<img
				className='md:absolute md:-right-72 lg:-right-96 -z-10'
				src={IMG_2}
				alt=''
			/>
		</div>
	);
};

export default BottomRight;
