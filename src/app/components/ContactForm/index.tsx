import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@mui/material";

const ContactForm = () => {
	const [state, handleSubmit] = useForm("maygjgoo");
	if (state.succeeded) {
		return (
			<p className='text-palette-mint font-bold'>Thanks for your message!</p>
		);
	}

	return (
		<form
			className='flex flex-col gap-2 w-full xs:w-3/5 bg-brand-card p-4 mt-4 text-sm'
			onSubmit={handleSubmit}
		>
			<div className='flex flex-col gap-1'>
				<label className='text-left' htmlFor='firstName'>
					First Name
				</label>
				<input
					className='w-full px-1 py-0.5 rounded-sm text-black'
					id='firstName'
					type='firstName'
					name='firstName'
				/>
				<ValidationError
					prefix='First Name'
					field='firstName'
					errors={state.errors}
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<label className='text-left' htmlFor='lastName'>
					Last Name
				</label>
				<input
					className='w-full px-1 py-0.5 rounded-sm text-black'
					id='lastName'
					type='lastName'
					name='lastName'
				/>
				<ValidationError
					prefix='Last Name'
					field='lastName'
					errors={state.errors}
				/>
			</div>
			<div className='flex flex-col gap-1'>
				<label className='text-left' htmlFor='email'>
					Email Address
				</label>
				<input
					className='w-full px-1 py-0.5 rounded-sm text-black'
					id='email'
					type='email'
					name='email'
				/>
				<ValidationError prefix='Email' field='email' errors={state.errors} />
			</div>
			<div className='flex flex-col gap-1'>
				<label className='text-left' htmlFor='message'>
					Message
				</label>
				<textarea
					className='w-full px-1 py-0.5 rounded-sm text-black'
					rows={5}
					id='message'
					name='message'
				/>
				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>
			</div>
			<Button
				type='submit'
				className='bg-palette-blue mt-4 text-black hover:bg-palette-blueHover'
				variant='contained'
				disabled={state.submitting}
			>
				Submit
			</Button>
		</form>
	);
};

export default ContactForm;
