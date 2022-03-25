import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthContainerComponent } from './fourth-container.component';

describe('FourthContainerComponent', () => {
  let component: FourthContainerComponent;
  let fixture: ComponentFixture<FourthContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
