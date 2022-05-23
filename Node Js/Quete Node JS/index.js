const id = require('./information')
const userInfo = require ('./information')

const cowsay = require('cowsay');

console.log(cowsay.say({
    text:`Hello, I am ${userInfo.name} from campus ${userInfo.campus}!`,
    e : "oO",
    T : "U "
}))


