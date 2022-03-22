import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

	private profileData: any;

	constructor() { }
	
	public init(profileData: any){
		this.profileData = profileData;
	}

	public get(key: string){
		return this.profileData[key];
	}

}
