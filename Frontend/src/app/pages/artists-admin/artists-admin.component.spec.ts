import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsAdminComponent } from './artists-admin.component';

describe('ArtistsAdminComponent', () => {
  let component: ArtistsAdminComponent;
  let fixture: ComponentFixture<ArtistsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
