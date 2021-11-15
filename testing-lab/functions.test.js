const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions.js')

test('returnTwo returns 2', () => expect(returnTwo()).toEqual(2))

test('greeting equal Hello,James', ()=> expect(greeting('James')).toEqual('Hello, James.'))

test('greeting equal Hello,Jill', ()=> expect(greeting('Jill')).toEqual('Hello, Jill.'))

test('add 1+2 = 3', () => expect(add(1,2)).toEqual(3))
test('add 5+9 = 14', () => expect(add(5,9)).toEqual(14))

describe('Math functions test', () => {
    test('multiply 1*2 = 2', () => expect(multiply(1,2)).toEqual(2))

    test('divide 8/2 = 4', () => expect(divide(8,2)).toEqual(4))

    test('subtract 8-2 = 6', () => expect(subtract(8,2)).toEqual(6))
})