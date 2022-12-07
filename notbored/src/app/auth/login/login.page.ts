import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined;

  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
     //console.log(this.form.value);
     this.authService.signin(this.form.value).subscribe(
      data => {
        console.log(data)
        this.error = undefined;
        localStorage.setItem('userLogin', JSON.stringify(data));
        this.router.navigate(['/'])
      },
      err => {
        console.log(err)
          this.error = err.error
      });
  }

}
