import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'lift-management-system';
  go: any = true;
  flooreNoDis = '0';

  selectFlooreArray: any = [];

  liftNo: any = [
    {
      flooreNo: 1
    },
    {
      flooreNo: 2,
    },
    {
      flooreNo: 3,
    },
    {
      flooreNo: 4,
    },
    {
      flooreNo: 5,
    },
    {
      flooreNo: 6,
    },
    {
      flooreNo: 7,
    },
    {
      flooreNo: 8,
    },
    {
      flooreNo: 9,
    },
    {
      flooreNo: 10,
    },
    {
      flooreNo: 11,
    },
    {
      flooreNo: 12,
    },
    {
      flooreNo: 13,
    },
    {
      flooreNo: 14,
    },
    {
      flooreNo: 15,
    },
  ]

  selectFloore(no) {
    for (let i = 0; i < this.liftNo.length; i++) {
      if (this.liftNo[i].flooreNo == no) {
        this.liftNo[i].class = 'redColor';
        this.selectFlooreArray.push(this.liftNo[i].flooreNo);
      }
    }
  }

  async goMethod(go) {
    const timer = ms => new Promise(res => setTimeout(res, ms))
    if (go == true) {
      this.go = false;
    } else {
      this.go = true;
    }
    for (let i = 0; i < this.liftNo.length; i++) {
      await timer(1000);
      this.flooreNoDis = this.liftNo[i].flooreNo;
      for (let j = 0; j <= this.selectFlooreArray.length; j++) {
        if (this.liftNo[i].flooreNo == this.selectFlooreArray[j]) {
          await timer(3000);
          this.liftNo[i].class = '';
          const index: number = this.selectFlooreArray.indexOf(this.selectFlooreArray[j]);
          if (index !== -1) {
            this.selectFlooreArray.splice(index, 1);
          }
          if (this.selectFlooreArray.length == 0) {
            this.go = true;
            return;
          }
        }
      }
    }
  }
}
