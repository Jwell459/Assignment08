//STEP 1
// fav_movies = [
//     "Nezha 2",
//     "Superman (2025)",
//     "KPop Demon Hunters",
//     "The Lord of the Rings: The Return of the King",
//     "Ratatouille"
// ]
// console.log(fav_movies[1])

//STEP 2
// movies = new Array(5)
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// console.log(movies[0])

//STEP 3
// movies = new Array(5)
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// console.log(movies[0])
// movies.splice(2, 0, "Predator: Killer of Killers")
// console.log(movies.length)

//STEP 4
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// delete movies[0]
// console.log(movies)

//STEP 5
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// for (let movie in movies) {
//     console.log(movies[movie])
// }

//STEP 6
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// for (let movie of movies) {
//     console.log(movie)
// }

//STEP 7
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// for (let movie of movies.sort()) {
//     console.log(movie)
// }

//STEP 8
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// leastFavMovies = ["Army of the Dead", "From Dusk Till Dawn", "The Happening"]

// console.log("Movies I like:")
// console.log('\n')
// for (let movie of movies) {
//     console.log(movie)
// }
// console.log('\n')
// console.log("Movies I regret watching:\n")
// console.log('\n')
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

//STEP 9
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// leastFavMovies = ["Army of the Dead", "From Dusk Till Dawn", "The Happening"]

// combinedMovies = movies.concat(leastFavMovies)
// for (movie of combinedMovies.sort().reverse())
//     console.log(movie)


//STEP 10
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// leastFavMovies = ["Army of the Dead", "From Dusk Till Dawn", "The Happening"]

// combinedMovies = movies.concat(leastFavMovies)
// console.log(combinedMovies.sort().reverse().pop())


//STEP 11
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// leastFavMovies = ["Army of the Dead", "From Dusk Till Dawn", "The Happening"]

// combinedMovies = movies.concat(leastFavMovies)
// console.log(combinedMovies.sort().reverse().shift())

//STEP 12
// movies = []
// movies[0] = "Nezha 2"
// movies[1] = "Superman (2025)"
// movies[2] = "KPop Demon Hunters"
// movies[3] = "The Lord of the Rings: The Return of the King"
// movies[4] = "Ratatouille "
// movies[5] = "Predator: Killer of Killers"
// movies[6] = "Rocky"

// leastFavMovies = ["Army of the Dead", "From Dusk Till Dawn", "The Happening"]

// combinedMovies = movies.concat(leastFavMovies)

// switchMovieIndices = []
// for (let movie of combinedMovies) {
//     for (let badMovie of leastFavMovies) {
//         if (movie == badMovie) {
//             switchMovieIndices.push(combinedMovies.indexOf(movie))
//         }
//     }
// }
// otherGoodMovies = ["Surfs Up", "The Thunderbolts", "Star Wars: A New Hope"]
// for (let index of switchMovieIndices) {
//     combinedMovies[index] = otherGoodMovies.pop()
// }
// console.log(combinedMovies)

//STEP 13
// movies = [["Nezha 2", 1], ["Rocky", 4], ["Superman (2025)", 2], ["KPop Demon Hunters", 3], ["Predator: Killer of Killers", 5]]
// for (let movie of movies) {
//     let title = movie.filter((name) => {
//         return typeof name === 'string'
//     })
//     console.log(title)
// }

//STEP 14
// employees = ["Zach", "John", "Allen", "Jessica", "Alex"]

// const showEmployees = (employees) => {
//     console.log("Employees:")
//     console.log("\n")
//     for (let employee of employees) {
//         console.log(employee.toUpperCase())
//     }
// }
// showEmployees(employees)

//STEP 15
function clearEmpty(array) {
    array = array.filter(Boolean)
    return array
}
testArray = [58, '', 'abcd', true, null, false, 0]
console.log(testArray)
console.log(clearEmpty(testArray))

//STEP 16
function getRand(array) {
    randIndex = Math.floor(Math.random() * array.length)
    return array[randIndex]
}
employees = ["Zach", "John", "Allen", "Jessica", "Alex"]
console.log(getRand(employees))

//STEP 17
function getMax(array) {
    max = -2147483648
    for (num of array) {
        if (num > max)
            max = num
    }
    return max
}
nums = [100, -500, 2, 122, 6]
console.log(getMax(nums))
