import reducer from "./reducer";
import { createTodo, toggleTodo, filterTodos } from "./actions";


describe("CREATE_TODO", function () {
    test("creates a new todo", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.todos).toHaveLength(1);
        expect(state.todos[0]).toEqual({id: 1, done: false, text: "Test"});
    })

    test("updates nextId", function () {
        const initialState = {todos: [], nextId: 1}
        const state = reducer(initialState, createTodo("Test"));
        expect(state.nextId).toEqual(2);
    })
})

// describe("TOGGLE_TODO", function () {
//     test("toggles todos", function () {
//         const initialState = {todos: [] done: false}
//         const state = reducer(initialState, toggleTodo("Test"));
//         expect(state.todos).toEqual({done: true});
//     })
// })
//
// test('it decrements counter on button click', () => {
//     const component = mount(<App />);
//     component.find(".btn-decrement").simulate('click');
//     expect(component.state('score')).toEqual(-1);
//   })
