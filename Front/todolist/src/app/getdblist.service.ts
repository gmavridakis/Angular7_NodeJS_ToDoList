import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders  } from '@angular/common/http';
import { Task } from './interface/task';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class GetdblistService {
  postresult: string;
  postresultUpdate: string;
  constructor(private http: HttpClient) { }

  private _geturl : string = 'http://localhost:4201/send_data';
  public newtaskArray = [];

  //private _geturl: string = '/assets/data/tasks.json';

  callServer(url){
    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin: ' , '*')
    .set('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE,PUT,OPTIONS')
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');      
    return this.http.post( 
      url, { headers: headers, observe: "response"} , { responseType: 'text' } 
    );      
  }

  deleteTaskService(url){
    return this.callServer(url)
               .catch(this.errorHandler);
  }

  updateTaskService(url){
    return this.callServer(url)
               .catch(this.errorHandler);
  }


  loadTaskArray(){
    console.log('Loading task array!');
    return this.http.get<Task[]>(this._geturl)
                    .catch(this.errorHandler);
  }

  errorHandler(error : HttpErrorResponse){
    return Observable.throw(error.message || "Server Error" );
  }

}
