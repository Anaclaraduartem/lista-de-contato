import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contato6',
  templateUrl: './contato6.page.html',
  styleUrls: ['./contato6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Contato6Page  {

  constructor(private router: Router) { }
  goToRoute(route:string){
    this.router.navigate([`../${route}`]);
  }




}
