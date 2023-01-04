import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ButtonComponent } from './shared/button/button.component';
import { AuthProviderComponent } from './shared/auth-provider/auth-provider.component';
import { MainComponent } from './pages/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    AuthProviderComponent,
    MainComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
