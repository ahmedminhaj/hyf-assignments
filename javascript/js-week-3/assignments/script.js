console.log("----warmup 1----")
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
// const result = names.filter((name) => name !== nameToRemove);
const index = names.indexOf(nameToRemove);
names.splice(index, 1);
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

//******************************************************************
console.log("----warmup 2----")
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const findTravelTime = (travelDetails) => {
    const {speed, destinationDistance} = travelDetails;
    const totalTime = destinationDistance/speed;
    const hours = Math.floor(totalTime);
    const minutes = Math.floor(Number((totalTime - hours).toFixed(2)) * 60);
    return `${hours} hours and ${minutes} minutes`
}
const travelTime = findTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// *****************************************************************
console.log("----warmup 3----")
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

const getPercentageOfLife = (days, hours, minutes) => {
  const minutesInLife = 80 * 365 * 24 * 60; // 80 years in minutes (no leap years)
  const totalMinutes = days * 24 * 60 + hours * 60 + minutes;

  return (totalMinutes / minutesInLife) * 100;
}

const findOutSpendTimeOnSeries = () => {
    let totalSpendTime = 0;
    for(let series of seriesDurations) {
        const {title, days, hours, minutes} = series;
        const spendTime = getPercentageOfLife(days, hours, minutes); 
        totalSpendTime = totalSpendTime + spendTime;
        console.log(`${title} took ${spendTime.toFixed(3)}% of my life`);
    }
    console.log(`In total that is ${totalSpendTime.toFixed(2)}% of my life`);
}

findOutSpendTimeOnSeries();

//***************************************************************************/
console.log("----Note taking app----");

const notes = [];

const saveNote = (content, id) => {
    if(content !== '' && id){
        const noteObj = {
            content: content,
            id: id
        }

    notes.push(noteObj);
    }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

const getNote = (id) => {
    const note = notes.find((note) => note.id === id);
    return note;
}

const firstNote = getNote(1);

const logOutNotesFormatted = () => {
    notes.forEach((note) => console.log(`The note with id: ${note.id}, has the following note text: ${note.content}`))
}

// update function will edit any note content, it will take a new content and the id of which note need to be changed
const updateNote = (content, id) => {
    if (content !== "" && id) {
        const noteObj = {
            content: content,
            id: id
        }
        const index = notes.findIndex(note => note.id === id);
        notes.splice(index, 1, noteObj);
    }
}

console.log(firstNote);
console.log(notes);
logOutNotesFormatted();
updateNote("Get some groceries", 1);
logOutNotesFormatted();

//*************************************************************** */
console.log("---- Smart Phone Usage App----");

const activities = [];
const today = new Date();

const addActivity = (activity, duration) => {
    
    const newActivity = {
        date: today.toLocaleDateString("en-US"),
        activity: activity,
        duration: duration
    };

    activities.push(newActivity);
}

addActivity("Youtube", 30);
addActivity("Games", 15);
addActivity("Instagram", 10);

const showStatus = () => {
    let totalUsage = 0;
    let todaysActivities = 0;
    const usageLimit = 60;
    console.log(today.toLocaleDateString("en-us"))
    activities.forEach(activity => {
        if (activity.date == today.toLocaleDateString("en-us")) {
            todaysActivities += 1;
            totalUsage += activity.duration;
        } 
    });
    (totalUsage < usageLimit) 
        ? console.log(`You have added ${todaysActivities} activities. They amount to ${totalUsage} min. of usage`)
        : console.log(`You have reached your limit, no more smartphone for you!`)
}

showStatus();

const mostUsage = () => {
    const most = activities.reduce((max, activity) => 
        activity.duration > max.duration ? activity : max
    );

    console.log(`You have spent most time ${most.duration} min. on ${most.activity}.`)
}

mostUsage();