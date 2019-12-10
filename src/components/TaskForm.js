import React from 'react';

class TaskForm extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            task:"",
            
        };
    }
    submitTask(event){
        event.preventDefault();
        const{task} = this.state; // get task the state
        const{onSubmit} = this.props; //  the method from the App 
        onSubmit(addtask); // the form calls a method on the App and passes the task
        this.setState( {task: ""} ); // clear  the task in the class (and on the web page)

    }

    render() {
        return (
            <div className="row input-area">
                <form onSubmit={this.submitTask}>
                    <div class="col-md-1">
                        <label htmlFor="task">Task:</label>
                    </div>
                    <div class="form-group col-md-10">
                        <input className="form-control"
                            type="input" name="task" 
                            value={this.state.task}
                            onInput={this.inputUpdated}
                        />
                    </div>
                    <div class="form-group col-md-1">
                        <button type="submit" className="btn btn-success"> Add Task </button>
                    </div>
                    <div class="col-md-1"></div>\
                    <form onSubmit={this.submitTask} />
                </form>
            </div>
           
        );
    }
}

export default TaskForm;