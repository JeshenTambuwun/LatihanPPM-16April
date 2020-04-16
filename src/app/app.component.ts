import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'JESHEN OKTAVIAN NATHANEL';


  hasil = 0;


  pangkat(a, b){
    this.hasil = Math.pow(a,b);
    return this.hasil;
  }


}
