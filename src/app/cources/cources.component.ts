import { Component, OnInit } from '@angular/core';
import { CourcesService } from '../cources.service';

@Component({
  selector: 'app-cources',
  standalone: false,
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.css']
})
export class CourcesComponent implements OnInit {
  title = 'List of cources';
  cources: string[] = [];

  constructor(courcesService: CourcesService) {
    this.cources = courcesService.getCources();
  }

  ngOnInit(): void {}
}
