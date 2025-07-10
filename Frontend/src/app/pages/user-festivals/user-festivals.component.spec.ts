import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFestivalsComponent } from './user-festivals.component';

describe('UserFestivalsComponent', () => {
  let component: UserFestivalsComponent;
  let fixture: ComponentFixture<UserFestivalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFestivalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFestivalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
