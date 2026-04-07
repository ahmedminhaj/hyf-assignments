const getMessage = async ms => {
    return new Promise((resolve, reject) => {
        if (ms < 100) {
            reject(new Error('Delay must be at least 100 milliseconds'));
            return;
        }
        setTimeout(() => {
            resolve();
        }, ms);
        
    });
}

// getMessage(1000)
//     .then(() => console.log('Hello! delayed text...'))
//     .catch((err) => console.error(err.message));


const correctUrl = 'https://yesno.wtf/api'; 
const wrongUrl = 'https://knajskdskj.jasdk';  

const fetchAnswer = async () => {
    try {
        const response = await fetch(wrongUrl);
        const data = await response.json();
        console.log(`Answer: ${data.answer}`);
    } catch (err) {
        console.error(`Error! fetching answer: ${err.message}`);
    }
}

// fetchAnswer();

const astronautsAPI = 'http://api.open-notify.org/astros.json';

const fetchAstronauts = async () => {
    try {
        const response = await fetch(astronautsAPI);
        const astronauts = await response.json();
        console.log(astronauts.people)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

// fetchAstronauts()

const movieAPI = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'

const fetchMovies = async () => {
    try {
        const response = await fetch(movieAPI);
        const movies = await response.json();
        console.log(movies)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}

// fetchMovies()

const getAstronauts = fetch(astronautsAPI);
const getMovies = fetch(movieAPI);
const batteryStatus = navigator.getBattery();

Promise.all([getAstronauts, getMovies, batteryStatus]).then(async ([astronautsResponse, moviesResponse, batteryLevel]) => {
    const astronauts = await astronautsResponse.json();
    const movies = await moviesResponse.json();
    console.log(astronauts.people.map(astronaut => astronaut.name))
    console.log(movies.filter(movie => movie.rating > 9).map(movie => movie.title))
    console.log(`battery level: ${batteryLevel.level * 100} %`)
});

