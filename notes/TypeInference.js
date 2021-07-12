"use strict";
/**
 * Type Inference
 *
 * When we initialize a variable with some value,
 * typescript will try to infer the data type
 *
 * Below are the JavaScript Core Types
 */
var number = 5;
var phrase = 'Understanding TypeScript';
var printValue = true;
var items = [1, 2, 3, '4', [5, 6]];
var me = {
    name: 'Marcus',
    age: 37,
    hobbies: ['Playing Music', 'Games', 'Read'],
};
for (var _i = 0, _a = me.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toLowerCase());
}
/**
 * Overriding Types
 */
var myself = {
    name: 'Marcus',
    age: 37,
    hobbies: ['Playing Music', 'Games', 'Read'],
    role: [2, 'author'],
};
// Even setting a fixed size, TypeScript can't handle array push,
// this will not throw an error
myself.role.push('admin');
