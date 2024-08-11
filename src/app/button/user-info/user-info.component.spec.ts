import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoFormComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoFormComponent;
  let fixture: ComponentFixture<UserInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserInfoFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
