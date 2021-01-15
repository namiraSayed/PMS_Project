import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuestProfileService {

checkService() {
    console.log('service worked')
}

  constructor(
      private http: HttpClient
  ) { }

   Url = "" 
    // data: any;
//   saveGuestProfile(data) {
//     this.http.post(this.Url, data).subscribe((result => {
//         console.log(result, 'result')
//          console.log(data, "data")
//     }))
//   }

    saveGuest(data) {
        console.log(data, 'data');
    }

}
