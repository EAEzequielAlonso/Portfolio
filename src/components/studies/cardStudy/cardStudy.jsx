

export default function CardStudy ({props}) {
    return (
        <article Class = "bg-white shadow-xl m-1 p-3 text-xl">
            <div class = "flex justify-left items-center p-3 gap-2 text-sky-700">
                <img src= {props.logo} alt= {props.institution} class = "rounded-full w-28"></img>
                <h3 class = "font-bold text-3xl">{props.institution}</h3>
            </div>
            <div class = "h-40 bg-slate-500 p-1">
                <img class = "h-full w-full object-cover object-left-top shadow-md" src={props.imgUrl} alt ={props.title}/>
            </div> 
            <div>
                <h3 class = "text-sky-500 font-semibold">Titulo:</h3>
                <p class = "ml-3 mb-3">{props.title}</p>    
                <h3 class = "text-sky-500 font-semibold">Periodo:</h3>
                <p class = "">{props.periodo}</p>
            </div>
        </article>
    )
} 