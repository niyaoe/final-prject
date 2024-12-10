import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from "../../ui/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  

}
