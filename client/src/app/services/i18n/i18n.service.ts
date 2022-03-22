import { Injectable } from '@angular/core';



@Injectable({
	providedIn: 'root'
})

export class I18nService {

	private keystores: any = new Object();

	private defaultLanguage: string = "en"
	private language: string = "fr";

	constructor() { }

	public init(keystores: any) {
		for (let keystore of keystores) {
			this.keystores[keystore.key] = keystore.translations;
		}
	}

	public changeLanguage(language: string){
		this.language = language;
	}

	public getLabel(key: string, model: any) {
		let label = null
		if (this.keystores[key]) {
			label = this.keystores[key][this.language];

			if(!label){
				label = this.keystores[key][this.defaultLanguage];
			}

			if (model) {
				for (let [key, value] of Object.entries(model)) {
					label.replace("${" + key + "}", value);
				}
			}
			return label;
		}
		return null;
	}


}
