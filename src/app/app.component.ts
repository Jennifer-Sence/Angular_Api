import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./master-page/header/header.component";
import {FooterComponent} from "./master-page/footer/footer.component";
import {NgFor, NgForOf} from "@angular/common";
import {CardService} from "./components/card/card.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'api';

  cards: string[]=[]

  constructor(private cardService: CardService) {
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.cards = this.cardService.getCards()
  }


  addCard() :void{
    this.cards.push(String(this.cards.length + 1))
}

}
