//problem-1

const filterEvenNumbers = (nums: number[]): number[] => {

     return nums.filter((num) => num % 2 === 0)
}

//prolem-2

const reverseString = (strings: string): string => {
     return strings.split('').reverse().join('')
}

// problem-3

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
     if (typeof input === 'string') {
          return "String"
     } else {
          return "Number"
     }

}

//problem-04

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => {
     return obj[key]
}

//problem-05

interface Book {
     title: string,
     author: string,
     publishedYear: number
}

const toggleReadStatus = (books: Book): Book & { isRead: boolean } => {

     return {
          ...books,
          isRead: true
     }

}

// problem-06

class Person {
     name: string
     age: number
     constructor(name: string, age: number) {
          this.name = name;
          this.age = age;
     }

}

class Student extends Person {
     grade: string

     constructor(name: string, age: number, grade: string) {
          super(name, age);
          this.grade = grade;
     }

     getDetails() {
          return `Name:${this.name}, Age: ${this.age}, Grade: ${this.grade}`
     }
}


// problem-07

type numArray = number[]

const getIntersection = (a: numArray, b: numArray): numArray => {
     const commonNumber = a.filter((num) => b.includes(num))
     return commonNumber

}

