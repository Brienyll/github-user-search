import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id = 'ba792186e7aeea4e5927';
  private client_secret = 'd437db282bcff733bacf1e78d548ea4f007138e8';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'Brienyll';
  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());
  }
}
