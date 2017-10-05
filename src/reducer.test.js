import reducer from "./reducer";
// import { createTodo, toggleTodo, filterTodos } from "./actions";
// import * as actions from "./actions";
import * as types from './actions';
import * as actions from './actions';


describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, actions.createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })
})


    describe("TOGGLE_TODO", function () {
      test('toggle a todo', function(){
        const initialState = {todos: [{id: 1, done: false, text: "Test"}]};
        const state = reducer(initialState, actions.toggleTodo(1));
        expect(state.todos[0]).toEqual({id: 1, done: true, text: "Test"});
      })
    });

    describe('FILTER_TODOS', () => {
      test('filters todo based on filterType', () => {
        const initialState = {todos: [{id: 1, done: true, text: 'Test'}], nextId: 2, filter: 'all'};
        const state = reducer(initialState, actions.filterTodos('completed'));
        expect(state.filter).toEqual('completed')
      })
    })
