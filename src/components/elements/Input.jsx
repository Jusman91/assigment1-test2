import { cva } from 'class-variance-authority';
import { twMerge as tw } from 'tailwind-merge';
import PropTypes from 'prop-types';

const Input = ({
	className,
	variant,
	lengthInput,
	...restProps
}) => {
	const inputVariants = cva(
		'peer h-full w-full border bg-transparent p-3 rounded-3xl text-white text-sm font-normal outline outline-0 transition-all focus:border-2 focus:outline-0',
		{
			variants: {
				variant: {
					default:
						'border-blue-900 peer-valid:text-blue-600 peer-valid:border-blue-900 peer-focus:border-blue-900 peer-focus:text-blue-600',
					success:
						'border-green-900 peer-valid:text-green-600 peer-valid:border-green-900 peer-focus:border-green-900 peer-focus:text-green-600',
					error:
						'border-red-900 peer-valid:text-red-600 peer-valid:border-red-900 peer-focus:border-red-900 peer-focus:text-red-600',
				},
			},
			defaultVariants: {
				variant: 'default',
			},
		},
	);

	// const labelVariants = cva(
	// 	'text-white text-sm py-3 pr-[10px] pl-12 absolute left-0 pointer-events-none font-light  duration-500 tracking-widest  peer-valid:text-xs peer-valid:px-2 peer-valid:py-0 peer-valid:border  peer-valid:rounded-lg peer-valid:translate-x-8 peer-valid:-translate-y-2 peer-focus:text-xs peer-focus:px-2 peer-focus:py-0 peer-focus:border  peer-focus:rounded-lg peer-focus:translate-x-8 peer-focus:-translate-y-2 peer-placeholder-shown:border-none peer-valid:bg-blue-black peer-focus:bg-blue-black',
	// 	{
	// 		variants: {
	// 			variant: {
	// 				default:
	// 					'border-blue-900 peer-valid:text-blue-600 peer-valid:border-blue-900 peer-focus:border-blue-900 peer-focus:text-blue-600',
	// 				success:
	// 					'border-green-900 bg-blue-black peer-valid:text-green-600 peer-valid:border-green-900',
	// 				error:
	// 					'border-red-900 peer-valid:text-red-600 peer-valid:border-red-900 peer-focus:border-red-900 peer-focus:text-red-600 ',
	// 			},
	// 		},
	// 		defaultVariants: {
	// 			variant: 'default',
	// 		},
	// 	},
	// );

	return (
		<div className='relative md:w-full min-w-[200px] transition-transform duration-500'>
			<input
				autoComplete='off'
				className={tw(
					inputVariants({ variant, className }),
				)}
				{...restProps}
			/>
			{lengthInput && (
				<small className='text-white absolute right-4 bottom-0'>
					{lengthInput}
				</small>
			)}

			{/* <label
				htmlFor={restProps.id}
				className={labelVariants({ variant, className })}>
				{label}
			</label> */}
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string,
	className: PropTypes.string,
	variant: PropTypes.oneOf(['default', 'success', 'error']),
	noLabel: PropTypes.bool,
	lengthInput: PropTypes.string,
};

export default Input;
