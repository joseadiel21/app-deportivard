import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyReservationPage } from './my-reservation.page';

describe('MyReservationPage', () => {
  let component: MyReservationPage;
  let fixture: ComponentFixture<MyReservationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
