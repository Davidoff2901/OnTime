import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/users.service';
import { User } from '../../models/models.type';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-admin',
  imports: [MatTableModule, MatPaginatorModule, MatIconModule, PrimaryButtonComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'role', 'actions'];
  userService = inject(UserService)
  dataSource = new MatTableDataSource<User>();
  private dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar)

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.loadUsers()
  }
  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: res => {
        this.userService.users.set(res)
        this.dataSource.data = res
        this.dataSource.paginator = this.paginator
      }
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  deleteUser(email: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { email: email, title: "Are you sure you want to delete this user?" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.deleteUser(email).subscribe({
          next: res => {
            this.snackBar.open(`User deleted successfully!`, 'Close', { duration: 2000 });
            this.loadUsers();
          },
          error: err => {
            this.snackBar.open(err.error.message, 'Dismiss', { duration: 3000 });
          }
        });
      }
    });
  }
}
