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
  curHit = undefined;

  getData(){
    this._api.getData().subscribe(
      hits => {
        this.hits = hits;
      },
      err => {
        console.log('API error ', err);
      }
    );
  };

  ngOnInit() {
    this.getData();
    setInterval(()=>{
      this.getData();
    }, 10000);
  }

  rowClicked(i){
    this.curHit = this.hits[i];
  };

  closeModal(){
    this.curHit = undefined;
  };
}
