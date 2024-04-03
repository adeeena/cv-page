import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faInstagram = faInstagram;
  faAddressCard = faAddressCard;
}
