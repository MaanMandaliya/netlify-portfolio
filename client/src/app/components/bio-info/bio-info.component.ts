import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bio-info',
  templateUrl: './bio-info.component.html',
  styleUrls: ['./bio-info.component.scss']
})
export class BioInfoComponent implements OnInit {

  @Input() data: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
