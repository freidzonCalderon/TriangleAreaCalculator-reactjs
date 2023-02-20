import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const FormInputs = ({ onSubmit }) => {
	const [input, setInput] = useState({
		base: '',
		height: '',
	});

	const submitHandler = (e) => {
		e.preventDefault();
		onSubmit(input);

		setInput({
			base: '',
			height: '',
		});
	};

	const clearData = () => {
		setInput({
			base: '',
			height: '',
		});
		window.location.reload(false);
	};

	return (
		<div className='container text-center mt-5 pt-4'>
			<h1>Triangle Area Calculator</h1>

			<form
				onSubmit={submitHandler}
				className='form mt-5 pt-4 bg-light rounded'
			>
				<div className='row'>
					<div className='col' />
					<div className='mb-3 col-6 row'>
						<label className='form-label col-1'>Base</label>
						<input
							onChange={(e) => {
								setInput({ ...input, base: e.target.value });
							}}
							value={input.base}
							className='form-control'
							type='number'
							name='base'
							required
						/>
					</div>
					<div className='col' />
				</div>

				<div className='row'>
					<div className='col' />
					<div className='mb-3 col-6 row'>
						<label className='form-label col-1'>Height</label>
						<input
							onChange={(e) => {
								setInput({ ...input, height: e.target.value });
							}}
							value={input.height}
							className='form-control'
							type='number'
							name='height'
							required
						/>
					</div>
					<div className='col' />
				</div>

				<div className='pb-3'>
					<button type='submit' className='btn btn-dark m-1'>
						Calculate
					</button>
					<button
						type='button'
						onClick={clearData}
						className='btn btn-dark'
					>
						Clear Data
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormInputs;
