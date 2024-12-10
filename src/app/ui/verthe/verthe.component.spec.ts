import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VertheComponent } from './verthe.component';

describe('VertheComponent', () => {
  let component: VertheComponent;
  let fixture: ComponentFixture<VertheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VertheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VertheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
