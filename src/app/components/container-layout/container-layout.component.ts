import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LogoComponent} from "../logo/logo.component";
import {NavigationComponent} from "../navigation/navigation.component";


@Component({
  selector: 'app-container-layout',
  standalone: true,
  imports: [CommonModule, LogoComponent, NavigationComponent],
  templateUrl: './container-layout.component.html',
  styleUrls: ['./container-layout.component.css']
})
export class ContainerLayoutComponent  { }
