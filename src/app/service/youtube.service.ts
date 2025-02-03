import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private apiUrl = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey = 'AIzaSyBBhUZtAjxTIilLMXQEGa-3I4pPy8LBNVU'; // Replace with your API key

  constructor(private http: HttpClient) { }

  // List of languages, region codes, and category ID's for news
  languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'te', name: 'Telugu' },
    // Add more languages as needed
  ];

  regionCodes = [
    { code: 'US', name: 'United States' },
    { code: 'IN', name: 'India' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IT', name: 'Italy' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' },
    { code: 'JP', name: 'Japan' },
    { code: 'AU', name: 'Australia' },

  ];

  categoryIds = [
    { id: '25', name: 'News' },
    { id: '10', name: 'Music' },
    { id: '24', name: 'Film & Animation' },
    { id: '17', name: 'Sports' },
    { id: '22', name: 'People & Blogs' },
    { id: '26', name: 'Comedy' },
    { id: '23', name: 'Entertainment' },

  ];

  getNewsVideos(query: string, language: string, regionCode: string, categoryId: string, channelId: string): Observable<any> {
    let params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', '10') // Adjusting number of results if needed
      .set('q', query)
      .set('type', 'video')
      .set('videoCategoryId', categoryId)
      .set('regionCode', regionCode)
      .set('relevanceLanguage', language)
      .set('key', this.apiKey);

    // displaying parameters on console before making the request
    console.log('Making API request with params: ', params);

    // Check if the channelId is set and include it in the params
    // if (channelId) {
    //   params = params.set('channelId', channelId); // Add this line if you're filtering by channel
    //   console.log('Channel ID set: ', channelId);
    // }

    return this.http.get<any>(this.apiUrl, { params });
  }


  // Methods to retrieve lists of languages, regions, and categories
  getLanguages() {
    return this.languages;
  }

  getRegionCodes() {
    return this.regionCodes;
  }

  getCategoryIds() {
    return this.categoryIds;
  }

}