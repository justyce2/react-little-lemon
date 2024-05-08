// VIPTableBookingForm.js

import React, { useState } from 'react';

const VIPTableBookingForm = () => {
	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		phone: '',
		table: '',
		date: ''
	});
const [showData, setShowData] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setShowData(true);
		// Add your form submission logic here
		//console.log('Form submitted:', formData);
	};

	return (
	<>
	{!showData  &&
	<form onSubmit={handleSubmit} className="booking-form">
	<label htmlFor="firstname">First Name:</label>
	<input type="text" id="firstname" name="firstname" value={formData.firstname} onChange={handleChange} required /><br />

	<label htmlFor="lastname">Last Name:</label>
	<input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required /><br />

	<label htmlFor="email">Email:</label>
	<input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /><br />

	<label htmlFor="phone">Phone:</label>
	<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required /><br />

	<label htmlFor="table">Choose a Table:</label>
	<select id="table" name="table" value={formData.table} onChange={handleChange} required>
	<option value="">Select an option</option>
	<option value="table1">Table 1</option>
	<option value="table2">Table 2</option>
	<option value="table3">Table 3</option>
	{/* Add more options as needed */}
	</select><br />

	<label htmlFor="date">Date:</label>
	<input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required /><br />

	<input type="submit" value="Submit" />
	</form> 
		}
		
		{showData  &&
		<div>
			<div>First Name: {formData.firstname} </div>
			<div >Last Name: {formData.lastname} </div>
			<div >Email:{formData.email}</div>
			<div >Phone: {formData.phone} </div>
			<div >Table:{formData.table}</div>
			
			<div>Date:{formData.date}</div>
			</div>
		}
		</>
	);
};

export default VIPTableBookingForm;
