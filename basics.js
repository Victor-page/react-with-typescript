var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 8;
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
var hobbies;
hobbies = ['Sports', 'Cooking'];
var person;
person = { name: 'Max', age: 32 };
// person = { isEmployee: true };
var people;
// Type inference
var course = 'React - The Complete Guide';
course = 123;
// Function & types
function add(a, b) {
    return a + b;
}
function printOutput(value) {
    console.log(value);
}
// Generics
var insertAtBeginning = function (array, value) { return __spreadArray([value], array, true); };
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
