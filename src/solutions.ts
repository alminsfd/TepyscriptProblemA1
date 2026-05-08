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
     } else if (typeof input === 'number') {
          return "Number"
     } else {
          return "Give only string or number"
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

const toggleReadStatus = (books: Book) => {

     return {
          ...books,
          isRead: true
     }

}