const schedule = require("node-schedule"); // require node-schedule for schedule our event for particular time

const { items } = require("./items"); // require data, which have text and dateTime

const delayTime = (time) => new Promise((res) => setTimeout(res, time)); 

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

function scheduleItem(elem) {
  let now = new Date(elem);
 
  const job = schedule.scheduleJob(`*/${elem.text.length} * * * * *`, async function () {
    job.cancel();
    await delayTime(elem.text.length * 1000).then(() => {
      console.log(reverseString(elem.text));
    });
    
  });
}
items.forEach(async (elem) => {
  await scheduleItem(elem);
});
