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
  constructor(private _servSpoti: SpotiappService) { }

  ngOnInit(): void {
  }

  bucarArtista(valor:string){
    if(valor===''){
      this.errorBusqueda=true
      console.log('mal');
    }
    else{
      this._servSpoti.getArtista(valor).subscribe((res:any)=>{
        this.artista=res.artists.items
        
      })
    }
    }
}
