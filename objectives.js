const person = {
    name: "Tammy",
    age: "39",
};
console.log(person.name)
let day = 'Saturday';
let alarm = '';

let alarmMessages = {
    weekendAlarm: 'no alarm needed',
    weekdayAlarm: 'get up at 7am'
}

if(day === 'Saturday' || day === 'Sunday'){
    alarm = alarmMessages.weekendAlarm
} else {
    alarm = alarmMessages.weekdayAlarm
}
console.log(alarm)