import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsCategory } from '../../common/news-category';
import { NewsCategoryService } from '../../service/news-category.service';

@Component({
  selector: 'app-news-category-edit',
  standalone: false,

  templateUrl: './news-category-edit.component.html',
  styleUrl: './news-category-edit.component.css'
})
export class NewsCategoryEditComponent {

  categoryFormGroup: FormGroup;

  newsCategory: NewsCategory = new NewsCategory();

  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private newsCategoryService: NewsCategoryService,
    private router: Router,
    private activateRouter: ActivatedRoute
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

    // read id given in newsCategoryEditComponent route.
    this.id = this.activateRouter.snapshot.params['id'];
    
    this.newsCategoryService.getNewsCategory(this.id).subscribe((data) => {
      this.newsCategory = data;
      console.log(this.newsCategory);
    })

  }

  get categoryName() {
    return this.categoryFormGroup.get('category.categoryName');
  }

  onSubmit() {
    if (this.categoryFormGroup.invalid) {
      this.categoryFormGroup.markAllAsTouched();
      alert('Invalid Form');
      return;
    }

    let newsCategory = new NewsCategory();

    newsCategory = this.categoryFormGroup.controls['category'].value;

    if (confirm('Are you sure to update ?')) {
      this.newsCategoryService.updateNewsCategory(this.id, this.newsCategory).subscribe((data) => {
        alert("news Details are updated!");
        this.router.navigateByUrl('/news-category-list');
      });
    }



  }
}
