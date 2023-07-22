// Code your solutions in this file





function writeCards(names, message) {
    let count = 0
    let thankYou = []
    while (names.length > count) {
        thankYou[count] = `Thank you, ${names[count]}, for the wonderful ${message} gift!`
        count++

    }
    return thankYou


}



function countDown(number) {
    let count = 0
    while (number >= count) {
        console.log(number - count)
        count++
    }

}