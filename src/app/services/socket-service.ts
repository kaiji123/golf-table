// socket.service.ts

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  socket: Socket;

  constructor() {
    this.socket = io('https://mst-full-stack-dev-test.herokuapp.com/'); // Replace with your server URL
    this.socket.on('connect', () => {
      console.log('Connected to server');
    });
  }

  

  listen(eventName : string){
    return new Observable((subscriber) => {
        this.socket.on(eventName, (data)=>{
            subscriber.next(data)
        })
    })
  }

  emit(eventName: string, data:any){
    this.socket.emit(eventName, data)
  }

  // Add more methods for handling other events or functionalities
}
