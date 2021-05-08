import { Component, OnDestroy } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firebase-demo';
  courses$: AngularFireList<any>;
  /**
   * Implementation of ASYNC PIPE
   */
  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/Courses');
      
  }
  add(course: HTMLInputElement){
    this.courses$.push(course.value);
    course.value = '';
  }
  
}
