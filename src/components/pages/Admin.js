import React, {Component} from 'react';
import Messages from '../common/Messages';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }
    
    componentDidMount() {
        fetch("http://localhost:8080/messages")
        .then(res => res.json())
        .then((data) => {
            this.setState({messages: data})
            console.log(data);
        })
        .catch(console.log())
    }

    render() {
        return (
            <Messages messages={this.state.messages} />
        );
    }
}

export default Admin;