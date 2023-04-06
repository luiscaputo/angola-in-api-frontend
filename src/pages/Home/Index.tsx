import { Link } from "react-router-dom";
import './index.css';

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Transformando Angola em uma API</h1>
                    <p>
                        &nbsp; Este projeto experimental tem como objetivo centralizar e disponibilizar endpoints modernos com baixíssima latência independente de sua fonte, com informações Relevantes cá em Angola.
                    </p>
                    <div className="form-group mb-3">
                        <Link to={'https://o-me-api.onrender.com/v1/api-docs/'}>
                            <button className="__tarter">Começar a Explorar</button>
                        </Link>
                    </div>

                    <div className="form-control">
                        <h2>Objectivo</h2>
                        <p className="__why">
                            &nbsp; Facilitar os programadores a obterem informações oficiais da banca, validações de números nacionais, bilhete de identidade, informações de localização nacional entre outros.
                        </p>
                    </div>

                    <div className="form-group">
                        <h2 className="">Porquê o Angola In API</h2>
                        <p className="__why"> &nbsp; O Angola In API é uma iniciativa de <strong><i>Luís Caputo</i></strong>, desenvolvedor Fullstack residente em Angola, feita de Angolano Para Angolanos e não só, com finalidade de oferecer acesso a informações em formato Programáticos | <b>APIS</b> cujo o mesmo é essencial para a comunicação entre sistemas, informações como listagem das provincias de Angola, validação de dados e documentos de identificação. Nessa linha de ideias, o objetivo central desse projeto é facilitar a consulta de todos esses dodos por aqui em formato de API.</p>
                    </div>

                    <div className="form-group">
                        <h2>Status Atual</h2>
                        <p>Em desenvolvimento..</p>
                    </div>

                    <div className="form-control">
                        <h2>Acesse Nossos Repositórios no GITHUB</h2>
                        <div className="row">
                            
                                    <p>
                                        <Link to={'https://github.com/luiscaputo/angola-in-api-backend'}>
                                            <button className="__tarter">Repo Backend</button>
                                        </Link>
                                    </p>
                                    <p>
                                        <Link to={'https://github.com/luiscaputo/angola-in-api-frontend'}>
                                            <button className="__tarter">Repo Frontend</button>
                                        </Link>
                                    </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}