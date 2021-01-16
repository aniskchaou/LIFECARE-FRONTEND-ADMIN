import { Component, OnInit } from '@angular/core';
import { URLLoader } from './../../../configs/URLLoader';

@Component({
  selector: 'app-ivestigation',
  templateUrl: './ivestigation.component.html',
  styleUrls: ['./ivestigation.component.css']
})
export class IvestigationComponent extends URLLoader implements OnInit {

  showsummary:boolean=false
  showgraphic:boolean=false
  
  constructor() {
    super()
   }
  

ngOnInit() {
 super.loadScripts();
}

}
