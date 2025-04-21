import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-available-equipment',
  templateUrl: './available-equipment.page.html',
  styleUrls: ['./available-equipment.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AvailableEquipmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
