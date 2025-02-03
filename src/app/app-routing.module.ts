import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { SubscribersListComponent } from './components/subscribers-list/subscribers-list.component';
import { VideoListComponent } from './components/video-list/video-list.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news-create', component: NewsCreateComponent },
  { path: 'news-list', component: NewsListComponent },
  { path: 'news-category-create', component: NewsCategoryCreateComponent },
  { path: 'news-category-list', component: NewsCategoryListComponent },
  { path: 'news-category-edit/:id', component: NewsCategoryEditComponent },
  { path: 'newspaper', component: NewspaperComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact-list', component: ContactListComponent },
  { path: 'video-list', component: VideoListComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'news', component: NewsComponent },
  { path: 'news-edit/:id', component: NewsEditComponent },
  { path: 'subscribers', component: SubscribersListComponent },
  { path: 'footer', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
