import React, { useState, useEffect } from 'react';
import './App.css';
import PplCard from './PplCard';
import { Grid } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function App() {
	const [ users, setUsers ] = useState([]);
	const [ value, setValue ] = React.useState('female');

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	useEffect(() => {
		async function fetchData() {
			setUsers(
				await fetch('https://randomuser.me/api/?results=10')
					.then((res) => res.json())
					// .then(res=>console.log(res.results))
					.then((res) => res.results)
					.catch((err) => console.log(err, 'Fetching error'))
			);
		}
		fetchData();
	}, []);

	return (
		<div className="App">
      
			<h3>The True Beauty of Dating</h3>

{/* Gender */}
			<FormControl component="fieldset">
				<FormLabel component="legend">Gender</FormLabel>
				<RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
					<FormControlLabel value="female" control={<Radio />} label="Female" />
					<FormControlLabel value="male" control={<Radio />} label="Male" />
				</RadioGroup>
			</FormControl>

			<Grid container spacing={10} styled={{ padding: '24px' }}>
				{users.filter((gen) => gen.gender === value).map((user) => (
					<Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
						<PplCard
							key={user.id}
							city={user.location.city}
							state={user.location.state}
							age={user.dob.age}
							email={user.email}
							firstname={user.name.first}
							lastname={user.name.last}
							picture={user.picture.large}
							phone={user.phone}
						/>
					</Grid>
				))}
			</Grid>
		</div>
	);
}

export default App;
