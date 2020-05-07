import { Component, OnInit } from '@angular/core';
import { AddusersService } from '../addusers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  home$;

  constructor(private addusers: AddusersService) {
    this.home$ = this.addusers.getAll();
   }

  ngOnInit() {
  }

}
