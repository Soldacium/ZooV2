import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginCreds = {
    mail: '',
    password: ''
  };

  errorMsg!: string;

  active = true;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  switch(): void {
    this.active = !this.active;
  }

  login(): void {
    try{
        this.authService.login(this.loginCreds.mail, this.loginCreds.password).subscribe((allowed: boolean) => {
          if(allowed){
            this.router.navigate(['/admin']);
          }
        });
        console.log('log in');
    }catch {
      alert('no such credentials in database!');
    }

  }

}
