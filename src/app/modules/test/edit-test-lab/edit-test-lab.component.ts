import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { URLLoader } from 'src/app/main/configs/URLLoader';
import URLS from 'src/app/main/urls/urls';

@Component({
  selector: 'app-edit-test-lab',
  templateUrl: './edit-test-lab.component.html',
  styleUrls: ['./edit-test-lab.component.css'],
})
export class EditTestLabComponent extends URLLoader implements OnInit {
  ngOnInit(): void {}
}
