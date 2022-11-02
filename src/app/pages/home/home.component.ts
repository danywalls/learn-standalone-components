import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../../components/register/register.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  RegisterComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  domainName = "www.aprendetypescript.com";
  price = 100;
}
