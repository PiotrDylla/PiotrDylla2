import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthContainerComponent } from './fifth-container.component';

describe('FifthContainerComponent', () => {
  let component: FifthContainerComponent;
  let fixture: ComponentFixture<FifthContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
