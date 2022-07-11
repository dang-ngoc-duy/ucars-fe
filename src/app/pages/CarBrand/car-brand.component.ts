import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const count = 5;
const fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

@Component({
  selector: 'app-car-brand',
  templateUrl: './car-brand.component.html',
  styleUrls: ['./car-brand.component.scss'],
})
export class CarBrandComponent implements OnInit {
  initLoading = true; // bug
  loadingMore = false;
  data: any[] = [];
  list: Array<{ loading: boolean; name: any }> = [];
  isVisible = false;
  isConfirmLoading = false;

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getData((res: any) => {
      this.data = res.results;
      this.list = res.results;
      this.initLoading = false;
    });
  }

  getData(callback: (res: any) => void): void {
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => callback(res));
  }

  onLoadMore(): void {
    this.loadingMore = true;
    this.list = this.data.concat(
      [...Array(count)].fill({}).map(() => ({ loading: true, name: {} }))
    );
    this.http
      .get(fakeDataUrl)
      .pipe(catchError(() => of({ results: [] })))
      .subscribe((res: any) => {
        this.data = this.data.concat(res.results);
        this.list = [...this.data];
        this.loadingMore = false;
      });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    this.isVisible = false;
    this.isConfirmLoading = false;
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
}
