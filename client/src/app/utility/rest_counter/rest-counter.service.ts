import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestCounterService {

    constructor() { }

    public getCounterMethod(finalCounter: number, callback: any){
        let localCounter: number = 0;
        return function(){
            localCounter++
            if(localCounter == finalCounter){
                callback();
            }
        }
    }
}
