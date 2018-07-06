import React, { PureComponent } from 'react';


class Input extends PureComponent {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <input
                onChange={(e) => this.props.handleType(e)}
                value={this.props.value}
            >
            </input>
        )
    }
}

export default Input