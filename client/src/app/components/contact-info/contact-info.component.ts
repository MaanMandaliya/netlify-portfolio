import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'contact-info',
    templateUrl: './contact-info.component.html',
    styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

    @Input() data: any;

    public contactInfo: any;

    constructor() { 
    }

    ngOnInit(): void {
        this.contactInfo = this.data;
    }

}
