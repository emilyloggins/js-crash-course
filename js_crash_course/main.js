const Emily = {
    name: 'em',
    age: 28,
    pet: 'Cricket',
    hobbies: ['music', 'movies', 'painting']
}

const hobbies = ['music', 'movies', 'painting'];



const JSONExample = JSON.stringify(Emily);
console.log(JSONExample, "j");

function loop(x) {
    for (let i = 0; i == 'movies'; i++) {
        console.log(i);
    }
}

for (let x of Emily.hobbies) {
    if (x == 'movies') {
        console.log('movies');
    } else {
        console.log('not movies');
    }
}

Emily.hobbies.forEach(function (x) {
    console.log(x)
})

Emily.hobbies.forEach(x => {
    console.log("success")
})

hobbies.map(x => {
    return 'new'
}
);
const forEachArray = hobbies.map(x => {
    return x
}
);

console.log(hobbies, forEachArray)

const x = 10;
const color = x > 10 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('idk');
        break;
}

function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(1, 2)