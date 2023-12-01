import HeaderContent from '../header/HeaderContent';

const About = () => {
	return (
		<section className='max-w-5xl mx-auto py-8 px-4'>
			<HeaderContent className='text-black'>
				About
			</HeaderContent>
			<div className='text-justify leading-8'>
				<p>
					Kami adalah sebuah startup yang berdedikasi untuk
					memberikan solusi terbaik bagi para pengusaha
					dalam mengelola bisnis mereka. Dengan berfokus
					pada sistem Enterprise Resource Planning (ERP),
					kami menciptakan platform yang dapat memudahkan
					pencatatan setiap barang yang keluar dan masuk,
					serta menyediakan analisis keuntungan harian.
				</p>
				<br />
				<p>
					Inovasi terbaru kami adalah System TIER, yang
					dirancang untuk memberikan pengalaman pengguna
					yang lebih baik dan fleksibilitas dalam
					pengelolaan bisnis. TIER hadir dalam tiga level
					yang berbeda, disesuaikan dengan kebutuhan dan
					tingkat kompleksitas bisnis Anda.
				</p>
				<br />
				<p>
					Dengan TIER, kami memberikan solusi yang sesuai
					dengan tingkat kebutuhan dan kompleksitas bisnis
					Anda, memastikan bahwa setiap pengusaha dapat
					mengelola bisnis mereka dengan lebih efisien dan
					efektif.
				</p>
			</div>
		</section>
	);
};

export default About;
