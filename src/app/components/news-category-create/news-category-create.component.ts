import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsCategory } from '../../common/news-category';
import { NewsCategoryService } from '../../service/news-category.service';

@Component({
  selector: 'app-news-category-create',
  standalone: false,

  templateUrl: './news-category-create.component.html',
  styleUrl: './news-category-create.component.css'
})

export class NewsCategoryCreateComponent {

  categoryFormGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private newsCategoryService: NewsCategoryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categoryFormGroup = this.formBuilder.group({
      category: this.formBuilder.group({
        categoryName: [
          '',
          [Validators.required, Validators.pattern('[a-zA-Z\\s]+')],
        ],
      }),
    });
  }

  get categoryName() {
    return this.categoryFormGroup.get('category.categoryName');
  }

  onSubmit() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      alert('Inavlid Form');
      return;
    }

    let newsCategory = new NewsCategory();
    newsCategory = this.categoryFormGroup.controls['category'].value;

    this.newsCategoryService.createNewsCategory(newsCategory).subscribe((data) => {
      alert('New Category is added!');
      this.router.navigateByUrl('/news-category-list');
    });

  }
}
