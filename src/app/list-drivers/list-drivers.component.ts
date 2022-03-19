import { Component, OnInit } from '@angular/core';
import Driver from '../driver.interface';
import { ListDriversService } from '../list-drivers.service';


@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.sass']
})
export class ListDriversComponent implements OnInit {
  listDrivers: Driver[]=[];
  lat = 51.678418;
  lng = 7.809007;
  currentDriver: Driver | undefined;
  constructor(private listDriversService: ListDriversService) { }

  ngOnInit(): void {
    this.listDriversService.getList().subscribe(
      result => {
        this.listDrivers = result;
        this.currentDriver = result.length? result[1] : this.currentDriver;
      },
      err => {console.error(err)});
    console.log("Items from file were loaded")
  }

}
