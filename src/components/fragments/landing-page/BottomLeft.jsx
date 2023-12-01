import IMG_1 from '../../../assets/img/svg/metrics.svg';

const BottomLeft = () => {
	return (
		<div className='absolute bottom-20 w-full md:w-1/2 px-8 '>
			<div className='w-full flex md:flex-col flex-col-reverse'>
				<h2>
					<q>
						Mencatat setiap transaksi bisnis, mulai dari
						barang masuk hingga keuntungan, menjadi lebih
						mudah dan efisien
					</q>
				</h2>
				<div className='w-full'>
					<img className='w-72 ' src={IMG_1} alt='' />
				</div>
			</div>
		</div>
	);
};

export default BottomLeft;
