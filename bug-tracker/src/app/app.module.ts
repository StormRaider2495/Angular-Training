import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { TrimtextPipe } from './trimtext.pipe';
import { SortPipePipe } from './sort-pipe.pipe';
import { ClosedCountPipe } from './closed-count.pipe';

import { BugOperationsService } from './bug-operations.service';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    TrimtextPipe,
    SortPipePipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BugOperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
