import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Routes from './routes/Routes';

function App({ ...props }) {
	return (
		<HelmetProvider>
			<Router>
				<Routes childProps={props} />
			</Router>
		</HelmetProvider>
	);
}

export default App;
