import { cva } from 'class-variance-authority';
import { twMerge as tw } from 'tailwind-merge';
import PropTypes from 'prop-types';

const buttonVariants = cva(
	'cursor-pointer select-none [outline:none] disabled:cursor-not-allowed disabled:bg-neutral-300 disabled:text-neutral-100 disabled:shadow-inner duration-500',
	{
		variants: {
			variant: {
				default:
					'px-4 py-1 text-xs md:text-base bg-cyan-500 focus:ring-[1px] focus:ring-primary-300 text-white font-semibold hover:bg-cyan-300',
				outline:
					'px-4 py-1 text-xs md:text-base text-cyan-400 border-[1px] border-cyan-400 hover:text-white hover:bg-cyan-400 font-semibold focus:ring-[1px] focus:ring-cyan-400',
				success:
					'px-4 py-1 text-xs md:text-base bg-green-500 hover:bg-green-400 focus:ring-[1px] focus:ring-green-500 text-white font-semibold',
				text: 'bg-none border-none text-secondary-800 hover:text-secondary-400 shadow-none p-0 font-semibold disabled:bg-transparent disabled:opacity-30',
			},
			size: {
				sm: 'text-sm py-1 px-2',
				md: 'text-base py-2 px-4',
				lg: 'text-lg py-4 px-8',
			},
			roundness: {
				square: 'rounded-none',
				round: 'rounded-md',
				pill: 'rounded-full',
			},
		},

		defaultVariants: {
			variant: 'default',
			size: 'md',
			roundness: 'round',
		},
	},
);

const Button = ({
	className,
	variant,
	size,
	roundness,
	...restProps
}) => {
	return (
		<button
			className={tw(
				buttonVariants({
					variant,
					size,
					roundness,
					className,
				}),
			)}
			{...restProps}
		/>
	);
};

Button.propTypes = {
	className: PropTypes.string,
	variant: PropTypes.oneOf([
		'default',
		'outline',
		'success',
		'text',
	]),
	size: PropTypes.oneOf(['sm', 'md', 'lg']),
	roundness: PropTypes.oneOf(['square', 'round', 'pill']),
};

export default Button;
