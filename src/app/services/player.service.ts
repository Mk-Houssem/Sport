import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  playerURL: string ="http://localhost:3000/api/players";
  constructor(private httpClient: HttpClient) { }

  getAllPlayeres(){
    return this.httpClient.get(this.playerURL);
  }
  displayPlayerById(id){
    return this.httpClient.get(`${this.playerURL}/${id}`);
  }
  // boolean, string
  deletePlayer(id){
  return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  // boolean, string
  addPlayer(playerObj, img:File){
    let formData= new FormData();
    //comment remplir le formData
    formData.append("name",playerObj.name);
    formData.append("position",playerObj.position);
    formData.append("nbr",playerObj.nbr);
    formData.append("tId", playerObj.tId);
    formData.append("img",img);
  return this.httpClient.post<{ msg: any }>(this.playerURL,formData);
  }
  // boolean, string
  editPlayer(newPlayer){
  return this.httpClient.put(this.playerURL,newPlayer);
  }

}
