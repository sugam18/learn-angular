import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaxmpleDirectiveComponent } from './eaxmple-directive.component';

describe('EaxmpleDirectiveComponent', () => {
  let component: EaxmpleDirectiveComponent;
  let fixture: ComponentFixture<EaxmpleDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EaxmpleDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaxmpleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
