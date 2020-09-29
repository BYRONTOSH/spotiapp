import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotiappService } from 'src/app/services/spotiapp.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css'],
})
export class ArtistaComponent implements OnInit {

  datos: number[]=[1,2,3]
  url;
  artista: any[] =[]
  tracks:any[]= []
  constructor(
    private router: ActivatedRoute,
    private _servSpoti: SpotiappService
  ) {
















  }

  ngOnInit(): void {
    this.router.params.subscribe((r) => {
      this.url = r['id'];
      this._servSpoti.getDetalleArtista(this.url).subscribe((res) => {
      this.artista.push(res)
      console.log(this.artista);
      });
      this._servSpoti.getTopTracks(this.url).subscribe((res) => {
        this.tracks=res
        console.log(this.tracks);
        });

    });
  }
}
