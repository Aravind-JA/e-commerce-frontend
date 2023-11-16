import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginMainComponent } from './admin-login-main.component';

describe('AdminLoginMainComponent', () => {
  let component: AdminLoginMainComponent;
  let fixture: ComponentFixture<AdminLoginMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginMainComponent]
    });
    fixture = TestBed.createComponent(AdminLoginMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
