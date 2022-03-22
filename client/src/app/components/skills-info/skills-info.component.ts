import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'skills-info',
    templateUrl: './skills-info.component.html',
    styleUrls: ['./skills-info.component.scss']
})
export class SkillsInfoComponent implements OnInit {

    @Input() data: any;

    constructor() { }

    ngOnInit(): void {
        for(let skills of this.data.details){
            for(let skill of skills.skills){
                skill["style"] = [];
                skill["style"].push("c100");
                skill["style"].push("p"+skill.percentage);
                skill["style"].push("very-small");
            }
        }
    }

}
