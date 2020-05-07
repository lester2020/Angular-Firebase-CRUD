import { Component, OnInit } from '@angular/core';
import { AddusersService } from '../addusers.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
adduser: any = {}; // it should have emty obj{}
id;


startDate = new Date(1990);


  constructor(
    private router: Router,
    private addusers: AddusersService,
    private route: ActivatedRoute) {
       this.id = this.route.snapshot.paramMap.get('id');
       if (this.id) {
        this.addusers.getUser(this.id).take(1).subscribe(a => this.adduser = a);
      }
     }
     // This method will save the created user data and update. this has two method..
     // (a) retreiving data from db and updating
  save(adduser) {
    if (this.id) {
      this.addusers.update(this.id, adduser);
    } else {
      this.addusers.create(adduser);
    }
    this.router.navigate(['/']);
  }

  deleteUser() {
    if (!confirm('Are you sure you want to delete this f*cking data?')) { return; }

    this.addusers.deletUser(this.id);
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
