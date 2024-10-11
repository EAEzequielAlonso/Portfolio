
export const CardProject = ({props}) => {
    return (
        <article class = "flex flex-col shadow rounded overflow-hidden bg-slate-200">
            <div class="bg-white space-y-3 p-3 shadow text-center">
                <h3 class = "text-xl"> {props.name} </h3>
            </div>
            <div class = "h-40">
                <img class = "h-full w-full object-cover object-left-top" src={props.image} alt ={props.name}/>
            </div> 
            <div class=" bg-white flex-1 space-y-3 p-3 hidden md:block">
                <h4 class = "text-lg font-semibold text-sky-500">
                    Descripcion
                </h4>
                <p class = "leading-6 text-slate-500">{props.description}</p>
                <p class = "font-semibold">Fecha: {props.date}</p>
            </div>
            
            <div class=" bg-white space-y-3 p-3 ">
                <h4 class = "text-lg font-semibold text-sky-500">
                    Tecnologias 
                </h4>
                <div class= "flex flex-wrap justify-evenly gap-1">{ props.tech.map ((tech) => {
                    return (
                        <>
                            <h5 class = "text-black bg-slate-300 px-3 py-1 rounded-lg ">{tech}</h5>
                        </>
                        )
                    })
                }</div>
            </div>
        </article>
    )
}