import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class SpotiappService {
  URL = 'https://api.spotify.com/v1/browse/new-releases';
  TOKEN = 'Bearer BQC6ASwrzomqbLqySl99ga9aledYZP2PqnBGCbkOJ5e-gQXlkP8GlJQkgJdj7qd5w2-LjLwYxjtvjNgVfUM';
  

  constructor(private http: HttpClient) {}

  getNuevosLanzamientos() {
    let headers = new HttpHeaders({
      Authorization:
        `${this.TOKEN}`
    });
    return this.http.get(this.URL, { headers })
    .pipe(map( res =>{
      return res['albums'].items
    }))
  }

  getArtistas(artista: string) {
    let headers = new HttpHeaders({
      Authorization:
      `${this.TOKEN}`
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`, { headers })
    .pipe(map( res =>{
      return res['artists'].items
    }))
  }


  getDetalleArtista(id:string){
    let headers = new HttpHeaders({
      Authorization:
      `${this.TOKEN}`
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${id}`, { headers })
  }

  getTopTracks(id:string){
    let headers = new HttpHeaders({
      Authorization:
      `${this.TOKEN}`
    });
    return this.http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=us`, { headers })
    .pipe(map((res)=>{
      return res['tracks']
      
    }))
  }
}
