import React, {Component} from 'react';

import './App.css';

import Task from './Task';
import TaskForm from './TaskForm';
import TaskList from './TaskList';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={
            task: "",
            toggleTaskStatus:null;
            deleteTask: null,
            };
  this.inputChanged= this.inputChanged.bind(this)

} 
    
toggleTaskStatu(index){
  this.tasks [index]. isComplete = !this.tasks[index]. isComplete;
  this.loadTasks();
  }

deleteTask(event,taskIndex){
      event.preventDefault();
      this.tasks.splice(taskIndex, 1);
      this.loadTasks();
  }

  addTaskClick(){
      let target = document.getElementById('addTask');
      this.addTask(target.value);
      target.value="";
  }
  addTask(task)
  {
      let newTask= {
          task,
          isCompete: false,
      };

      let parentDiv=
      document.getElementById('addTask').parentElement;
      if(task=== ''){
          parentDiv.classList.add('has-error');
          }
      else{
          parentDiv.classList.remove('has-error');
          this.tasks.push(newTask);
          this.loadTasks();
      }
  
  render() {
    const{}
    return(
        <div className="row input-area">
            <form onSubmit={this.submitTask} {this.state.task}>
                <div class="col-md-1">
                    <label htmlFor="task">Task:</label>
                </div>
                <div class="form-group col-md-10">
                    <input className="form-control"
                        type="input" name="task" 
                        value={this.state.task}
                        onChange={toggleTaskStatus}
                        onInput={this.inputUpdated}
                        onChange={this.inputChanged}
                    />
                </div>
                <div class="form-group col-md-1">
                    <button type="submit" className="btn btn-success"> Add Task </button>
                    onClick={onDeleteTask}
                </div>
                <div class="col-md-1"></div>
                <TaskForm />
                <ZipFormonSubmit = {this.addTask} />
            </form>
        </div>
        
    );
InputChanged(event) {
  const{value} = event.target;
  this.setState( {task: value} 
    );
  }

onDeleteTask(event){
  event.preventDefault();
  deleteTask();



}
}


export default App;
