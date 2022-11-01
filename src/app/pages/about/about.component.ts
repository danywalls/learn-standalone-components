import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutComponent } from 'src/app/components/container-layout/container-layout.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ContainerLayoutComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {



}
