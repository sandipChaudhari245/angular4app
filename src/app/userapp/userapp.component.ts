import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userapp',
  standalone: false,
  templateUrl: './userapp.component.html',
  styleUrls: ['./userapp.component.css']
})
export class UserappComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params);
    });
  }
}
