import CardStudy from "../cardStudy/cardStudy";
import { studies } from "./studies";

export default function RenderCardStudies () {
    return (
        <div class = "grid md:grid-cols-2 max-w-6xl mx-auto gap-4 lg:grid-cols-3 ">
            {studies.map ((study) => {
                return <CardStudy key={study.id} props={study}/>
            })}
        </div>
    )
}
