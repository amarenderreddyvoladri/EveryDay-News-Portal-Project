import { Component } from '@angular/core';
import { NewspaperService } from '../../service/newspaper.service';

@Component({
  selector: 'app-newspaper',
  standalone: false,

  templateUrl: './newspaper.component.html',
  styleUrl: './newspaper.component.css'
})
export class NewspaperComponent {
  
  // Arrays to store newspapers for each language
  englishNewspapers: any[] = [];
  teluguNewspapers: any[] = [];
  hindiNewspapers: any[] = [];
  tamilNewspapers: any[] = [];

  malyalamNewspapers: any[] = [];
  oriyaNewspapers: any[] = [];
  urduNewspapers: any[] = [];
  marathiNewspapers: any[] = [];
  
  kannadaNewspapers: any[] = [];
  bengaliNewspapers: any[] = [];
  gujarathiNewspapers: any[] = [];
  punjabiNewspapers: any[] = [];
  
  kokaniNewspapers: any[] = [];
  assammeseNewspapers: any[] = [];
  bodoNewspapers: any[] = []; 
  

  constructor(private newspaperService: NewspaperService) { }

  ngOnInit(): void {
    // Fetching the newspaper data from the service
    const newspapers = this.newspaperService.getNewspapers();
    
    this.englishNewspapers = newspapers.englishNewspapers;
    this.teluguNewspapers = newspapers.teluguNewspapers;
    this.hindiNewspapers = newspapers.hindiNewspapers;
    this.tamilNewspapers = newspapers.tamilNewspapers;
    
    this.malyalamNewspapers = newspapers.malyalamNewspapers;
    this.oriyaNewspapers = newspapers.oriyaNewspapers;
    this.urduNewspapers = newspapers.urduNewspapers;
    this.marathiNewspapers = newspapers.marathiNewspapers; 
    
    this.kannadaNewspapers = newspapers.kannadaNewspapers;
    this.bengaliNewspapers = newspapers.bengaliNewspapers;
    this.gujarathiNewspapers = newspapers.gujarathiNewspapers;
    this.punjabiNewspapers = newspapers.punjabiNewspapers;
    
    this.kokaniNewspapers = newspapers.kokaniNewspapers;
    this.assammeseNewspapers = newspapers.assammeseNewspapers;
    this.bodoNewspapers = newspapers.bodoNewspapers;   

  }

  // Function to open the selected newspaper URL in a new tab
  openNewspaper(url: string) {
    window.open(url, '_blank');
  }
}
