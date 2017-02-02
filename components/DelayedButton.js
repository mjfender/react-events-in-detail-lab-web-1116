import React from 'react'

class DelayedButton extends React.Component {

  constructor(props){
    super()
    this.handleDelay = this.handleDelay.bind(this)
  }

  handleDelay(event){
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
 
  }


  render(){
    return(
        <button onClick={this.handleDelay}> Delayed Reaction </button>
      )
  }

}

module.exports = DelayedButton;
