import React, { Component } from 'react'
import { PRIORITY } from '../consts'

class PrioritySelector extends Component {
  render() {
    const { onChange } = this.props

    return (
      <select onChange={onChange}>
        {PRIORITY.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    )
  }
}

export default PrioritySelector
