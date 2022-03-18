const schedule = require("node-schedule"); // require node-schedule for schedule our event for particular time

const { items } = require("./items"); // require data, which have text and dateTime

const delayTime = (time) => new Promise((res) => setTimeout(res, time));  // this is delayTime Function for delay the process for a particular time with the help of SetTimeout


// --------Reverse Function-------------//
function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

//--------------------------------------//



//--------ScheduleItem Function-------------//

// It take the element({text: TextOne, dateTime: 2022-03-18 06:10:00.000}) one by one and pass it to the function delayTime and delayTime pass the element to  reverseString Function and wait for returning the output from it.

function scheduleItem(elem) {
//   let now = new Date(elem);
 
  const job = schedule.scheduleJob(`*/${elem.text.length} * * * * *`, async function () {
    job.cancel(); // cancel the job after all elements will execute
    await delayTime(elem.text.length * 1000).then(() => {
      console.log(reverseString(elem.text)); // reverseString output come here
    });
    
  });
}

// --------Apply forEach on item data--------//
items.forEach(async (elem) => {
  await scheduleItem(elem);   // pass each element to the scheduleItem function for further operations 
});
