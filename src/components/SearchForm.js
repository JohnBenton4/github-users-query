import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        const serverResponse = this.props.handleSubmit(this.state.username);
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse);
        });
    }

    _handleChange = (event) => {
        event.preventDefault();
        const serverResponse = this.props.handleChange(this.state.username);
        this.setState({
            serverResponse
        }, () => {
            console.log(serverResponse);
        });
    }


}