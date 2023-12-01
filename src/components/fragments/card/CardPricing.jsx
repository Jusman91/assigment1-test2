import Button from '../../elements/Button';
import PropTypes from 'prop-types';

const CardPricing = ({ data }) => {
	return (
		<div className='wrapper w-full bg-neutral-900 md:w-60 h-96 grid place-items-center rounded-lg hover:animate-pulse'>
			<div className=' w-full flex flex-col justify-evenly items-center gap-4'>
				<h2 className='text-xl font-bold text-center text-cyan-600'>
					{data.name}
				</h2>
				<ul className='list-disc text-sm leading-6 text-white px-8'>
					{data.features.map((item, idx) => (
						<li key={idx}>{item}</li>
					))}
				</ul>
				<p className='text-orange-500 text-center'>
					{`Price ${data.price}`}
				</p>
				<Button className='w-1/2'>Buy</Button>
			</div>
		</div>
	);
};

CardPricing.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		features: PropTypes.arrayOf(PropTypes.string)
			.isRequired,
		price: PropTypes.number.isRequired,
	}).isRequired,
};

export default CardPricing;
