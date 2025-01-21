import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from '../../common/news';
import { NewsCategory } from '../../common/news-category';
import { NewsCategoryService } from '../../service/news-category.service';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-create',
  standalone: false,

  templateUrl: './news-create.component.html',
  styleUrl: './news-create.component.css'
})
export class NewsCreateComponent {

  newsFormGroup: FormGroup;

  newsCategories: NewsCategory[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private newsCategoryService: NewsCategoryService,
    private router: Router
  ) {}

  ngOnInit() {
    this.newsFormGroup = this.formBuilder.group({
      news: this.formBuilder.group({
        headline: ['', [Validators.required]],
        reporter: ['', [Validators.required]],
        content: ['', [Validators.required]],
        imageUrl: ['', [Validators.required]],
        date: ['', [Validators.required]],
        newsCategory: ['', [Validators.required]],
      }),
    });

    this.listNewsCategories();
  }

  get headline() {
    return this.newsFormGroup.get('news.headline');
  }
  get reporter() {
    return this.newsFormGroup.get('news.reporter');
  }
  get content() {
    return this.newsFormGroup.get('news.content');
  }
  get imageUrl() {
    return this.newsFormGroup.get('news.imageUrl');
  }
  get date() {
    return this.newsFormGroup.get('news.date');
  }
  get newsCategory() {
    return this.newsFormGroup.get('news.category');
  }

  listNewsCategories() {
    this.newsCategoryService.getNewsCategoryList().subscribe((data) => {
      this.newsCategories = data;
    });
  }

  onSubmit() {
    if (this.newsFormGroup.invalid) {
      this.newsFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let news = new News();
    news = this.newsFormGroup.controls['news'].value;

    this.newsService.createNews(news.newsCategory.id, news).subscribe((data) => {
      alert('New News article is added!');
      this.router.navigateByUrl('/news');
    });
  }


}
