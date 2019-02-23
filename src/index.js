import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';


class App extends React.Component{
	state = { lat: null, errorMessage: ''};

	componentDidMount(){
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude}),
			err => this.setState({errorMessage: err.message})
			);
	}

	renderContent(){
		if(!this.state.errorMessage && this.state.lat){
			return <SeasonDisplay lat={this.state.lat} />
		}
		if(this.state.errorMessage && !this.state.lat){
			return <div>{this.state.errorMessage}</div>
		}
		return <Spinner message="Please Accept a Message Request" />;
	}

	render(){
		return(
			<div className="border red">
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));