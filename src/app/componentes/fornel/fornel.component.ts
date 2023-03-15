import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fornel',
  templateUrl: './fornel.component.html',
  styleUrls: ['./fornel.component.css']
})
export class FornelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    document.body.classList.add('example-header-image');
   
  }

}
