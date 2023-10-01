import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  //Adresse du serveur BE
  teamUrl: string = "http://localhost:3000/api/teams";

  constructor(private http: HttpClient) { }

  addTeam(team) {
    return this.http.post<{ message: string }>(this.teamUrl, team);
  }

  getAllTeam() {
    return this.http.get<{ teams: any }>(this.teamUrl);
  }
}
