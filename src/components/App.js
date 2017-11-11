import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import TodoItem from './TodoItem'
import { FILTER, TYPE } from '../consts'

const Header = styled.h1``
const List = styled.ul`list-style-type: none;`

class App extends Component {
  render() {
    const { todos, updateFilter } = this.props

    return (
      <div>
        <Header>Planner</Header>
        {this._renderFilter(updateFilter)}
        {this._renderTodos(todos)}
      </div>
    )
  }

  _renderTodos(todos) {
    return (
      <List>
        {todos.map((todo, index) => (
          <li key={todo.get('id')}>
            <TodoItem index={index} />
          </li>
        ))}
      </List>
    )
  }

  _renderFilter(updateFilter) {
    return (
      <select onChange={updateFilter}>
        {FILTER.map((filter, index) => (
          <option key={index} value={filter}>
            {filter}
          </option>
        ))}
      </select>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.get('todos'),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilter: e => {
      const payload = e.target.value

      dispatch({
        type: TYPE.UPDATE_FILTER,
        payload,
      })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
