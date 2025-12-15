let userName = "Benjamin";
let todos = [];

const getReply = (command) => {
    
    if (typeof(command) !== 'string') return;

    // name setting
    if (command.toLowerCase().startsWith("hello my name is")) {
        const name = command.split("Hello my name is")[1].trim();

        if (name !== '' && name !== undefined) userName = name;
        return `Nice to meet you ${name}`;
    }

    if (command.toLowerCase().includes("what is my name")) {
        return userName !== undefined ? `Your name is ${userName}` : `I don't know your name`;
    }

    // add todo task
    const isCommandForTodo = command.includes("todo");

    if (command.toLowerCase().startsWith("add") && isCommandForTodo) {
        const item = command.toLowerCase()
                            .replace("add", "")
                            .replace("to my todo", "")
                            .trim();
                            
        todos.push(item);
        return `${item} added to your todo`;
    }

    if (command.toLowerCase().startsWith("remove") && isCommandForTodo) {
        const item = command.toLowerCase()
                            .replace("remove", "")
                            .replace("from my todo", "")
                            .trim();

        const index = todos.indexOf(item);
        if (index !== -1) {
            todos.splice(index, 1);
            return `Removed ${item} from your todo`;
        } else {
            return `${item} is not in your todo list`;
        }
    }

    if (command.toLowerCase() === "what is on my todo?") {
        if (todos.length === 0) return "Your todo list is empty";

        return `You have ${todos.length} todos - ${todos.join(" and ")}`;
    }

    if (command.toLowerCase() === "clear my todo list") {
        todos = [];
        return "Your todo list has been cleared";
    }

    // today's date
    if (command.toLowerCase() === "what day is it today?") {
        const date = new Date();
        const day = date.getDate();
        const year = date.getFullYear();
        const monthName = date.toLocaleString('default', { month: 'long' });
        return `Today is ${day}. of ${monthName} ${year}`;
    }

    // current time
    if (command.toLowerCase() === "what time is it?") {
        const now = new Date();
        return "Current time is: " + now.toLocaleTimeString();
    }

    // arithmetic operation
    const isArithmeticCommand = (command) => /[=\-+*/]/.test(command);

    if (command.toLowerCase().startsWith("what is") && isArithmeticCommand(command)) {
        const expression = command.match(/(-?\d+)\s*([+\-*/])\s*(-?\d+)/);
        const [query, a, operator, b] = expression;
        const operation = {
            '+': (x, y) => x + y,
            '-': (x, y) => x - y,
            '*': (x, y) => x * y,
            '/': (x, y) => x / y
        };

        const result = operation[operator](a, b);
        return `${query} = ${result}`;
    }

    // timer
    if (command.toLowerCase().startsWith("set a timer for")) {
        const minutes = parseInt(command
                            .replace(/set a timer for/i, "")
                            .replace(/minutes?/i, "")
                            .trim()
                        );
        
        if (!isNaN(minutes)) {
            setTimeout(() => console.log("Timer done"), minutes * 60 * 1000);
            return `Timer set for ${minutes} minutes`;
        }
    }

    return "Sorry, I can't process this command.";
}

console.log(getReply("What is my name?"));
console.log(getReply("Hello my name is Jack"));
console.log(getReply("What is my name?"));
console.log(getReply("Add fishing to my todo"));
console.log(getReply("Add singing in the shower to my todo"));
console.log(getReply("What is on my todo?"));
console.log(getReply("What is 3 * 3"));
console.log(getReply("Set a timer for 1 minutes"));
console.log(getReply("What day is it today?"));
console.log(getReply("What time is it?"));