import Input from '../components/elements/Input';
import Button from '../components/elements/Button';

const Login = () => {
	return (
		<section className='container max-w-full min-h-screen mx-auto flex items-center justify-center bg-slate-950'>
			<form
				action=''
				className='wrapper-form md:w-96 flex flex-col item-center justify-center gap-6'>
				<h2 className='text-white text-center text-xl font-semibold'>
					Login
				</h2>
				<Input
					placeholder='Email'
					id='email'
					name='email'
					type='email'
				/>
				<Input
					placeholder='Password'
					id='password'
					name='password'
					type='password'
				/>
				<Button
					type='submit'
					className='rounded-3xl flex justify-center items-center gap-2 text-base'>
					Login
				</Button>
			</form>
		</section>
	);
};

export default Login;
