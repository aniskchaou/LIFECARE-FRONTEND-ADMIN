import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-dead',
  templateUrl: './dead.component.html',
  styleUrls: ['./dead.component.css']
})
export class DeadComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}
}
