import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  bugList: Array<any> = [];
  closedCount: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onCreateNewClick(value) {
    console.log(value);
    this.bugList.push({
      'details': value,
      'isClosed': false,
      'createdTime': new Date()
    });
  }

  toggleBugStatus(index) {
    console.log(index);
    this.bugList[index]['isClosed'] = !this.bugList[index]['isClosed'];
    this.bugList[index]['isClosed'] ? this.closedCount++ : this.closedCount--;
  }

  onRemoveClosedClick() {
    for (let index = 0; index < this.bugList.length; index++) {
      if (this.bugList[index].isClosed) {
        this.bugList.splice(index, 1);
        this.closedCount--;
        index--;
      }
    }
  }
}
