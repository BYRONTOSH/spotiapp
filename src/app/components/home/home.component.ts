import { Component, OnInit } from '@angular/core';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lanzamientos: any[] = []
  constructor(private _servSpoti: SpotiappService) { }

  ngOnInit(): void {

    this._servSpoti.getNuevosLanzamientos().subscribe((res:any)=>{
      console.log(res.albums.items[0]);
      this.lanzamientos=res.albums.items
    })

    
  }

}
