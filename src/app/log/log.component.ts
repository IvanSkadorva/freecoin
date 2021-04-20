import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from "../../app.service";
  import {Observable, ReplaySubject, Subscription} from "rxjs";
import * as moment from 'moment';

@Component({
  selector: 'log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements AfterViewInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  public chain$: Observable<object>
  public  isMining: boolean;
  public chain: object;

  constructor(private appService: AppService) {


  }

  ngAfterViewInit(): void {
    this.subscriptions.push(
      this.appService.chain$.subscribe((chain: Observable<object>) => {
        console.log(chain);
        this.chain$ = chain;
        this.appService.setIsMining(false)
      }),
    );
    this.subscriptions.push(
      this.appService.isMining$.subscribe(( flag: boolean) => {
        this.isMining = flag;
        console.log(this.isMining)
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public getCurrentTime(): string {
    return moment().format(' h:mm:ss a');
  }
}
