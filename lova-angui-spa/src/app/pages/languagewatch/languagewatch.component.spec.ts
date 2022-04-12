import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagewatchComponent } from './languagewatch.component';

describe('LanguagewatchComponent', () => {
  let component: LanguagewatchComponent;
  let fixture: ComponentFixture<LanguagewatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagewatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagewatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
