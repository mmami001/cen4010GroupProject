import React from 'react'

class Toggle extends React.Component {
    state = {
        on: false,
    }

    toggle = () => {
      this.setState({
        on: !this.state.on,
      })  
    }

    render() {
        return (
            <div className = "review-button">
                {this.state.on && this.props.children}
                <button onClick={this.toggle}>Create a customer review</button>
            </div>
        )
    }
}

export default Toggle
