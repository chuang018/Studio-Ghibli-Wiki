import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private api: APIService, private route: Router) {}


  ngOnInit(): void{

  }

  goToList(cat: String){
    const url = '/list/'+cat;
    this.route.navigate([url]);
  }


}
