
export const CardProject = ({props}) => {
    return (
        <article class = "max-w-80 m-3 border-gray-700 bg-white shadow rounded overflow-hidden">
            <div>
                <h3>Project: {props.name}</h3>
            </div>
            <div class = "h-40">
                <img class = "h-full w-full object-cover object-left-top" src={props.image} alt ={props.name}/>
            </div> 
            <div>
                <h4>Descripcion: </h4>
                <p>{props.description}</p>
            </div>
            <div>Fecha: {props.date}</div>
            <div>Tecnologias: {props.tech}</div>
        </article>
    )
}