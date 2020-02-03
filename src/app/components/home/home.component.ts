import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  items: CalendarItem[] = [
    {
      date: new Date(2019, 12, 1),
      place: 'Gliwice',
      title: 'Bieg na 100m'
    },
    {
      date: new Date(2020, 1, 10),
      place: 'Katowice',
      title: 'Gotowanie z Makłowiczem'
    },
    {
      date: new Date(2020, 3, 14),
      place: 'Warszawa',
      title: 'Jakiś śmieszny protest'
    },
    {
      date: new Date(2020, 5, 4),
      place: 'Chorzów',
      title: 'Zbieranie żab z drogi'
    },
    {
      date: new Date(2020, 6, 12),
      place: 'Gdańsk',
      title: 'Maraton'
    },
    {
      date: new Date(2020, 9, 12),
      place: 'Sośnica',
      title: 'Picie piwka pod sklepem'
    },
    {
      date: new Date(2020, 11, 31),
      place: 'DS Ondraszek',
      title: 'Nauka'
    }
  ];
  carouselSrcs: string[] = [
    'https://images.pexels.com/photos/618612/pexels-photo-618612.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2654902/pexels-photo-2654902.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2539281/pexels-photo-2539281.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/1578384/pexels-photo-1578384.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/103520/pexels-photo-103520.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/2968388/pexels-photo-2968388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
  ];

  ngOnInit() {
  }

}
