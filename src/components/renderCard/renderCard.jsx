import { CardProject } from "../cardProject/cardProject";
import { projects } from "./projects";

export const RenderCard = () => {
    return (
        <div>
            {projects.map ((project) => {
                return <CardProject props={project}/>
            })}
        </div>
    )
}

export default RenderCard;