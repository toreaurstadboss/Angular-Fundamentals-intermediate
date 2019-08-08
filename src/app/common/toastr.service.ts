import { Injectable } from '@angular/core';
declare let toastr:any

@Injectable()
export class ToastrService {

  constructor () {
    toastr.options = {
      "positionClass": "toast top",
      "onclick": null,
      "fadeIn": 300,
      "fadeOut": 1000,
      "timeOut": 5000,
      "extendedTimeOut": 1000
    };
  }

  success(message: string, title?: string) {
    toastr.options = {
      "position-class": "top",
      "onclick": null,
      "fadeIn": 300,
      "fadeOut": 1000,
      "timeOut": 5000,
    };
    console.log('inside ToastrService.success');
   toastr.success(message,title);
  }

  info(message: string, title?: string) {
    toastr.message(message,title);
   }


   warning(message: string, title?: string) {
    toastr.warning(message,title);
   }


   error(message: string, title?: string) {
    toastr.error(message,title);
   }


}
