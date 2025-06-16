import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

export const MATERIAL_FORM_IMPORTS = [
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  ReactiveFormsModule,
  FormsModule
];

export const MATERIAL_DIALOG_IMPORTS = [
  MatDialogModule,
  MatDividerModule,
];