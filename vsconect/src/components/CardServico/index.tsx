import "./style.css"


export function CardServicos(props: any) {

    return (


        <div className="servico">
            <div className="topo_servico">
                <h3>{props.titulo}</h3>
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

                }
            </div>
        </div>




    )

}