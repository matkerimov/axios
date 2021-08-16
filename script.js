// ------------------ 14/08/2021
// ------------------------------------- chalk
// ------------------------------------- axios

// const chalk = require('chalk');
// const axios = require('axios')
//
// axios("https://jsonplaceholder.typicode.com/users/2")
//     .then(result => console.log(result.data))
//     .catch(() => console.log("Error"))

// console.log(chalk.magenta('Hello world!'));
// console.log(chalk.cyan('Hello world!'));
// console.log(chalk.redBright('Hello world!'));
// console.log(chalk.yellowBright('Hello world!'));
// console.log(chalk.blueBright('Hello world!'));
// console.log(chalk.magentaBright('Hello world!'));
// console.log(chalk.cyanBright('Hello world!'));
// console.log(chalk.whiteBright('Hello world!'));

// const newContact = {
//     name: "Taalai",
//     phone: "0709-934-305"
// }

// axios.post("https://611675a31c592d0017bb7f05.mockapi.io/users", newContact)
//     .then(result => console.log(result.data))

// const update = {phone: "937996"}
// axios.put("https://611675a31c592d0017bb7f05.mockapi.io/users/2", update)
//     .then(result => console.log(result.data))

// axios.delete("https://611675a31c592d0017bb7f05.mockapi.io/users/2")
//     .then(result => console.log(result.data))

// ------------------------------------------------------------------------------
// const terminal = (num) =>{
//     let banknotes = [100, 50, 20, 5, 1]
//     let result = []
//     if (num > 0){
//         for (let i = 0; i < banknotes.length; i++){
//             let note = banknotes[i]
//             while(num - note >= 0){
//                 num -= note
//                 result.push(note)
//             }
//         }
//     }else {
//         console.log( "Please enter new num " )
//     }
//     return result
// }
// console.log(terminal(357))
// ------------------------------------------------------------------------------

// const getStarWars = async (id) =>{
//     const {data: person} = await axios(`https://swapi.dev/api/people/${id}`)
//
//
//     const allFilms = await Promise.all(person.films.map(async (link) => {
//         const {data:movie} =  await axios(link)
//         return movie
//     } ))
//     people.films = allFilms
// console.log(people)
//     console.log({...person, films: allFilms})
// }
// getStarWars(4)

// const people = {
//     name: 'John Doe',
//     age: 30
// }
// people.name = 'ivan'
// console.log(people)
// console.log({...people, name:'ivan'})
// const {name, age} = people
// console.log(name )

// const foo = async () =>{
//     const result =await axios("https://swapi.dev/api/people/4")
//     console.log(result.data)
// }
// foo()

// ------------------------------------------------------------------------------
// модульность нужна для разбиения большого приложения на маленькие файлы

import {sayGreeting} from "./greeting.js";
import {sum as boom, squire} from "./mathematic.js";

console.log(sayGreeting("ru"))
console.log(sayGreeting("en"))
console.log(boom(5, 10))
console.log(squire(10))
