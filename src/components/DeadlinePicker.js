import React, { Component } from 'react'
import Datetime from 'react-datetime'

class DeadlinePicker extends Component {
  render() {
    const { onChange, show, onClick, value } = this.props

    return show ? (
      <Datetime onChange={onChange} value={value} />
    ) : (
      <button onClick={onClick}>Deadline</button>
    )
  }
}

export default DeadlinePicker
