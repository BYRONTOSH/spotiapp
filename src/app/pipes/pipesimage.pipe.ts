import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipesimage'
})
export class PipesimagePipe implements PipeTransform {

  transform(images: any[]): string {
    if(images.length==0){
      return 'assets/no-image.png'
    }
    else{
      return images[0].url
    }
  }

}
