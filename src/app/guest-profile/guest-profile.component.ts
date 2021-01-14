import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.scss']
})
export class GuestProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
  ) { }

  guestProfile = this.fb.group({
    Salutation: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    IdType: [''],
    IdNumber: [''],
    IdImage: [''],
    dob: [''],
    age: [''],
    gender: [''],
    civilStatus: [''],
    mobNo: [''],
    nationality: [''],
    remark: [''],
    status: [''],
  });

  onSubmitGuest() {
    console.log(this.guestProfile, "guestProfile");
  }


  urls=[];
  onselect(e){
    if(e.target.files){
      for(let i=0;i<File.length;i++){
         var reader= new FileReader();
         reader.readAsDataURL(e.target.files[i]);
         reader.onload=(events:any)=>{
           this.urls.push(events.target.result);
         }
      }
    }
  }


  ngOnInit(): void {
  }

}
