import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./app/shared/models/user";
import {Paths} from "./app/shared/enums/paths";
import {Observable, ReplaySubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private chain: ReplaySubject<Observable<object>> = new ReplaySubject<Observable<object>>(
    1,
  );
  private isMining: ReplaySubject<boolean> = new ReplaySubject<boolean>(
    1,
  );
  constructor(private  http: HttpClient) { }

  public get isMining$(): Observable<boolean> {
    return this.isMining.asObservable();
  }

  public get chain$(): Observable<Observable<object>> {
    return this.chain.asObservable();
  }

  public setIsMining(flag: boolean): void{
    this.isMining.next(flag)
  }
  public sendMoney({amount}: User): void {
    this.chain.next(this.http.post<object>(`${Paths.API}wallet/${amount}`,{}));
    this.setIsMining(true);

  }
}
