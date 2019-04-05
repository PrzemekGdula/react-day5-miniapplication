import React from 'react'

class AddUser extends React.Component {
    state = {
        name: '',
        email: '',
        avatar: '',
    }

    inputChangeHandler = (event, statePropName) => this.setState({
        [statePropName]: event.target.value
    })

    render() {
        return (
            <div>
                <input
                    value={this.state.name}
                    onChange={(event) => this.inputChangeHandler(event, 'name')}
                />
                <input
                    value={this.state.email}
                    onChange={(event) => this.inputChangeHandler(event, 'email')}
                />
                <input
                    value={this.state.avatar}
                    onChange={(event) => this.inputChangeHandler(event, 'avatar')}
                />
                <button
                    onClick={() => { }}
                />
            </div>
        )
    }
}
export default AddUser