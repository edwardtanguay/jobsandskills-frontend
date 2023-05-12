import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';

export const PageWelcome = () => {
	const { appTitle, jobs, skills, lastUpdated } = useContext(AppContext);


	console.log('lastUpdated', lastUpdated);
	return (
		<div className="pageWelcome">
			<Helmet>
				<title>{appTitle} - Welcome</title>
			</Helmet>
			<p>This site has <strong>{jobs.length}</strong> jobs and <strong>{skills.length}</strong> skills.</p>
			<p>This data was last updated at: {lastUpdated}</p>
		</div>
	);
};
