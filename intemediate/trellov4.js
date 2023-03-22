const newTodos = [{'title': 'bread'}, 
{"title":'jam'}, {"title":'knife'},{'title' : 'go to the gym'}]

const findTodo = function(myTodo , title){
    const index = myTodo.findIndex(function(todo , index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
return myTodo[index]
}

console.log(findTodo(newTodos, 'go to the gym'))