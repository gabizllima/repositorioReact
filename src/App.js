import React from 'react';
import Sala from './components/sala'
import './App.css';
/*
Criar a tela "criar sala":
A tela conterá 10 salas dispostas num array de 2 linhas e 5 colunas.
Acima haverá um botão sincronizar.
Ao clicar em uma das salas, todas as das linhas acima serão preenchidas e
todas as salas à esquerda da mesma linha também serão preenchidas e alterarão
sua cor para azul.
Ao clicar no botão sincronizar as salas escolhidas terão a cor alterada para verde
*/
class App extends React.Component {
  state = {
    lista: [
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao",
      "corPadrao"
    ]
  }

  render() {
    const { lista } = this.state;
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand">
            <font>Criar Salas</font>
          </a>
        </nav>
      <div style={styles.body} >
        <div style={styles.divButtonSincronizar}>
          <button className="btn btn-outline-success btn-lg" onClick={() => this.sincronizarCores()}>
            <svg class="bi bi-arrow-repeat" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M2.854 7.146a.5.5 0 00-.708 0l-2 2a.5.5 0 10.708.708L2.5 8.207l1.646 1.647a.5.5 0 00.708-.708l-2-2zm13-1a.5.5 0 00-.708 0L13.5 7.793l-1.646-1.647a.5.5 0 00-.708.708l2 2a.5.5 0 00.708 0l2-2a.5.5 0 000-.708z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M8 3a4.995 4.995 0 00-4.192 2.273.5.5 0 01-.837-.546A6 6 0 0114 8a.5.5 0 01-1.001 0 5 5 0 00-5-5zM2.5 7.5A.5.5 0 013 8a5 5 0 009.192 2.727.5.5 0 11.837.546A6 6 0 012 8a.5.5 0 01.501-.5z" clip-rule="evenodd"/>
              </svg> 
            Sincronizar
          </button>
        </div>
        <div className="container">
          <div className="row" style={styles.linha} >
            <Sala className="col-sm" cor={lista[0]} mudar={this.mudarCor.bind(this)} num="1" />
            <Sala className="col-sm" cor={lista[1]} mudar={this.mudarCor.bind(this)} num="2" />
            <Sala className="col-sm" cor={lista[2]} mudar={this.mudarCor.bind(this)} num="3" />
            <Sala className="col-sm" cor={lista[3]} mudar={this.mudarCor.bind(this)} num="4" />
            <Sala className="col-sm" cor={lista[4]} mudar={this.mudarCor.bind(this)} num="5" />
          </div>
          <div className="row" style={styles.linha} >
            <Sala className="col-sm" cor={lista[5]} mudar={this.mudarCor.bind(this)} num="6" />
            <Sala className="col-sm" cor={lista[6]} mudar={this.mudarCor.bind(this)} num="7" />
            <Sala className="col-sm" cor={lista[7]} mudar={this.mudarCor.bind(this)} num="8" />
            <Sala className="col-sm" cor={lista[8]} mudar={this.mudarCor.bind(this)} num="9" />
            <Sala className="col-sm" cor={lista[9]} mudar={this.mudarCor.bind(this)} num="10" />
          </div>
        </div>
      </div>
  </div>
    );
  }

  mudarCor(numero) {
    let auxLista = [];
    this.state.lista.filter((value, key) => {
      if ((numero - 1) >= key) {
        auxLista.push("corAzul");
        return;
      }
      auxLista.push("corPadrao")
    })
    this.setState({ lista: auxLista });
  }

  sincronizarCores() {
    let auxLista = [];
    this.state.lista.filter((value, key) => {
      if (value == "corAzul") {
        auxLista.push("corVerde");
        return;
      }
      auxLista.push("corPadrao")
    })
    this.setState({ lista: auxLista });
  }
}
const styles = {
  body: {
      margin: "15px",
    },
     divButtonSincronizar: {
      display: "flex",
      justifyContent: "center",
      margin: "45px",
    },
    linha: {
      justifyContent: "center",
      display: "flex",
      flexDirection: "row"
    }, 
};

export default App;
