let age: number;

age = 8;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person = { name: string; age: number };

let person: Person;

person = { name: 'Max', age: 32 };

// person = { isEmployee: true };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 123;

// Function & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array];
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringsArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');
// stringsArray[0].split('');
