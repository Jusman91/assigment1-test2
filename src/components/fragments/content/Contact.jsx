import HeaderContent from '../header/HeaderContent';
import IMG_4 from '../../../assets/img/svg/contact.svg';
import IMG_5 from '../../../assets/img/phone.png';
import Input from '../../elements/Input';
import Button from '../../elements/Button';

const Contact = () => {
	return (
		<section>
			<HeaderContent className='text-black'>
				Contact
			</HeaderContent>
			<div className='flex flex-col md:flex-row'>
				<img
					className='w-full md:w-1/2 h-60 md:h-full'
					src={IMG_4}
					alt=''
				/>
				<div className='w-full md:w-1/2 bg-slate-900 text-white p-4'>
					<p>
						Jika Anda memiliki pertanyaan lebih lanjut atau
						ingin mencoba platform kami, jangan ragu untuk
						menghubungi tim dukungan kami. Kami siap
						membantu Anda mencapai kesuksesan bisnis yang
						lebih besar!
					</p>
					<div className='text-4xl py-4 flex items-center justify-center'>
						<img src={IMG_5} alt='' />
						<h1>021-2222-3333</h1>
					</div>
					<form action='' className='flex flex-col gap-2'>
						<Input
							placeholder='Name'
							id='name'
							name='name'
							type='text'
						/>
						<Input
							placeholder='Email'
							name='email'
							id='email'
							type='text'
						/>
						<Input
							placeholder='Telephone'
							name='telephone'
							id='telephone'
						/>
						<textarea
							className='bg-transparent border border-blue-600 rounded-xl p-2'
							name='message'
							id='message'
							placeholder='Message'
							cols='30'
							rows='10'></textarea>
						<Button>Send Message</Button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
