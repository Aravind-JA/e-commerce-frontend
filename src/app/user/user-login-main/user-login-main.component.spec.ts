import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginMainComponent } from './user-login-main.component';

describe('UserLoginMainComponent', () => {
  let component: UserLoginMainComponent;
  let fixture: ComponentFixture<UserLoginMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLoginMainComponent]
    });
    fixture = TestBed.createComponent(UserLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
