import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { News } from '../../common/news';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news',
  standalone: false,

  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

  news: News[] = [];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  listNews() {
    this.newsService.getNewsList().subscribe((data) => {
      this.news = data
      console.log(data)
    });
  }

  removeNews(id: number) {
    if (confirm('Are you sure to delete the News!')) {
      this.newsService.deleteNews(id).subscribe((data) => {
        alert("News is Removed!!");

        this.listNews();
      });
    }
  }

  showNewsEdit(id: number) {
    this.router.navigate(['news-edit', id]);
  }

  ngOnInit() {
    this.listNews();

  }
}

interface GetResponseNews {
  _embedded: {
    news: News[];
  };
}
