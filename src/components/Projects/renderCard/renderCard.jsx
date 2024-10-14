import { CardProject } from "../cardProject/cardProject";
import { projects } from "./projects";

export const RenderCard = () => {
    return (
        <div class = "grid md:grid-cols-2 max-w-6xl mx-auto gap-4 lg:grid-cols-3 ">
            {projects.map ((project) => {
                return <CardProject key={project.id} props={project}/>
            })}
        </div>
    )
}

export default RenderCard; 