import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { Film } from '../film';
import { People } from '../people';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  films: Film[];
  peoples: People[];
  cat: String;
  flag: Boolean = false;

  anyArray: any[];

  constructor(private api: APIService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.cat = this.route.snapshot.paramMap.get('cat');
    if(this.cat == "films"){
      this.getFilms();
    }else if (this.cat == "peoples"){
      this.getPeoples();
    }else if (this.cat == "locations"){
      this.getLocations();
    }
  }

  getFilms(){
    this.api.getFilms().subscribe(
      data => {
        this.films = data;
        this.flag = true;
      }
    )
  }

  getPeoples(){
    this.api.getPeoples().subscribe(
      data => {
        this.peoples = data;
        this.flag = true;
      }
    )
  }

  getLocations(){
    this.api.getArray(this.cat).subscribe(
      data => {
        this.anyArray = data;
        this.flag = true;
      }
    )
  }

  back(){
    this.location.back();
  }

}
