/* A typical car can hold four passengers and one driver, allowing
five people to travel around. Given n number of people, return how
many cars are needed to seat everyone comfortably.*/

function numVehicles(numOfPeople) {
    var carCapacity = 5
    var vehicleNum = numOfPeople / carCapacity

    if (numOfPeople % carCapacity > 0) {
        vehicleNum += 1
    }
    return parseInt(vehicleNum)
}
console.log(numVehicles(21))