import { IJob } from "../interfaces";

interface IProps {
	job: IJob;
}
export const Job = ({ job }: IProps) => {
	return (
		<div className="job" key={job.id}>
			<div className="title">
				{job.title} - {job.company}
			</div>
		</div>
	);
};
