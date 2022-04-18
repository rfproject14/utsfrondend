import React, { Component } from 'react';

class Laptop extends Component {
    render = () => {
        return (
            <h1>laptop ku warnanya {this.props.warna}</h1>
        )
    }
}

export default Laptop;