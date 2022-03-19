import { Component, OnInit } from '@angular/core';
import {Driver} from '../interfaces';
import { ListDriversService } from '../list-drivers.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.sass']
})
export class ListDriversComponent implements OnInit {
  listDrivers: Driver[]=[];
  currentDriver: Driver | undefined;
  editMode:Driver = this.getDefaultDriver();//default empty element

  editForm = this.getEditForm(this.editMode);//default empty element


  constructor(private listDriversService: ListDriversService) { }

  ngOnInit(): void {
    //getting list of typed elements of driver (auto convert json => TS interfaces)
    this.listDriversService.getList().subscribe(
      result => {
        this.listDrivers = result;
        this.currentDriver = result.length? result[1] : this.currentDriver;//setting firt active element
      },
      err => {console.error(err)});
  }

  getDefaultDriver(){//getting default empty element (use before the init form  and on the another cases)
    return {name:'',phone:'',email:'', tasks:[], location:{lat:0,lng:0}}

  }

  getEditForm(driver:Driver):FormGroup{
    return new FormGroup({
      name: new FormControl(driver.name, Validators.required),
      phone: new FormControl(driver.phone, Validators.required),
      email: new FormControl(driver.email, Validators.required)
    });
  }

  setEditMode(driver: Driver){//set current edited element and put element to form
    this.editMode = driver;
    this.editForm = this.getEditForm(driver);
  }

  onSubmit(){
    if(this.editForm.valid) {//innecessary checking, we have done it already
      //saving form elements to object
      this.editMode.name = this.editForm.controls['name'].value;
      this.editMode.phone = this.editForm.controls['phone'].value;
      this.editMode.email = this.editForm.controls['email'].value;
      this.editMode=this.getDefaultDriver();//reset edited element
    }
  }

  deleteDriver(driver:Driver){
    if(confirm(`Do you want to delete ${driver.name}?`)){//if user has confirmed
        this.listDrivers.splice (this.listDrivers.indexOf(driver),1);
        this.currentDriver=this.listDrivers.length? this.listDrivers[0]:this.getDefaultDriver();//If array is empty set empty as current element. Else show first element

    }
  }


}
