import { useState, useEffect } from 'react';
import { createContext } from 'react';
import axios from 'axios';
import { IJob, ISkill } from './interfaces';

const jobsUrl = 'http://localhost:5500/jobs';
const skillsUrl = 'http://localhost:5500/skills';

interface IAppContext {
	appTitle: string;
	jobs: IJob[];
	skills: ISkill[];
	lastUpdated: string;
}

interface IAppProvider {
	children: React.ReactNode;
}

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const appTitle = 'Info Site';
	const [jobs, setJobs] = useState<IJob[]>([]);
	const [skills, setSkills] = useState<ISkill[]>([]);

	const lastUpdated = '2023-05-11 11:46:34';

	useEffect(() => {
		(async () => {
			setJobs((await axios.get(jobsUrl)).data);
		})();
	}, []);

	useEffect(() => {
		(async () => {
			setSkills((await axios.get(skillsUrl)).data);
		})();
	}, []);

	return (
		<AppContext.Provider
			value={{
				appTitle,
				jobs,
				skills,
				lastUpdated
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
