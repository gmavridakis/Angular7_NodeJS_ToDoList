import { Component, OnInit } from '@angular/core';
import { GetdblistService } from '../getdblist.service';

@Component({
  selector: 'app-getdblist',
  templateUrl: './getdblist.component.html',
  styleUrls: ['./getdblist.component.less']
})
export class GetdblistComponent implements OnInit {
  
  public taskArray = [];
  public errorMsg;
  public displayList = true;
  public current_status = '';
  //public displayList = this.getTaskArray().length>0 ? true : false;
  
  getTaskArray(){
    return this.taskArray;
  }

  loadArray(){
    this._taskService.loadTaskArray()
    .subscribe( data => this.taskArray = data,
                error => this.errorMsg = error );
  }
  
  /*
    TestReload(){
      var promise = new Promise(function(resolve, reject) {
        if (this._taskService.postresult != 'OK'){
          reject(Error("It broke"));
        }
        if (this._taskService.postresult == 'OK') {
          resolve("Stuff worked!");
        }
      });                
      promise.then(function(result) {
        console.log("Promise worked! Server Response is here!");
      }, function(err) {
        console.log("Promise broke! Server Response is not here yet!");
      });
    }
  */
 
  removeTask(id){
    var query = this.createDeleteQuery(id);
    this._taskService.deleteTaskService(query)
    .subscribe(
      res => { this._taskService.postresult = res; },
      err => console.error('Observer got an error: ' + err),
      () => {
        console.log('Subscribe was completed!');
        console.log(this._taskService.postresult);
        this.loadArray();
      }
    );
  }

  addTask(descr){
    var query = this.createAddQuery(descr);
    this._taskService.updateTaskService(query)
    .subscribe(
      res => { this._taskService.postresult = res; },
      err => console.error('Observer got an error: ' + err),
      () => {
        console.log('Subscribe was completed!');
        console.log(this._taskService.postresult);
        this.loadArray();
      }
    );    
  }

  createAddQuery(value){
    return 'http://localhost:4201/do_the_magic?action=add&description=' +value;
  }
  
  createDeleteQuery(value){
    return 'http://localhost:4201/do_the_magic?action=delete&taskid=' +value;
  }

  constructor(private _taskService : GetdblistService) { }

  ngOnInit() {
    this._taskService.loadTaskArray()
    .subscribe( data => this.taskArray = data,
                error => this.errorMsg = error );
  }

}
