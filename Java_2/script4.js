// function add(a,b) {
//     const sum = a + b;
//     return sum;
// }
// let result = add(2,3);
// console.log(result);
// console.log(add(10,20)*3)

// function check() {
//     return "done";
//     console.log("Will this print");
// }
// console.log(check())

// function introduce(name,city) {
//     console.log(`${name} lives in ${city}`);
// }
// introduce("Ajay") // If city not given then it is equals to undefined

// function introduce(name,city) {
//     console.log(`${name} lives in ${city}`);
// }
// introduce("Ajay","Pune","India") // If their are more than one city then it takes first value

function introduce(name = "Garv", city = "Bharatpur") {
    console.log(`${name} lives in ${city}`)
}
introduce();
introduce("Nidhish","Village")
introduce(undefined,"City")
introduce("undefined","City")