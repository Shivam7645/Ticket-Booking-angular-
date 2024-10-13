import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Representing the coach seats in a 2D array
  seats = [
    [true, true, true, true, true, true, true],  // Row 1
    [true, true, true, true, true, true, true],  // Row 2
    [true, true, true, true, true, true, true],  // Row 3
    [true, true, true, true, true, true, true],  // Row 4
    [true, true, true, true, true, true, true],  // Row 5
    [true, true, true, true, true, true, true],  // Row 6
    [true, true, true, true, true, true, true],  // Row 7
    [true, true, true]  // Last Row with 3 seats
  ];

  seatsToBook: number = 0;
  bookedSeats: string[] = [];

  // Function to handle seat booking
  bookSeats(requestedSeats: number) {
    this.bookedSeats = [];
    let remainingSeats = requestedSeats;

    // Iterate through each row to find available seats
    for (let i = 0; i < this.seats.length; i++) {
      let row = this.seats[i];
      let availableSeats = row.filter(seat => seat === true);

      if (availableSeats.length >= remainingSeats) {
        for (let j = 0; j < row.length; j++) {
          if (remainingSeats === 0) break;
          if (row[j] === true) {
            row[j] = false;
            this.bookedSeats.push(`Row ${i + 1} Seat ${j + 1}`);
            remainingSeats--;
          }
        }
      } else {
        for (let j = 0; j < row.length; j++) {
          if (row[j] === true) {
            row[j] = false;
            this.bookedSeats.push(`Row ${i + 1} Seat ${j + 1}`);
            remainingSeats--;
            if (remainingSeats === 0) break;
          }
        }
      }

      if (remainingSeats === 0) break;
    }
  }
}
