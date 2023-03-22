// let myTodos = { 
//     'day' : "Monday",
//     'meetings' : 0,
//     'meetDone' : 0,

//     'addMetting' : function(){
//         console.log('hey um a function')
//     }
// }
// myTodos.addMetting();


// let myTodos1 = { 
//     'day' : "Tuesday",
//     'meetings' : 0,
//     'meetDone' : 0,

//     'addMetting' : function(num){
//         this.meetings = this.meetings + num
//         return ` you have ${this.meetings} meetings today`
//     }
// }
// console.log(myTodos1.addMetting(4));

let myTodos2 = { 
    'day' : "Tuesday",
    'meetings' : 0,
    'meetDone' : 0,

    'addMeeting' :  function(num){
        this.meetings = this.meetings + num
        return ` you have ${this.meetings} meetings today`
       
    },
    'meetingDone': function(num){
        this.meetDone = this.meetDone + num
        return ` you have ${this.meetDone} meetings today`
    },
    'daySchedule' : function(){
        console.log(this)
    }
}
console.log(myTodos2.addMeeting(4));
console.log(myTodos2.meetingDone(2));
myTodos2.daySchedule();
