import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, of } from 'rxjs';
import { CarBrand } from 'src/app/models/carbrand.model';

const getBrandById = 'http://localhost:8000/api/v1/carbrands/';

@Component({
  selector: 'app-brand-detail',
  templateUrl: './brand-detail.component.html',
  styleUrls: ['./brand-detail.component.scss'],
})
export class BrandDetailComponent implements OnInit {
  isEditMode = false;
  btnText = 'Edit Infomation';
  logoUploaded = '';
  selectedStatus = { id: 'active', label: 'Active' };
  statusList = [
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
  ];

  id: string = '';
  currentbrand: CarBrand | undefined;

  constructor(
    private http: HttpClient, 
    private _location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getData((res: any) => {
      this.currentbrand = res.data;
      this.logoUploaded = this.currentbrand?.logo as string;
      if(this.currentbrand?.status) {
        this.selectedStatus = {id: 'active', label: 'Active'}
      }else{
        this.selectedStatus = {id: 'inactive', label: 'Inactive'}
      }
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(getBrandById+this.id)
      .pipe(catchError(() => of({ data: [] })))
      .subscribe((res: any) => callback(res));
  }

  goBack(): void {
    this._location.back();
  }

  handleOnStatusChange(id: string): void {
    const currStatus = this.statusList.filter((item) => item.id === id)[0];
    if (currStatus && currStatus.id !== this.selectedStatus.id)
      this.selectedStatus = currStatus;
  }

  handleFileInput(target: EventTarget | null): void {
    if (target && target !== null) {
      const file = (target as HTMLInputElement).files as FileList;

      this.logoUploaded = URL.createObjectURL(file[0]);
    }
  }

  handleEditInfo(): void {
    if (this.isEditMode) {
      this.isEditMode = false;
      this.btnText = 'Save Changes';
    } else {
      this.isEditMode = true;
      this.btnText = 'Edit Infomation';
    }
  }
}
