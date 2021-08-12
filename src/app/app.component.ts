import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'angular-test';

  constructor(private http: HttpClient) {}


  testGetAPI()
  {
    let user = this.http.get('http://localhost:3000/api/getAllUsers');
    user.subscribe((data) => {
      console.log("response:"+ JSON.stringify(data));
    });
  }

  testPostAPI()
  {

    let requestBody= {
      "id":3,
      "name": "Amar",
      "city":"Delhi"
    };

    let user = this.http.post('http://localhost:3000/api/saveUser',requestBody);
    user.subscribe((data) => {
      console.log("response:"+ JSON.stringify(data));
    });
  }

  testPutAPI()
  {

    let requestBody= {
      "name":"Jack",
      "city":"Bengal"
    };

    let user = this.http.put('http://localhost:3000/api/updateUser/1',requestBody);
    user.subscribe((data) => {
      console.log("response:"+ JSON.stringify(data));
    });
  }

  testGetAPIForAUser()
  {

    let user = this.http.get('http://localhost:3000/api/getUser/2');
    user.subscribe((data) => {
      console.log("response:"+ JSON.stringify(data));
    });
  }

  testDeleteAPIForAUser()
  {

    let user = this.http.get('http://localhost:3000/api/deleteUser/2');
    user.subscribe((data) => {
      console.log("response:"+ JSON.stringify(data));
    });
  }
}
