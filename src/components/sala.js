import React from 'react';

class Sala extends React.Component {
    render() {
        return <div style={styles.container} >
            <button style={styles.buttonMais} className={this.props.cor} onClick={this.pegarClick.bind(this)}>
                <svg class="bi bi-plus-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/>
                </svg>
            </button>
        </div>
    }

    pegarClick() {
        this.props.mudar(this.props.num);
    }
}

const styles = {
    container: {
        width: "150px",
        height: "150px",
        display: "grid",
    },
    buttonMais: { margin: "10px", }
};
export default Sala;