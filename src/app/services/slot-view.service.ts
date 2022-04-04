import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Slot } from '../models/Slot';

@Injectable({
  providedIn: 'root',
})
export class SlotViewService {
  private url_slot: string =
    'http://test-env.eba-p9gye2ye.us-east-1.elasticbeanstalk.com/slots/';
  slots: Slot[];
  headers = { 'content-type': 'application/json' };
  constructor(private http: HttpClient) {}

  getSlots() {
    return this.http.get<Slot[]>(this.url_slot + localStorage.getItem('id'));
  }

  setSlots(slots: Slot[]) {
    this.slots = slots;
  }

  provideSlot(start: string, end: string, date: string): Observable<any> {
    //validation remaiining

    const body = this.createSlot(start, end, date);
    return this.http.post(this.url_slot, body, { headers: this.headers });
  }
  createSlot(start: string, end: string, date: string) {
    var slot = new Slot();
    slot.date = date;
    slot.endTime = end;
    slot.startTime = start;
    slot.userId = Number(localStorage.getItem('id'));
    // available or unavailable
    slot.status = 'available';
    this.slots.push(slot);
    return JSON.stringify(slot);
  }
}
