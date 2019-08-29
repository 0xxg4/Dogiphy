import React from 'react';

class DogButton extends React.Component {
    constructor() {
        super();
        this.state = { term: 'dogs' }
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onTermChange(term);
    } 

    render() {
        return (
            <div className="btn">
                <input type="button" value="Show me the dogs" onClick={event => this.onInputChange(event.target.value)}  />
            </div>
        );
    }
}

export default DogButton;
