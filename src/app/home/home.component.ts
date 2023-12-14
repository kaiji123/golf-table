import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';

import { NgClass, NgForOf } from '@angular/common';
import { io } from 'socket.io-client';
import { getFlagClass } from './flags-utils';
const socket: any = io("https://mst-full-stack-dev-test.herokuapp.com/");
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NgClass,
    NgForOf,
    
  ],
  standalone: true,
})
export class HomeComponent implements OnInit {
  messages: any[] = [];

  constructor( private cdr: ChangeDetectorRef) {
    socket.on('connection', () => {
      console.log("connected")
    });

    socket.on('data-update', (data: any) => {
      this.messages.push(data);
      console.log(data)
      console.log('data received')
      console.log(this.messages.length)
      this.cdr.detectChanges();
    })
  }

  ngOnInit() {

  }
  ngOnDestroy() {

  }

  // getTwoLetterCode(countryCode: string): string {
  //   return countryCode.toLowerCase().substring(0, 2);
  // }

  getFlag(countryCode: string): string {
    return getFlagClass(countryCode)
  }

  trackByFn(index: number, message: any): any {
    return message.id; // Use a unique identifier property of the message object
  }
}







