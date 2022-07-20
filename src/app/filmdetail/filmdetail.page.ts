import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../api.service';
import { Film } from '../film';
import { People } from '../people';

@Component({
  selector: 'app-filmdetail',
  templateUrl: './filmdetail.page.html',
  styleUrls: ['./filmdetail.page.scss'],
})
export class FilmdetailPage implements OnInit {

  id: String;
  cat: String;
  film: Film;
  people: People;
  loc: Location;
  flag: boolean =false;

  constructor(private api: APIService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.cat = this.route.snapshot.paramMap.get('cat');
    if(this.cat === "films"){
      this.getFilm();
    }else if (this.cat === "people"){
      this.getPeople();
    }else if (this.cat === "locations"){
      this.getLocation();
    }

  }

  getFilm(){
    this.api.getID(this.cat,this.id).subscribe(
      data => {
        this.film = data;
        this.flag = true;
      }
    )
  }

  getPeople(){
    this.api.getID(this.cat,this.id).subscribe(
      data =>{
        this.people = data;
        this.flag = true;
      }
    )
  }

  getLocation(){
    this.api.getID(this.cat,this.id).subscribe(
      data => {
        this.loc = data;
        this.flag = true;
      }
    )
  }


  back(){
    this.location.back();
  }



}
