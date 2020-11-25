import React, { Component } from 'react';
import requisicao from './Api'
import mascoteIcon from './assets/mascote-icon.png';
import logo from './assets/img.svg';

import './style/appGet.css';


export default class App extends Component {
    

    state = {
        dados: []
    }

    //chamado imediatamente ap�s alguma atualiza��o ocorrer
        async componentDidMount() {
        const retorno = await requisicao.get("api/recompensas");
        this.setState({ dados: retorno.data });
    }

    

    render() {
        const { dados } = this.state;
        return (
            <>
            <div className="container">
                  
                        <h1>Recompensas</h1>
            
            </div>       
                <div className="container-body">
                    <div class="lista-recompensas">   

                    {dados.map(recompensa => (
                         <div className="card-content">
                        <h3>Recompensa #1</h3>
                                <img  src={logo} alt="Card image cap" />
                          <div className="card-body">
                            <div className="id-content">ID: 12122121</div>       
                                <h4>Recompensa de participação</h4>

                            <div className="container-resgate">resgate</div>
                            <div><p>teste de recompensas que vai apresentar aqui é isso, se ta ligado que é nóis, mas tu vai ver que tu é vc e eu sou ele, e nós eles</p></div>
                         </div>
                        </div>
                    )
                    )
                    }         
                    </div>

                    

                    <div className="container-img">
                            <img src={mascoteIcon} alt=""/>
                    </div>    
                </div>
            </>
            );
            
    }

}
 {/* {console.log(dados)}
                {dados.map(recompensa => (
                    <div class="lista">
                        <Card>
                        <CardImg top width="100%" src={logo} alt="Card image cap" />
                        <CardBody>
                        <CardSubtitle tag="h6" className="mb-2 text-muted">ID: {recompensa.Id}</CardSubtitle>
                            <CardTitle tag="h5">{recompensa.Nome}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">{recompensa.Resgate}</CardSubtitle>
                            <CardText><p>{recompensa.Descricao}</p></CardText>
                        </CardBody>
                        </Card>
                    </div> */}