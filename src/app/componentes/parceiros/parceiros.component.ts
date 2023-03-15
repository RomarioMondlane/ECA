import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as $ from 'jquery';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css']
})
export class ParceirosComponent implements OnInit {

  
  constructor() { }
  customOptions: OwlOptions = {
    autoplay:true,
    
autoplayTimeout:1000,
autoplayHoverPause:true,
    loop: true,
    center:true,
    URLhashListener:true,
    rewind:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    lazyLoad:true, 
    
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 2
      }
    },
    nav: true
  
  }

  ngOnInit(): void {


}}
