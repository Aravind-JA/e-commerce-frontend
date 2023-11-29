import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductData } from 'src/app/Interfaces/product.interface';
import { AdminService } from 'src/app/Services/admin.service';
import { MainServiceService } from 'src/app/Services/main-service.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {


  productData: ProductData = {
    name: '',
    description: '',
    specs: [],
    price: 0,
    discount: 0,
    image: undefined,
    images: [],
    active: true,
    admin_id: localStorage.getItem('admin-id'),
    category_id: ''
  };

  productId!: string;
  productInfo: any;
  specCount: number = 1;
  imageCount: number = 1;
  imageUrl: any = '';
  imageUrls: any[] = [];

  formSuccess: boolean = false;
  formError: boolean = false;

  categoryData: any;

  constructor(private _mainService: MainServiceService, private _adminService: AdminService, private _active: ActivatedRoute) { }

  ngOnInit(): void {
    this._active.params.subscribe((params) => {
      this.productId = params['id'];
    });

    this._mainService.FindProduct(this.productId).subscribe((res: any) => {
      this.productData = res;
      this.specCount = this.productData.specs.length;
      this.imageCount = this.productData.images.length;
      this.imageUrl = this.productData.image;
      this.imageUrls = this.productData.images;
    })

    this._mainService.Category().subscribe((res) => {
      this.categoryData = res;
    });
  }

  numberRange(end: number): number[] {
    return Array(end).fill(0).map((_, index) => index + 1);
  }

  AddSpecs() {
    this.specCount++;
  }

  onFileSelected(event: any, num: number) {
    const file = event.target.files[0];
    this.productData.images[num - 1] = file;
    if (!file) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageUrls[num - 1] = reader.result;
      }
    }
  }

  imageSelect(event: any) {
    const file = event.target.files[0];
    this.productData.image = file;
    if (!file) {
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageUrl = reader.result;
      }
    }
  }

  UpdateProduct() {
    const formData = new FormData();

    Object.entries(this.productData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item: any, index: number) => {
          formData.append(key, item);
        });
      } else if (value instanceof File) {
        formData.append(key, value, value.name);
      } else {
        formData.append(key, String(value));
      }
    });

    this._adminService.EditProduct(this.productId, formData).subscribe(
      (res) => {
        this.formSuccess = true;
      },
      (err) => {
        this.formError = true;
      }
    );
  }

}
