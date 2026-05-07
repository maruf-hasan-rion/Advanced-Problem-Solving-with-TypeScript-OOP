// Solution-01
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Solution-02
function reverseString(str: string): string {
  return str.split("").reverse().join("");
}
reverseString("typescript");

// Solution-03
type StringOrNumber = "String" | "Number";

function checkType(value: unknown): StringOrNumber {
  if (typeof value === "string") {
    return "String";
  } else if (typeof value === "number") {
    return "Number";
  }
  throw new Error("Unexpected type");
}

checkType("Hello");
checkType(42);

// Solution-04
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Solution-05
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return { ...book, isRead: true };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
toggleReadStatus(myBook);

// Solution-06
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
student.getDetails();

// Solution-07
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
