import { Component } from '@angular/core';
import { Room } from './rooms';
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {
hotelName='Hilton Hotel';
noOfRoom=10;

hiderooms=false;

rooms : Room = {
 availableRooms:2 ,
    bookedRooms:5,
    totalRooms:20
};

toggle(){
this.hiderooms=!this.hiderooms;
}
}
