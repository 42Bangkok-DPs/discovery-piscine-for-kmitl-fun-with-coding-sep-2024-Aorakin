$(document).ready(function() {
     loadTodoList();

     $('#add_todo').on('click', function() {
         const task = prompt('Enter a new TO DO:');
         if (task) {
             addTodo(task);
             saveTodoList();
         }
     });

     function addTodo(task) {
         const $todoItem = $('<div></div>')
             .addClass('todo-item')
             .text(task)
             .on('click', function() {
                 const confirmDelete = confirm('Do you want to remove this TO DO?');
                 if (confirmDelete) {
                     $todoItem.remove();
                     saveTodoList();
                 }
             });

         $('#ft_list').prepend($todoItem);
     }

     function saveTodoList() {
         const todos = [];
         $('.todo-item').each(function() {
             todos.push($(this).text());
         });
         document.cookie = `todos=${JSON.stringify(todos)}; path=/`;
         console.log(document.cookie)
     }

     function loadTodoList() {
         const cookies = document.cookie.split(';');
         let todoCookie = cookies.find(cookie => cookie.trim().startsWith('todos='));

         if (todoCookie) {
             const todoList = JSON.parse(todoCookie.split('=')[1]);
             todoList.forEach(task => addTodo(task));
         }
     }
 });