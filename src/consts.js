import { Record, List } from 'immutable'
import moment from 'moment'

export const TYPE = {
  ADD_TODO: 'ADD TODO',
  REMOVE_TODO: 'REMOVE TODO',
  UPDATE_TODO: 'UPDATE TODO',
  UPDATE_FILTER: 'UPDATE FILTER',
  UPDATE_DEADLINE_PICKER: 'UPDATE DEADLINE PICKER',
}
export const PRIORITY = ['Normal', 'High', 'Very high']
export const FILTER = ['Any', ...PRIORITY]

export const TodoRecord = Record({
  title: '',
  description: '',
  deadline: null,
  priority: PRIORITY[0],
  finished: null,
  id: null,
})

export const StateRecord = Record({
  todos: List([new TodoRecord({ id: moment() })]),
  filter: FILTER[0],
  deadlinePicker: null,
})
