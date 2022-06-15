// code your solution here
function razzle() {
    console.log("You've been razzled");
}

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`
}

function wrapAdjective(str) {
    return function(name =  "special") {
        return `You are ${str}${name}${str}!`
    }
}
