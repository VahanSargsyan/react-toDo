import React, { PureComponent } from 'react';
import Input from './Input';
import List from './List'
import ReactDOM from 'react-dom';
import './index.css';






class ToDo extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            todos: {
                active: [
                    {
                        key: 'key2',
                        header: 'my header',
                        text: 'bllllah blahhhblahhh'
                    },
                    {
                        key: 'key1',
                        header: 'my second header',
                        text: 'bllllah blahhhblahhh asdasd asdasdds'
                    }
                ],
                complited: []
            },
            inputValue: 'value'
        }
    }
    handleType = (e) => {
        console.log(e);
        this.setState({ toDoText: e.target.value });
    }

    render() {
        return (
            <div>
                <Input
                    value={this.state.inputValue}
                />
                <List
                    toDos={this.state.todos}
                    handleType={this.handleType}
                />

            </div>

        )
    }
}

// =============================================

ReactDOM.render(
    <ToDo />,
    document.querySelector('#root')
);

