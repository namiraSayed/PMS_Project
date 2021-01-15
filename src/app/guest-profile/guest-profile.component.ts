import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { GuestProfileService } from './guest-profile.service';

@Component({
  selector: 'app-guest-profile',
  templateUrl: './guest-profile.component.html',
  styleUrls: ['./guest-profile.component.scss']
})
export class GuestProfileComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private guestProfileService: GuestProfileService
  ) { }

  guestProfile = this.fb.group({
    guestProfileId: ['', Validators.required],
    folioNo:[''],
    guestProfileSourceId:[''],
    contractProfileId: [''],
    titleId: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    gender: [''],
    dob: [''],
    age: [''],
    ageUnit: [''],
    civilStatus: [''],
    mobile: [''],
    nationalIdType: [''],
    nationalId: [''],
    nationalIdImage: [''],
    nationality: [''],
    guestProfileStatus: [''],
    remarks: [''],
  });


  onSubmitGuest() {
    console.log(this.guestProfile, "guestProfile");
    
    // this.guestProfileService.saveGuestProfile(this.guestProfile.value);
    this.guestProfileService.saveGuest(this.guestProfile.value)
  }


  // urls=[];
  // onselect(e){
  //   if(e.target.files){
  //     for(let i=0;i<File.length;i++){
  //        var reader= new FileReader();
  //        reader.readAsDataURL(e.target.files[i]);
  //        reader.onload=(events:any)=>{
  //          this.urls.push(events.target.result);
  //        }
  //     }
  //   }
  // }


  ngOnInit(): void {
    this.guestProfileService.checkService();
  }

}
