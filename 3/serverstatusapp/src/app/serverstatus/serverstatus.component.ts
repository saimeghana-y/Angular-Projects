import { Component } from '@angular/core';

@Component({
  selector: 'app-serverstatus',
  templateUrl: './serverstatus.component.html',
  styleUrls: ['./serverstatus.component.css']
})
export class ServerstatusComponent {
  serverID: number=10;
  status:string='Not Available';
  ngOnInit(){
    this.status = Math.random() > 0.5 ? 'Available' : 'Not Available';  
  }
  getServerStatus (){
    return this.status;
  }
  getColor (){
    console.log("getting color ...");
    
    return this.getServerStatus() === 'Available' ? 'green' :  'red';
  }
}