import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   //console.log(this.form.value);
  //   this.authService.signup(this.form.value).subscribe(
  //     data => {
  //       console.log(data)
  //       this.error = undefined;
  //       this.router.navigate(['/login'])
  //     },
  //     err => {
  //       console.log(err)
  //       this.error = err
  //     });
  // }

  onSubmit() {
    this.authService.signup(this.form.value).subscribe((data) => {
      console.log(data);
      this.router.navigate(['/login']);
    });
  }

}
