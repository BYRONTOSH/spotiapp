import { Component, Input, OnInit } from '@angular/core';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  @Input() dato:number
  artista:[] = []
  errorBusqueda:boolean = false
  loading:boolean = false
  constructor(private _servSpoti: SpotiappService) { }

  ngOnInit(): void {
    


  }

  bucarArtista(valor:string){
    this.loading=true
    if(valor===''){
      this.errorBusqueda=true
      console.log('mal');
      this.loading=false
    }
    else{
      setTimeout(()=>{
        this._servSpoti.getArtistas(valor).subscribe((res:any)=>{
          console.log(res);
          this.artista=res
          this.loading=false
          
        })
      },1000)
      
    }
    }
}
