import { DatePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NewsCategoryCreateComponent } from './components/news-category-create/news-category-create.component';
import { NewsCategoryEditComponent } from './components/news-category-edit/news-category-edit.component';
import { NewsCategoryListComponent } from './components/news-category-list/news-category-list.component';
import { NewsCreateComponent } from './components/news-create/news-create.component';
import { NewsEditComponent } from './components/news-edit/news-edit.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsComponent } from './components/news/news.component';
import { NewspaperComponent } from './components/newspaper/newspaper.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { VideoListComponent } from './components/video-list/video-list.component';
import { SubscribersListComponent } from './components/subscribers-list/subscribers-list.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsCreateComponent,
    NewsCategoryListComponent,
    NewsCategoryCreateComponent,
    NewsListComponent,
    NewsCategoryEditComponent,
    HomeComponent,
    NewspaperComponent,
    ContactComponent,
    ContactListComponent,
    VideoListComponent,
    PortfolioComponent,
    NewsComponent,
    NewsEditComponent,
    SubscribersListComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                                                                                                                                                              
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
