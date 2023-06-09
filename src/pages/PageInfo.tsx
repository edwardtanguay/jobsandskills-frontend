import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Helmet } from 'react-helmet';
import { Job } from '../components/Job';

export const PageInfo = () => {
	const { appTitle, jobs, skills } = useContext(AppContext);

	return (
		<div className="pageInfo">
			<Helmet>
				<title>{appTitle} - Info</title>
			</Helmet>
			<div className="content">
				<div className="jobs">
					<h2>{jobs.length} Jobs</h2>
					{jobs.map(job => {
						return (<Job job={job} key={job.id} />)
					})}
				</div>
				<div className="skills">
					<h2>{skills.length} Skills</h2>
					{skills.map(skill => {
						return (
							<div className="skill" key={skill.name}>
								<div className="item"><span className="name">{skill.name}</span> - {skill.description}</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};