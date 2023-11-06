import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  @Input() showLogin!: boolean;
  @Output() showLoginChange = new EventEmitter<boolean>();

  ngOnInit(): void {
    
  }

  CloseLogin() {
    this.showLoginChange.emit(false);
  }

}
