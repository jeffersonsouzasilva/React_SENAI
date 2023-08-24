import "./style.css"
import { Link } from "react-router-dom"


export function CardServicos(props: any) {

    // function parseListaTechs() {
    //     if (typeof props.techs === "string") {
    //         return JSON.parse(props.techs)
    //     } else {
    //         return props.techs
    //     }
    // }


    return (


        <div className="servico">
            <div className="topo_servico">
                <Link to={"/perfil/" + props.id} >{props.titulo}</Link>
                {/* <h3>{props.titulo}</h3> */}
                <span>{props.valor}</span>


            </div>
            <div className="descricao">
                <p>{props.descricao}</p>
            </div>



            <div className="techs">
                {
                    props.techs.map((tech: string, index: number) => {
                        return <span key={index}>{tech}</span>
                    })
                    // parseListaTechs().map((tech: string, index: number) => {
                    //     return <span key={index}>{tech}</span>
                    // })

                }
            </div>
        </div>




    )

}