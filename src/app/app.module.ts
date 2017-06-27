import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { ServersService } from './servers/servers.service';
import { UsersService } from './users/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServersComponent,
    ServerComponent,
    UsersComponent,
    UserComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule
  ],
  providers: [ServersService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
