import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  temp = 10
  style = 'cold'
  increase() {
    if (this.temp === 30) return
    this.temp++
    if (this.temp >= 15) this.style = 'hot'
  }
  decrease() {
    if (this.temp === 0) return
    this.temp--
    if (this.temp < 15) this.style = 'cold'
  }
}
