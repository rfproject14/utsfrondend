import React, { Component } from "react";

class Statefull extends Component {

    state = {
        warna: "rak 1 hitam sisa 5 barang"
    }

    gantiWarna = () => {
        this.setState({
            warna: "rak 2 ungu sisa 8 barang"
        });
    }

    gantiWarna2 = () => {
        this.setState({
            warna: "rak 3 biru sisa 2 barang"
        });
    }

    render = () => {
        return (
            <div>
                <h1>warna laptop yang ada pada {this.state.warna}</h1>
                <button onClick={() => this.gantiWarna()}>Ubah jadi ungu</button>
                <br />
                <button onClick={() => this.gantiWarna2()}>Ubah jadi biru</button>
            </div>
        )
    }
}

export default Statefull;