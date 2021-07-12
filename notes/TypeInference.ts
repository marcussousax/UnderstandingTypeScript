/**
 * Type Inference
 *
 * When we initialize a variable with some value,
 * typescript will try to infer the data type
 *
 * Below are the JavaScript Core Types
 */
const number = 5
const phrase = 'Understanding TypeScript'
const printValue = true
const items = [1, 2, 3, '4', [5, 6]]
const me = {
  name: 'Marcus',
  age: 37,
  hobbies: ['Playing Music', 'Games', 'Read'],
}

for (const hobby of me.hobbies) {
  console.log(hobby.toLowerCase())
}

/**
 * Overriding Types
 */

const myself: {
  // Core Types
  name: string
  age: 37
  hobbies: string[]
  // This is custom type called Tuple
  role: [number, string]
} = {
  name: 'Marcus',
  age: 37,
  hobbies: ['Playing Music', 'Games', 'Read'],
  role: [2, 'author'],
}

// Even setting a fixed size, TypeScript can't handle array push,
// this will not throw an error
myself.role.push('admin')
