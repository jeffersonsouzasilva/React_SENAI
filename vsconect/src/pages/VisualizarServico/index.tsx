import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import api from "../../utils/api";



//estilização
import "./style.css";

//Componente
function VisualizarServico() {


    const { idServicos } = useParams();
    //nome
    //valor
    //descricao
    //techs
    const [nome, setNome] = useState<string>("")
    const [valor, setValor] = useState<string>("")
    const [descricao, setDescricao] = useState<string>("")
    const [techs, setTechs] = useState<string[]>([])

    useEffect(() => {
        document.title = "Pagina de Servicos VSConnect"

        buscarServicoPorId()

    }, [])


    function buscarServicoPorId(){
        api.get("servicos/" + idServicos).then((response: any) => {

            setNome(response.data.nome);
            setValor(response.data.valor);
            setDescricao(response.data.descricao);
            setTechs(response.data.techs)
        }).catch((error) => {
            console.log(error)
        })



    }





    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>{valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
                            techs.map((skill: any, index: number) => {
                                return <span key={index}>{ skill }</span>
                            })


                        }
                       
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;