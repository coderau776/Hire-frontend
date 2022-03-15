import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() text:String='';
  constructor() {
    console.log(this.text)
   }

  ngOnInit(): void {
    console.log(this.text)
  }

}
