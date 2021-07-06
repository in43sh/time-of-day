document.getElementById("show_time").innerHTML = showTime();
document.getElementById("show_day_of_the_week").innerHTML = showDayOfTheWeek()
document.getElementById("show_year").innerHTML = showCopyright();
document.getElementById("show_custom_message").innerHTML = showCustomMessage();
document.getElementById("show_custom_message").style.color = getColor();

function showTime() {
    let d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    // months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    // return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
    return days[d.getDay()]+' '+hours+':'+minutes+ampm;
}

function showDayOfTheWeek() {
    let d = new Date(),
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    return days[d.getDay()];
}

function showCustomMessage() {
    return 'Good ' + getTimeOfDay()
}

// let showCustomMessage = () => {
//     getTimeOfDay()
// }

// function setTextColor() {
//     document.getElementById("show_custom_message").style.color = getColor();
// }

function getColor() {
    let timeOfDay = getTimeOfDay();
    alert(timeOfDay)
    console.log(timeOfDay);
    switch (timeOfDay) {
        case 'night':
            return 'yellow';
        case 'morning':
            return 'red';
        case 'afternoon':
            return 'blue';
        case 'evening':
            return 'gray';
    }
}

// shows if it morning, afternoon, evening or night
function getTimeOfDay() {
    let d = new Date()
    let hours = d.getHours().toString()
    console.log(hours);
    let timeOfDay = '';
    console.log(hours);
    switch (hours) {
        case '23':
        case '24':
        case '1':
        case '2':
        case '3':
        case '4':
            timeOfDay = 'night';
            console.log('night');
            break;
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '10':
        case '11':
            timeOfDay = ('morning');
            console.log('morning');
            break;
        case '12':
        case '13':
        case '14':
        case '15':
        case '16':
        case '17':
            timeOfDay.log('afternoon');
            console.log('afternoon');
            break;
        case '18':
        case '19':
        case '20':
        case '21':
        case '22':
            timeOfDay.log('evening');
            console.log('evening');
            break;
    }
    console.log(hours);
    return timeOfDay
}

function showCopyright() {
    let d = new Date(),
    year = d.getFullYear()
    return year;
}

// function getDayOfWeek() {
//     let d = new Date()
//     console.log(d.getDay());
//     console.log(d.getHours());
//     console.log(d.getHours());
//     return d;
// }

// alert("here");