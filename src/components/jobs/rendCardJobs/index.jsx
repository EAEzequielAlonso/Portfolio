import { jobs } from "./jobs";
import CardJobs from "../cardJobs";

export default function RenderCardJobs () {
    return (
        <div class = "grid md:grid-cols-2 max-w-6xl mx-auto gap-4 lg:grid-cols-3 ">
            {jobs.map ((job) => {
                return <CardJobs key={job.id} props={job}/>
            })}
        </div> 
    )
}