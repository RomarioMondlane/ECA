import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornelComponent } from './fornel.component';

describe('FornelComponent', () => {
  let component: FornelComponent;
  let fixture: ComponentFixture<FornelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
