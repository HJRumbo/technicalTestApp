import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  @ViewChild(MatSort) sort?: MatSort;

  displayedColumns: string[] = ['Id', 'Nombre', 'Apellido', 'Tipo de documento', 'Número documento', 'Ciudad'];
  dataSource?: MatTableDataSource<Patient>;

  constructor(private patientService: PatientService) {
    
    
  }

  ngAfterViewInit() {

    this.patientService.get().subscribe(patient => {
      this.dataSource = new MatTableDataSource(patient);
      this.dataSource!.paginator = this.paginator!;
      this.dataSource!.sort = this.sort!;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.patientService.getByDocumentNumber(filterValue).subscribe(patient => {
      this.dataSource = new MatTableDataSource(patient);
      this.dataSource!.paginator = this.paginator!;
      this.dataSource!.sort = this.sort!;

      if (this.dataSource!.paginator) {
        this.dataSource!.paginator.firstPage();
      }
    });
  }
}
