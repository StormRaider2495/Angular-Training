import { Component, OnInit } from '@angular/core';
import { BugOperationsService } from '../bug-operations.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {
  bugList: Array<any> = [];
  closedCount = 0;
  newBugName: string;

  bugSortBy = 'details';
  bugSortDescendingOrder = false;

  constructor(private bugOperations: BugOperationsService) {
    this.bugList.push({
      details: 'Server communication failure',
      isClosed: false
    });
    this.bugList.push({
      details: 'Data integrity checks failed',
      isClosed: true
    });
    this.bugList.push({
      details: 'User actions not recognized',
      isClosed: true
    });
    this.bugList.push({
      details: 'Application not responding',
      isClosed: false
    });
  }

  ngOnInit() {}

  onCreateNewClick(value) {
    // const newBug = {
    //   details: this.newBugName,
    //   isClosed: false,
    //   createdTime: new Date()
    // };
    // this.bugList = [...this.bugList, newBug];
    // this.newBugName = '';
    this.bugList = [...this.bugList, this.bugOperations.createNew(value)];
    this.newBugName = '';
  }

  toggleBugStatus(bugItem) {
    // bug['isClosed'] = !bug['isClosed'];
    const toggleBug: any = this.bugOperations.toggleBugStatus(bugItem);
    this.bugList = this.bugList.map(bug => {
      return bug.details === toggleBug.details ? toggleBug : bug;
    });
  }

  onRemoveClosedClick() {
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
  }

  isEmpty(): boolean {
    return this.newBugName && this.newBugName.length ? false : true;
  }
}
