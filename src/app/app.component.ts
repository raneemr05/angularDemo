import { Component } from '@angular/core';
import { ApiRequestsService } from './services/api-requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private apiService: ApiRequestsService){}

  userData:any[] = [];


  generateRandomUser(){
    this.apiService.getRandomUser().subscribe({
        next:
        (dataResult) => {
          const user={
            name: `${dataResult.results[0].name.title} ${dataResult.results[0].name.first}`,
            age: `${dataResult.results[0].dob.age}`, 
          }
          this.userData.push(user);
          console.log(dataResult);
        },
        error:(error) => {console.log(error);},
        complete:() => console.log("Fetching data completed")
    })
  }
  
}
