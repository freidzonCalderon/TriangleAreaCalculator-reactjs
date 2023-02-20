import React, { useState } from 'react';
import './App.css';
import FormInputs from './components/FormInputs'
import TableOutput from './components/TableOutput'


function App() {

	const [data, setData] = useState([])
	
	const onSubmitHandler = (input) => {
		setData(data.concat(input))
	}

	return (
		<div className='App'>
			<FormInputs onSubmit={onSubmitHandler}/>
			<TableOutput infoData={data}/>
		</div>
	);
}

export default App;
