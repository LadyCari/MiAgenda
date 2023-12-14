import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpService } from 'src/app/Servicios/http.service';
import { Url } from 'src/app/url';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-home-palia',
  templateUrl: './home-palia.component.html',
  styleUrls: ['./home-palia.component.css']
})
export class HomePaliaComponent implements AfterViewInit {

  displayedColumns: string[] = [
    'img',
    'nombre',
    'precio',
    'precioComposta',
    'lumisanos',
    'harversBoost',
    'lumisanos',
  ];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource<any>([]);
  items: any = [];
  resultsLength = 0;

  constructor(private httpService: HttpService) {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.cargarDatosItems();
    this.dataSource.paginator = this.paginator;
  }

  private async cargarDatosItems() {
    try {
      let respuesta = this.httpService.realizarGet(Url.urlItems);
      this.items = await lastValueFrom(respuesta);

      this.dataSource.data = this.items;
    } catch (error) {
      console.log('error', error);
    }
  }

  private costoComposta(){
    for (let item of this.items){
      
    }
  }
  
}
