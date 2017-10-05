import * as actions from './actions';
import * as types from './actions';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.CREATE_TODO,
      payload: text
    }
    expect(actions.createTodo(text)).toEqual(expectedAction)
  })
  it('should create an action to toggle todos', () => {
    const id = 1;
    const expectedAction = {
      type: types.TOGGLE_TODO,
      payload: id
    }
    expect(actions.toggleTodo(id)).toEqual(expectedAction)
  })
  it('should create an action to filter todos', () => {
    const filterType = 'all';
    const expectedAction = {
      type: types.FILTER_TODOS,
      payload: filterType
    }
    expect(actions.filterTodos(filterType)).toEqual(expectedAction)
  })
})
