import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizeHTML'
})
export class SanitizeHTMLPipe implements PipeTransform {

    constructor(protected sanitizer: DomSanitizer) {}

    public transform(value: any): any {
        return this.sanitizer.bypassSecurityTrustHtml(value);
     }
}
