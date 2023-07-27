import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub: Subscription;

  constructor(
    private dataService: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
      console.log(
        '🚀 ~ file: header.component.ts:25 ~ HeaderComponent ~ ngOnInit ~ user:',
        !user
      );
      console.log(
        '🚀 ~ file: header.component.ts:25 ~ HeaderComponent ~ ngOnInit ~ user:',
        !!user
      );
    });
  }

  onSaveData() {
    this.dataService.storeRecipes();
  }
  onFetchData() {
    this.dataService.fetchRecipes().subscribe();
  }
}
