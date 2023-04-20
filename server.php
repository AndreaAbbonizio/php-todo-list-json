<?php 

if(isset($_POST['newTodo'])) {

  $stringFile = file_get_contents('todos.json');
  
  $todos = json_decode($stringFile);
  
  $todos[] = $_POST['newTodo'];


  $newTodoJSON = json_encode($todos);

  file_put_contents('todos.json', $newTodoJSON);
  
} else {

  $stringFile = file_get_contents('todos.json');
  $todos = json_decode($stringFile);



  header('Content-type: application/json');
  echo json_encode($todos);

}