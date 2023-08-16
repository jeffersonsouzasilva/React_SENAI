import { useState } from "react"
import CardDev from "../../components/CardDev"
import "./style.css"

export default function ListaDevs() {
    
    const [devs, setDevs] = useState <any[]> ([
        {
            img_perfil: "https://github.com/Thiago-Nascimento.png",
            nome: "Thiago Nascimento",
            email: "thiago@email.com",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            img_perfil: "https://github.com/JessicaSanto.png",
            nome: "Jessica Franzon",
            email: "jessica@email.com",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            img_perfil: "https://github.com/odirlei-assis.png",
            nome: "Odirlei Sabella",
            email: "odirlei@email.com",
            skills: ["HTML", "CSS", "ANGULAR"]
        },
        {
            img_perfil: "https://github.com/alexiamelhado18.png",
            nome: "Aléxia Vitória",
            email: "alexia@email.com",
            skills: ["PYTHON", "VUE", "REACT"]
        } 
    ]);

    const [skillDigitada, setSkillDigitada] = useState<string>("");

    const [listaDevsFiltrados, setListaDevsFiltrados] = useState<any[]>(devs);

    function buscarPorSkill(event: any) {
        event.preventDefault();

        const devsFiltrados = devs.filter((dev: any) => dev.skills.includes(skillDigitada.toLocaleUpperCase) )

        if(devsFiltrados.length === 0){
            alert("Nenhum desenvolvedor(a) encontrado com essa skill")
        }else{
            setListaDevsFiltrados(devsFiltrados)
        }
    }

    function retornoDevsGeral(event: any){
        if(event.target.value === ""){
            setListaDevsFiltrados(devs)
        }
        setSkillDigitada(event.target.value)
    }

    return (
        <>
            <main>
                <div className="container container_lista_devs">
                    <div className="lista_devs_conteudo">
                        <h1>Lista de Devs</h1>
                        <hr />
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar desenvolvedores</label>
                                <div className="campo-label">
                                    <input
                                        type="search"
                                        name="campo-busca"
                                        id="busca"
                                        placeholder="Buscar desenvolvedores por tecnologias..." onChange={retornoDevsGeral}
                                    />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {listaDevsFiltrados.map((dev: any, index: number) => {
                                    return <li>
                                        <CardDev 
                                        foto={dev.img_perfil}
                                        nome={dev.nome}
                                        email={dev.email}
                                        techs={dev.skills}
                                        />
                                    </li>
                                }
                                )}
                                {/* <li>
                                    <CardDev nome="Irineu" email="irineu@gmail.com"/>
                                </li>
                                <li>
                                    <CardDev nome="Jubileu" email="jubileu@gmail.com"/>
                                </li>
                                <li>
                                    <CardDev nome="Marilene" email="marilene@gmail.com"/>
                                </li> */}
                                {/* <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/Thiago-Nascimento.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Thiago Nascimento</h3>
                                                <p>thiago@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/JessicaSanto.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Jessica Franzon</h3>
                                                <p>jessica@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/odirlei-assis.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Odirlei Sabella</h3>
                                                <p>odirlei@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="dev">
                                        <div className="grupo_contato">
                                            <img src="https://github.com/alexiamelhado18.png" alt="" />
                                            <div className="contato_dev">
                                                <h3>Aléxia Vitória</h3>
                                                <p>alexia@email.com</p>
                                            </div>
                                        </div>
                                        <div className="techs">
                                            <span>HTML</span>
                                            <span>CSS</span>
                                            <span>React</span>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>


        </>
    )
}