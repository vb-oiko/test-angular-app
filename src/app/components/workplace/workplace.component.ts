import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-workplace',
  templateUrl: './workplace.component.html',
  styleUrls: ['./workplace.component.scss']
})
export class WorkplaceComponent implements OnInit {

  constructor(private _api: ApiService) { }
  hits=[];

  ngOnInit() {
    // timer = setInterval(()=>{
      this._api.getData().subscribe(
        hits => {
          this.hits = hits;
        },
        err => {
          console.log('API error ', err);
          
        }
      );

    // }, 1000);
  }

  rowClicked(i){
    console.log(this.hits[i]);
    
  };
}
