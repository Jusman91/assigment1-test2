import { cva } from 'class-variance-authority';
import { twMerge as tw } from 'tailwind-merge';
import PropTypes from 'prop-types';

const classDefault = cva(
	'text-white text-3xl font-bold text-center py-4',
);

const HeaderContent = ({ children, className }) => {
	return (
		<h1
			className={tw(
				classDefault({
					className,
				}),
			)}>
			{children}
		</h1>
	);
};

HeaderContent.propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

export default HeaderContent;
