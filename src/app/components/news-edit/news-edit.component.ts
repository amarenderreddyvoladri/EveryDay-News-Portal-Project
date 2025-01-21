import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from '../../common/news';
import { NewsCategory } from '../../common/news-category';
import { NewsCategoryService } from '../../service/news-category.service';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-news-edit',
  standalone: false,

  templateUrl: './news-edit.component.html',
  styleUrl: './news-edit.component.css'
})
export class NewsEditComponent {

  newsFormGroup: FormGroup;
  newsCategories: NewsCategory[] = [];
  news: News = new News();
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private newsService: NewsService,
    private newsCategoryService: NewsCategoryService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.id = +this.activateRouter.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.loadNews(this.id); // Load news data based on ID value.
    }
    this.initForm(); // Initialized the form through this method here...
    this.loadNewsCategories(); // Load categories for dropdown
  }

  // First of all initializing the form with empty values.
  initForm(): void {
    this.newsFormGroup = this.formBuilder.group({
      headline: ['', [Validators.required]],
      content: ['', [Validators.required]],
      reporter: ['', [Validators.required]],
      imageUrl: ['', [Validators.required]],
      date: ['', [Validators.required]],
      newsCategory: ['', [Validators.required]]
    });
  }

  // Load the news data for editing [here by the particular data will be pulled based in news id value.]
  loadNews(id: number): void {
    this.newsService.getNewsById(id, this.news).subscribe((data) => {
      this.news = data;
      this.createForm(); // Patch form values with the loaded data
    });
  }

  // Patching the form input tags with the fetched news data.
  // it means assigning the current data to that form input tags here...
  createForm(): void {
    if (this.news) {
      this.newsFormGroup.patchValue({
        headline: this.news.headline,
        content: this.news.content,
        reporter: this.news.reporter,
        imageUrl: this.news.imageUrl,
        date: this.news.date ? this.datePipe.transform(this.news.date, 'yyyy-MM-dd') : '',
        newsCategory: this.news.newsCategory?.id
      });
    }
  }

  // Fetch all news categories for the dropdown
  loadNewsCategories(): void {
    this.newsCategoryService.getNewsCategoryList().subscribe((data: NewsCategory[]) => {
      this.newsCategories = data;
    });
    
  }

  // Getter methods for individual form controls
  get headline() {
    return this.newsFormGroup.get('headline');
  }

  get content() {
    return this.newsFormGroup.get('content');
  }

  get reporter() {
    return this.newsFormGroup.get('reporter');
  }

  get imageUrl() {
    return this.newsFormGroup.get('imageUrl');
  }

  get date() {
    return this.newsFormGroup.get('date');
  }

  get newsCategory() {
    return this.newsFormGroup.get('newsCategory');
  }

  // Submit the form to update the news
  onSubmit(): void {
    if (this.newsFormGroup.invalid) {
      this.newsFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    // Prepare the updated news data
    let updatedNews = this.newsFormGroup.value;
    updatedNews.id = this.id; // Add the ID to the updated news object

    if (confirm('Are you sure to update the news details?')) {
      this.newsService.updateNews(this.id, updatedNews).subscribe(() => {
        alert("News updated successfully!");
        this.router.navigateByUrl('/news'); // Redirect to the news list
      });
    }
  }
}
