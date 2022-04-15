import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-third-container',
  templateUrl: './third-container.component.html',
  styleUrls: ['./third-container.component.scss']
})
export class ThirdContainerComponent implements OnInit {
 

  constructor(public router: Router) { }

  goTo(){
    this.router.navigateByUrl('/ring-of-fire/');
    
  }


  ngOnInit(): void {
  }

}
