import { useEffect, useState } from "react"
import { CardServicos } from "../../components/CardServico";
import api from "../../utils/api";
import "./style.css"


export default function ListaServicos() {

    const [servicos, setServicos] = useState<any[]>([])

    const[tituloDigitado, setTituloDigitado] = useState<string>("");

    const[listaVagaFiltrada, setListaVagaFiltrada] = useState<any[]>(servicos);

    useEffect(() => {
        document.title = "VSConnect - Lista Servicos"
        listaDeServicos()
    }, [])

    function buscarPorVagas(event: any){
        event.preventDefault();

        const vagaFiltrada = servicos.filter((servico: any) => servico.techs.includes(tituloDigitado.toLocaleUpperCase()));

        if(vagaFiltrada.length === 0 ){
            alert("Nenhuma vaga encontrada")
        }else{
            setListaVagaFiltrada(vagaFiltrada)
        }
    }

    function retornoVagasGeral(event: any){
        if(event.target.value === ""){
            setListaVagaFiltrada(servicos)
        }
        setTituloDigitado(event.target.value)

    }

    function listaDeServicos(){
        api.get("servicos").then((response: any) => {
            console.log(response.data)
            setServicos(response.data)
            console.log("Cheguei aqui!")
        })
    }

    return (
        <main id="lista-servicos">
            <div className="container container_lista_servicos">
                <div className="lista_servicos_conteudo">
                    <h1>Lista de Serviços</h1>
                    <hr/>
                        <form method="post">
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..."/>
                                        <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {servicos.map((servico: any, index: number) => {
                                    return <li key={index}>
                                       <CardServicos
                                        titulo={servico.nome}
                                        valor={servico.valor}
                                        descricao={servico.descricao}
                                        techs={servico.techs}
                                        />     

                                    </li>
                                }
                                )}
                                
                            </ul>
                        </div>
                </div>
            </div>
        </main>
        
    )
}