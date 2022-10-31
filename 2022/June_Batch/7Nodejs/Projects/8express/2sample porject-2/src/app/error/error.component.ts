import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
// import { Subscription } from "rxjs";

// import { ErrorService } from "./error.service";

@Component({
  templateUrl: "./error.component.html",
  selector: "app-error",
  // styleUrls: ["./error.component.css"]
})
export class ErrorComponent {
  // data: { message: string };
  // private errorSub: Subscription;
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
  // constructor(private errorService: ErrorService) {}

  // ngOnInit() {
  //   this.errorSub = this.errorService.getErrorListener().subscribe(message => {
  //     this.data = { message: message };
  //   });
  // }

  // onHandleError() {
  //   this.errorService.handleError();
  // }

  // ngOnDestroy() {
  //   this.errorSub.unsubscribe();
  // }
}
