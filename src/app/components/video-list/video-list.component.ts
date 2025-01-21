import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { YoutubeService } from '../../service/youtube.service';

interface Category {
  id: string;
  name: string;
}

interface Region {
  code: string;
  name: string;
}

interface Language {
  code: string;
  name: string;
}

@Component({
  selector: 'app-video-list',
  standalone: false,
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent {

  newsVideos: any[] = [];
  
  selectedLanguage = 'te'; // Telugu
  selectedRegion = 'IN'; // India
  selectedCategory = '25'; // Default: News
  selectedChannelId: string = ''; // Channel ID for filtering specific channels

  // Language, Region, and Category options
  languages: { code: string; name: string }[] = [];
  regions: { code: string; name: string }[] = [];
  categories: { id: string; name: string }[] = [];

  // Channel IDs for Telugu News Channels
  channelIds: { [key: string]: string } = {
    'TV9 Telugu': 'UCR6xRk1T_G6vU2zCh0h-wDA',  // Replace with the correct channel ID
    'ETV Telugu': 'UCYxzRS1oVbMCEoS4e0t3yA',  // Replace with the correct channel ID
    'TV5 Telugu': 'UChicx6E6htlX5_MyQd5qzYQ', // Replace with the correct channel ID
    'ABN Andhra Jyothi': 'UC6rEGoX4w9fJHq0brgt6gQ', // Replace with the correct channel ID
    'Sakshi TV': 'UC4riND6gZmdB58os0tWq8uw' // Replace with the correct channel ID
  };

  constructor(
    private youtubeService: YoutubeService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    // Initialize options
    this.languages = this.youtubeService.getLanguages();
    this.regions = this.youtubeService.getRegionCodes();
    this.categories = this.youtubeService.getCategoryIds();

    // Fetch initial news videos
    this.fetchNewsVideos();
  }

  fetchNewsVideos(): void {
    console.log("Fetching videos with: ", this.selectedLanguage, this.selectedRegion, this.selectedCategory, this.selectedChannelId);
    this.youtubeService
      .getNewsVideos(
        'news',
        this.selectedLanguage,
        this.selectedRegion,
        this.selectedCategory,
        this.selectedChannelId // Pass the selected channel ID for filtering
      )
      .subscribe({
        next: (data) => {
          console.log(data); // Check if data is being returned
          this.newsVideos = data.items;
        },
        error: (error) => {
          console.error('Error fetching videos:', error);
        }
      });
  }
  
  

  // Get the safe URL for embedding videos in the iframe
  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  // Update selectedChannelId when a channel is chosen
  selectChannel(event: Event): void {
    const selectElement = event.target as HTMLSelectElement | null; // Ensure it's not null
    if (selectElement) {
      const selectedChannel = selectElement.value;
      this.selectedChannelId = this.channelIds[selectedChannel];
      this.fetchNewsVideos(); // Fetch videos from the selected channel
    }
  }

}
