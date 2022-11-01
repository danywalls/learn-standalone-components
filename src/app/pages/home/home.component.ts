import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerLayoutComponent } from '../../components/container-layout/container-layout.component';
import { RegisterComponent } from '../../components/register/register.component';
import { WelcomeComponent } from '../../components/welcome/welcome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContainerLayoutComponent, RegisterComponent,WelcomeComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
