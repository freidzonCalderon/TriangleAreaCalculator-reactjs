import 'bootstrap/dist/css/bootstrap.min.css';

const TableOutput = ({ infoData }) => {
	const objectData = infoData.map((dataObject) => {
		const baseTable = parseInt(dataObject.base);
		const heightTable = parseInt(dataObject.height);
		const areaTable = (baseTable * heightTable) / 2;
		return {
			base: baseTable,
			height: heightTable,
			area: areaTable,
		};
	});

	return (
		<div>
			<div className='container text-center mt-5'>
				<table className='table table-secondary'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							<th scope='col'>Base</th>
							<th scope='col'>Height</th>
							<th scope='col'>Area</th>
						</tr>
					</thead>
					<tbody>
						{objectData.map((item, i) => {
							return (
								<tr key={i}>
									<th scope='row'>{i + 1}</th>
									<td>{item.base}</td>
									<td>{item.height}</td>
									<td>{item.area}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableOutput;
