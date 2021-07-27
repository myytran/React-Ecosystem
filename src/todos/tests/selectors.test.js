import { expect } from 'chai'
import { get } from 'fetch-mock';
import { getCompletedTodos } from '../selectors'

describe('The get completed Todos selector', () => {
    it('returns only the completed todos', () => {
        const fakeTodos = [{
            text: 'Say Hello',
            isCompleted: true,
        }, {
            text: 'Say Goodbye',
            isCompleted: false,
        }, {
            text: 'Climb Mount Everest',
            isCompleted: false,
        }];
        //only return isCompleted is true
        const expected = [{
            text: 'Say Hello',
            isCompleted: true,
        }];
        const actual = getCompletedTodos.resultFunc(fakeTodos);
        expect(actual).to.deep.equal(expected);
    })
})