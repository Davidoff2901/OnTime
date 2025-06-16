import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MATERIAL_FORM_IMPORTS } from '../../helpers/material-imports';
import { Stage } from '../../models/models.type';

@Component({
  selector: 'app-stage-dialog',
  imports: [MATERIAL_FORM_IMPORTS],
  templateUrl: './stage-dialog.component.html',
  styleUrl: './stage-dialog.component.scss'
})
export class StageDialogComponent {
  stageForm!: FormGroup
  dialogRef = inject(MatDialogRef)
  fb = inject(FormBuilder)
  isEditMode: boolean;

  stageId?: string


  constructor(@Inject(MAT_DIALOG_DATA) public data: { stage?: Stage, festivalId?: string }) {
    this.isEditMode = !!data.stage
    this.stageId = data.stage?.id

    this.stageForm = this.fb.group({
      name: [data.stage?.name, Validators.required],
      festivalId: [data.festivalId]
    });
  }

  onSave(): void {
    if (this.stageForm.valid) {
      const formData = this.stageForm.getRawValue();

      const payload = {
        ...formData,
        ...(this.stageId ? { id: this.stageId } : {})
      }

      this.dialogRef.close(payload);
    }
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
