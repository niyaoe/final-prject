import { RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private api:ApiService){}
  products: any = []

  ngOnInit()
  {
    this.api.getData().subscribe((data:any)=>{
      this.products= data;
      console.log(this.products);

    })
  }
}
