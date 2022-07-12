import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { CarBrand } from 'src/app/models/carbrand.model';

const getAllCarModel = 'http://localhost:8000/api/v1/carbrands';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})

export class CarModelComponent implements OnInit {
  initLoading = true;
  loadingMore = false;
  data: any[] = [];
  list: CarBrand[] = [];
  carbrandList: any[] = [];
  isVisible = false;
  logoUploaded = '';

  selectedFilter = 'All';
  selectedStatus = { id: 'active', label: 'Active' };

  filterList = [
    { id: 'all', label: 'All' },
    { id: 'lastUpdated', label: 'Last Updated' },
    { id: 'brandName', label: 'Brand Name' },
    { id: 'numOfModels', label: 'Num of Models' },
  ];
  statusList = [
    { id: 'active', label: 'Active' },
    { id: 'inactive', label: 'Inactive' },
  ];

  addBrandForm: FormGroup = new FormGroup({});

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.addBrandForm = new FormGroup({
      logo: new FormControl(),
      name: new FormControl('', Validators.required),
      describe: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
    this.getData((res: any) => {
      this.data = res.data;
      this.list = res.data;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(getAllCarModel)
      .pipe(catchError(() => of({ data: [] })))
      .subscribe((res: any) => callback(res));
  }

  getFormValidationErrors() {
    let errorList: any[] = [];

    Object.keys(this.addBrandForm.controls).forEach((key) => {
      const controlErrors: ValidationErrors = this.addBrandForm.get(key)
        ?.errors as ValidationErrors;

      if (controlErrors != null) {
        Object.keys(controlErrors).forEach((keyError) => {
          errorList.push({key: key, errorMsg: keyError, isError: controlErrors[keyError]})
        });
      }
    });

    return errorList;
  }
   

  showModal(): void {
    this.isVisible = true;
  }

  handleSubmitForm(e: SubmitEvent): void {
    e.preventDefault();

    console.log(e)
    
    // const isError = this.getFormValidationErrors().length > 0;
    // !isError ? this.isVisible = false : this.isVisible = true;
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  handleOnChangeFilter(id: string): void {
    const currFilter = this.filterList.filter((item) => item.id === id)[0];
    if (currFilter && currFilter.label !== this.selectedFilter)
      this.selectedFilter = currFilter.label;
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
}
