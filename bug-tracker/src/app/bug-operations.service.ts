import { Injectable } from '@angular/core';
import { Bug } from './models/bug';

@Injectable({
  providedIn: 'root'
})
export class BugOperationsService {
  createNew(bugName: string): Bug {
    const newBug = {
      details: bugName,
      isClosed: false,
      createdTime: new Date()
    };
    return newBug;
  }

  toggleBugStatus(bugToToggle: Bug): Bug {
    return { ...bugToToggle, isClosed: !bugToToggle.isClosed };
  }
}
