import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MatchService {
//Adresse du serveur BE
  matchURL: string ="http://localhost:3000/api/matches";
// httpClient : Bostagi
  constructor(private httpClient: HttpClient ) { }
// Array of Objects
displayAllMatches(){
  return this.httpClient.get<{ matches: any }>(this.matchURL);
}
displayMatchById(id){
  return this.httpClient.get<{ matche: any }>(`${this.matchURL}/${id}`);
}
// boolean, string
deleteMatch(id){
return this.httpClient.delete(`${this.matchURL}/${id}`);
}
// boolean, string
addMatch(matchObj){
return this.httpClient.post(this.matchURL,matchObj);
}
// boolean, string
editMatch(newMatch){
return this.httpClient.put<{ isUpdated: boolean }>(this.matchURL,newMatch);
}
}
