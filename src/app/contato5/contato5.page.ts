import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato5',
  templateUrl: './contato5.page.html',
  styleUrls: ['./contato5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Contato5Page  {

  constructor(private router: Router) { }
  goToRoute(route:string){
    this.router.navigate([`../${route}`]);
  }

}
