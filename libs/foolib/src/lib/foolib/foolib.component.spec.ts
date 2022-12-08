import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoolibComponent } from './foolib.component';

describe('FoolibComponent', () => {
  let component: FoolibComponent;
  let fixture: ComponentFixture<FoolibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoolibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FoolibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
