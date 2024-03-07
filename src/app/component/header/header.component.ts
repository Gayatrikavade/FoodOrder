import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { User } from '@firebase/auth-types';
import { AuthService } from '../../services/authentication/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isLoggedIn!: boolean;
  user$: Observable<User | null>;
  @Output() logout: EventEmitter<void> = new EventEmitter<void>;
  showDropdown = false;

  constructor(private fireAuth: AngularFireAuth, private authService: AuthService) {
    this.user$ = this.fireAuth.authState;
    this.user$.subscribe(user => {
      this.isLoggedIn = !!user;
    });
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.showDropdown = !this.showDropdown;
  }

  onDropdownClick(event: Event) {
    event.stopPropagation(); 
  }

  onLogout(): void {
    this.logout.emit();
    this.authService.logOut();
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    this.showDropdown = false;
  }
}
