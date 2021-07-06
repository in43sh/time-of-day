let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let timeOfDay = ['night', 'morning', 'afternoon', 'evening'];

console.log(document.getElementById("body").style.backgroundImage);
document.getElementById("body").style.backgroundImage = "url(" + showImage() + ")";
console.log(document.getElementById("body").style.backgroundImage);
document.getElementById("show_time").innerHTML = showTime();
document.getElementById("show_day_of_the_week").innerHTML = showDayOfTheWeek(days)
document.getElementById("show_year").innerHTML = showCopyright();
document.getElementById("show_custom_message").innerHTML = showCustomMessage(timeOfDay);
document.getElementById("show_custom_message").style.color = getColor();
// document.getElementById("show_image").src = showImage();

function showTime() {
    let d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0' + d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0' + d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am';
    // return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
    return hours + ':' + minutes + ampm;
}

function showDayOfTheWeek(days) {
    let d = new Date()
    console.log('====>');
    // console.log(days[0]);
    console.log('=>', days);
    return days[d.getDay()];
}

function showCustomMessage(timeOfDay) {
    return 'Good ' + timeOfDay[getTimeOfDay()];
}

function showImage() {
    images = [
        "./images/night.jpeg",
        "./images/morning.jpeg",
        "./images/afternoon.jpeg",
        "./images/evening.jpeg"
    ]
    let imageOfThisTime = images[getTimeOfDay()];
    console.log("imageOfThisTime => ", imageOfThisTime);
    return imageOfThisTime
}

// let showCustomMessage = () => {
//     getTimeOfDay()
// }

// function setTextColor() {
//     document.getElementById("show_custom_message").style.color = getColor();
// }

function getColor() {
    let timeOfDay = getTimeOfDay();
    // alert(timeOfDay)
    console.log(timeOfDay);
    switch (timeOfDay) {
        case 0:
            return 'black';
        case 1:
            return 'yellow';
        case 2:
            return 'red';
        case 3:
            return 'blue';
    }
}

// shows if it morning, afternoon, evening, night
function getTimeOfDay() {
    let d = new Date()
    let hours = d.getHours().toString()
    console.log(hours);
    let timeOfDay = '';
    console.log(hours);
    switch (hours) {
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
            timeOfDay = 1;
            console.log('morning');
            break;
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
            timeOfDay = 2;
            console.log('afternoon');
            break;
        case '18':
        case '19':
        case '20':
        case '21':
        case '22':
            timeOfDay = 3;
            console.log('evening');
            break;
        case '23':
            case '24':
            case '1':
            case '2':
            case '3':
            case '4':
                timeOfDay = 0;
                console.log('night');
                break;
    }
    console.log(hours);
    return timeOfDay
}

function showCopyright() {
    let d = new Date(),
    year = d.getFullYear()
    return '© 2015-' + year;
}

// function getDayOfWeek() {
//     let d = new Date()
//     console.log(d.getDay());
//     console.log(d.getHours());
//     console.log(d.getHours());
//     return d;
// }

// alert("here");