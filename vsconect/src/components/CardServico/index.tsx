import "./style.css"

export default function CardServico(props: any){
    return (
        <div className="servico">
            <div className="topo_servico">
                <h3>{props.atividade}</h3>
                <p>{props.valor}</p>
            </div>
            <div className="techs">
            {
                props.techs.map((tech: string,index: number) => {
                    return <span key={index}>{tech}</span>
                } )
            }
            
            </div>
        </div>
        
    )

}