import React from 'react';
import './seasonDisplay.css';

const seasonConfig ={
	summer: {
		text: "let's hit the beach",
		iconName: 'sun'
	},
	winter: {
		text: "Burr, it is chilly",
		iconName: "snowflake"
	}
}

const getSeason = (lat, month) => {
	if(month > 2 && month < 9){
		return lat > 0 ? 'winter' : 'summer';
	}
	else{
		return lat < 0 ? 'summer' : 'winter';
	}
};

const SeasonDisplay = props =>{
	const season = getSeason(props.lat, new Date().getMonth());
	const {text, iconName} = seasonConfig[season];
	return( 
		<div  className={`season-display ${season}`}>
			<i className={`left-icon massive ${iconName} icon`}/>
		 	<h1>{text}</h1>
		 	<i className={`right-icon massive ${iconName} icon`}/>
		</div> 
	);
}; 

export default SeasonDisplay;