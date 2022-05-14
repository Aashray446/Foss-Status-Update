import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrls: ['./infinite-scroll.component.scss'],
})
export class InfiniteScrollComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() {
  }

  ngOnInit() {
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // // and disable the infinite scroll
       const data = [
         { name : 'Aashrya' , age : 18},
         { name : 'Gautam', age : 19} ];

      if (data.length === 1000) {
        event.target.disabled = true;
      }
    }, 500);

  }
  getData() {
    return [
      { icon : '../../../assets/icon/avatar.png', name : 'Aashrya Kaityar', streak : '90'  },
      { icon : '../../../assets/icon/avatar.png', name : 'Aashrya Kaityar', streak : '90'  },
    ];
  }


}
