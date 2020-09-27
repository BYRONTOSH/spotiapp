import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotiappService {
  URL = 'https://api.spotify.com/v1/browse/new-releases';

  constructor(private http: HttpClient) {}

  getNuevosLanzamientos() {
    let headers = new HttpHeaders({
      Authorization:
        'Bearer BQDWbt_3ODsuqjt9NH0n2BSLcmQn6dOA2kU_a_aco_HEajYf2ESSb_kZKJFIU8u9cLYokCV3EJMwWdseeCY',
    });
    return this.http.get(this.URL, { headers });
  }

  getArtista(artista: string) {
    console.log(artista);
    let headers = new HttpHeaders({
      Authorization:
        'Bearer BQDWbt_3ODsuqjt9NH0n2BSLcmQn6dOA2kU_a_aco_HEajYf2ESSb_kZKJFIU8u9cLYokCV3EJMwWdseeCY',
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${artista}&type=artist&limit=15`, { headers });
  }
}
