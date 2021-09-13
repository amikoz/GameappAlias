import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule  } from '@angular/router';

import { AppComponent } from './app.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { RulesComponent } from './rules/rules.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GameComponent } from './game/game.component';
import { CountdownModule } from 'ngx-countdown';
import { SetupService } from './setup.service';

const appRoutes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'setup', component: SetupPageComponent},
    {path: 'rules', component: RulesComponent},
    {path: 'about', component: AboutComponent},
    {path: 'game', component: GameComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    SetupPageComponent,
    RulesComponent,
    AboutComponent,
    WelcomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatDividerModule,
    FormsModule,
    HttpClientModule,
    CountdownModule,
    ReactiveFormsModule,
    MatTableModule
    ],
  providers: [SetupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
