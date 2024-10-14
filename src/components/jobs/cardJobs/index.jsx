
export default function CardJobs ({props}) {
    return (
        <article Class = "bg-white shadow-xl m-1 p-3 text-xl">
            <div class = "flex justify-left items-center p-3 gap-2 text-sky-700">
                <img src= {props.logo} alt= {props.company} class = "rounded-full w-28"></img>
                <h3 class = "font-bold text-3xl">{props.company}</h3>
            </div>
            <div>
                <h3 class = "text-sky-500 font-semibold">Empleo:</h3>
                <p class = "ml-3 mb-3">{props.job}</p>    
                <h3 class = "text-sky-500 font-semibold">Descripción:</h3>
                <p class = "ml-3 mb-3 text-slate-600">{props.description}</p>
                <h3 class = "text-sky-500 font-semibold">Periodo:</h3>
                <p class = "">{props.periodo}</p>
            </div>
        </article> 
    )
}