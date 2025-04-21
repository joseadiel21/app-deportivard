import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailableEquipmentPage } from './available-equipment.page';

describe('AvailableEquipmentPage', () => {
  let component: AvailableEquipmentPage;
  let fixture: ComponentFixture<AvailableEquipmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableEquipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
