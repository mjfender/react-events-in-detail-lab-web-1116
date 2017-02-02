import React from 'react'

class CoordinatesButton extends React.Component {

  constructor(){
    super()
    this.makeCoordinates = this.makeCoordinates.bind(this)
  }

  makeCoordinates(event) {
    var coordinates = []
    coordinates.push(event.clientX)
    coordinates.push(event.clientY)
    this.props.onReceiveCoordinates(coordinates)
  }

  render(){
    return(
        <button onClick={this.makeCoordinates}>Coords</button>
      )
  }

}

module.exports = CoordinatesButton;
