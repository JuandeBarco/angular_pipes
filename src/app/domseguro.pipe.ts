import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitizier: DomSanitizer) { }

  transform(video: string, url: string): any {
    return this.domSanitizier.bypassSecurityTrustResourceUrl(url + video);
  }

}
