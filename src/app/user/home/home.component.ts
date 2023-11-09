import { Component, OnInit } from '@angular/core';
import { MainServiceService } from 'src/app/Services/main-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  offerNum: number = 0;

  slideImages: String[] = [
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/cb9a4bc2ffd319f7.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d45542788f7f0142.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5c2eaf08eab72ca3.jpeg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/fe9c49a25950aaf1.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/78f0374b0191d762.jpg?q=20"
  ];

  offerImages: String[] = [
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/ff5fe829530cf197.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/07b437dc74cb4f25.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/001d5002a4adeeaf.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/8e706d5a2c7967f2.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/fc37d1e632bd0555.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/c4099de7a5297e8c.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/8fe2200021bd4938.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/e900d663d029165e.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/520/280/image/838aae0f740696c8.jpg?q=20",
  ];

  constructor(private service: MainServiceService) { }
  ngOnInit(): void {
    this.service.Category().subscribe((res: any) => {
      this.data = res;
    });
  }


  OfferImage(index: number) {
    if (index >= this.offerImages.length) {
      this.offerNum = 0;
    }
    this.offerNum++;
    return this.offerImages[index-1];
  }
  
}
