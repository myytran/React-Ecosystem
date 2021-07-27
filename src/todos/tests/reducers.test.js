import { expect } from 'chai'
import { todos } from '../reducers'

describe('the todos reducer', () => {
    it('adds a new todo when CREATE_TODO action is received', () => {
        //create dummy data so test would pass
        const fakeTodo = { text: 'hello', isCompleted: false };
        const fakeAction = {
            type: 'CREATE_TODO',
            payload: {
                todo: fakeTodo,
            }, 
        }
        const originalState = { isLoading: false, data: [] };

        const expected = {
            isLoading: false,
            data: [fakeTodo],
        }
        const actual = todos(originalState, fakeAction);

        expect(actual).to.deep.equal(expected);
    })
})