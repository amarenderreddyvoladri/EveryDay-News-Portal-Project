import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsCategory } from '../../common/news-category';
import { NewsCategoryService } from '../../service/news-category.service';


@Component({
  selector: 'app-news-category-list',
  standalone: false,
  templateUrl: './news-category-list.component.html',
  styleUrl: './news-category-list.component.css'
})
export class NewsCategoryListComponent {

  newsCategories: NewsCategory[] = [];

  constructor(
    private newsCategoryService: NewsCategoryService,
    private router: Router,
  ) { }

  listNewsCategory() {
    this.newsCategoryService.getNewsCategoryList().subscribe((data) => {
      this.newsCategories = data;
      console.log(data);
    });
  }

  ngOnInit() {
    this.listNewsCategory();
  }

  removeCategory(id: number) {
    if (confirm('Are you sure to delete!')) {
      this.newsCategoryService.deleteNewsCategory(id).subscribe((data) => {
        alert("Category is Removed!!");

        this.listNewsCategory();
      });
    }
  }

  showNewsCategoryEdit(id: number) {
    this.router.navigate(['news-category-edit', id]);
  }
}

// interface GetResponseNewsCategory {
//   _embedded: {
//     newsCategory: NewsCategory[];
//   };
// }
