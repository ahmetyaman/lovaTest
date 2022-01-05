import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOperationComponent } from './user-operation.component';

describe('UserOperationComponent', () => {
  let component: UserOperationComponent;
  let fixture: ComponentFixture<UserOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
