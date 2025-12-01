(async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json(); // Extracting data as a JSON Object from the response
    // console.log(data);
    
    const info = getInformation(data)
    console.log(info);
})();


// TODO:name your function another name!
function getInformation(data){
    // do work
    const userIds = [];
    let completedTodos = 0;
    let uncompletedTodos = 0;
    const todosOfLastUser = [];

    for (item of data) {
        if (!userIds.includes(item.userId)) userIds.push(item.userId)
        
        item.completed ? completedTodos += 1 : uncompletedTodos += 1; 

        if (item.userId === 10) todosOfLastUser.push(item.title)
    }
    
    return {
        userIds,
        completedTodos,
        uncompletedTodos,
        todosOfLastUser
    }
}
