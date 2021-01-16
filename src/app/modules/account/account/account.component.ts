import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}

}
