import React, { Component } from 'react';
import './style/appPost.css';
import requisicao from './Api'


class AppPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nome: '',
            resgate: '',
            icone: '',
            descricao: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        requisicao.post("api/recompensas/adicionar", this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {nome, resgate, descricao, icone} = this.state
        return(
            <div id="page-form">
                <h1>Cadastre sua recompensa</h1>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="nome" value={nome} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="descricao" value={descricao} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="icone" value={icone} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="date" name="resgate" value={resgate} onChange={this.changeHandler} />
                    </div>
                    <div id="container-btn">
                    <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default AppPost
