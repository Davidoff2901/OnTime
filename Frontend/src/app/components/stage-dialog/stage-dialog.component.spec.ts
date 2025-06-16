import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageDialogComponent } from './stage-dialog.component';

describe('StageDialogComponent', () => {
  let component: StageDialogComponent;
  let fixture: ComponentFixture<StageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StageDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
