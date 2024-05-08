// MainComponent.js

import React from 'react';
import VIPTableBookingForm from './VIPTableBookingForm';
import './App.css'; // Import the CSS file

const App = () => {
	return (
	<div>
	<header>
	<nav>
	<ul>
	<li><a href="/">Home</a></li>
	<li><a href="#">Menu</a></li>
	<li><a href="#">About</a></li>
	<li><a href="#">Contact</a></li>
	</ul>
	</nav>
	<h1>Little Lemon Restaurant</h1>
	{/* Add any additional header content here */}
	</header>
	<main>
	<h2>Book a  Table</h2>
	<VIPTableBookingForm />
	</main>
	{/* Add any additional footer content here */}
	</div>
	);
};

export default App;
