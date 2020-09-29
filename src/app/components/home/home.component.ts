import { Component, OnInit } from '@angular/core';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lanzamientos: any[] = []
  loading:boolean = true
  constructor(private _servSpoti: SpotiappService) { }

  ngOnInit(): void {

    setTimeout(()=>{
      this._servSpoti.getNuevosLanzamientos().subscribe((res:any)=>{
        this.lanzamientos=res
        console.log(res[0]);
        this.loading= false
      })
    },400)
      
      
    }

      

    
  

}
