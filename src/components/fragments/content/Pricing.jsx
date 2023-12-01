import { listTiers } from '../../../assets/static';
import CardPricing from '../card/CardPricing';
import HeaderContent from '../header/HeaderContent';

const Pricing = () => {
	return (
		<section className='bg-slate-900 py-8'>
			<HeaderContent>Pricing</HeaderContent>
			<div className='flex flex-wrap justify-center gap-4 px-4'>
				{listTiers.map((tier, idx) => (
					<CardPricing key={idx} data={tier} />
				))}
			</div>
		</section>
	);
};

export default Pricing;
