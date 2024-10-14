import Link from "next/link"

export const CardProject = ({props}) => {
    return (
        <article class = "flex flex-col shadow-xl rounded overflow-hidden bg-white">
            <div class=" bg-white space-y-3 p-3 shadow text-center">
                <h3 class = "text-2xl font-bold text-sky-700"> {props.name} </h3>
            </div>
            <div class = "h-40 bg-slate-500 p-1">
                <img class = "h-full w-full object-cover object-left-top shadow-md" src={props.image} alt ={props.name}/>
            </div> 
            <div class=" bg-white space-y-3 p-3 hidden md:block">
                <h4 class = "text-lg font-semibold text-sky-500">
                    {props.title}
                </h4>
                <p class = "leading-6 text-slate-500 pl-2">{props.description}</p>
                <p class = "text-right">{props.date}</p>
            </div>
            <div class=" bg-white space-y-3 p-3 ">
                <h4 class = "text-lg font-semibold text-sky-500">
                    Ver 
                </h4>
                <div class= "flex flex-wrap justify-evenly gap-1">
                    { props.exibition.map ((exibity) => {
                    return (
                        <>
                            <Link href={exibity.link} class = "text-black bg-sky-200 hover:font-semibold hover:bg-sky-300 px-3 py-1 rounded-lg ">{exibity.name}</Link>
                        </>
                        )
                    })
                }</div>
            </div>            
            <div class=" bg-white space-y-3 p-3 ">
                <h4 class = "text-lg font-semibold text-sky-500">
                    Tecnologias 
                </h4>
                <div class= "flex flex-wrap justify-evenly gap-1">{ props.tech.map ((tech) => {
                    return (
                        <>
                            <h5 class = "text-black bg-slate-200 px-3 py-1 rounded-lg ">{tech}</h5>
                        </>
                        )
                    })
                }</div>
            </div>
        </article>
    )
}