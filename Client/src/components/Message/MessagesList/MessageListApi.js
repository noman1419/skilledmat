import userImage1 from './Assets/img1.png'
import userImage2 from './Assets/img2.jpeg'
import userImage3 from './Assets/img3.jpeg'

let currentDate = new Date();
let time = currentDate.getHours() + ":" + currentDate.getMinutes();
console.log(time);

const Data = [
    {
        id: 1,
        userImage: userImage1,
        name: "Aziz Ur Rehman",
        unseen: 5,
        time: time
    },
    {
        id: 2,
        userImage: userImage2,
        name: "Hamza faham",
        unseen: 0,
        time: time
    }, {
        id: 3,
        userImage: userImage3,
        name: "Musawar Bilal",
        unseen: 22,
        time: time
    }, {
        id: 4,
        userImage: userImage2,
        name: "Hamza faham",
        unseen: 0,
        time: time
    },
]

export default Data;