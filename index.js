// // Code your solution in this file!

// const returnFirstTwoDrivers = function (drivers){
//     return drivers.slice (0, 2);

// }
// const returnLastTWoDrivers = function (drivers){
//     return drivers.slice(2);

// }

// const selectDrivers = [returnFirstTWoDrivers , returnLastTwoDrivers];

// const createFareMultiplier = function(fareMultiplier){
//     return function (fare){
//         return fare + fareMultiplier

//     }
// }

// const fareDoubler = createFareMultiplier (2)
// const fareTripler = createFareMultipler (3)

// const selectDifferentDrivers = function (drivers, returnDrivers){
//     return returnDrivers (drivers);
// }






// const returnFirstTWoDrivers = function (drivers){
//      return drivers.slice (0,  2)
     
// }


const returnFirstTwoDrivers = function (drivers){
     return drivers.slice (0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(0 -2)
}


let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]



function createFareMultiplier(integer) {
    return function name() {
        let number = 5
        return integer * number
    }
}







const fareDoubler = function(name){

    return name * 2
}



const fareTripler = function (name) {
    return name * 3
}

function selectDifferentDrivers(drivers, returnFirstTWoDrivers) {
     return returnFirstTWoDrivers(drivers)
     
}





