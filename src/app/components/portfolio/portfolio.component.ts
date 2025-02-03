import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: false,

  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  title = 'Image Portfolio';

  // Image data for news portal styling
  images = [
    { src: 'https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg', alt: 'News Portal Design 1' },
    { src: 'https://tvblog-static.tradingview.com/uploads/2023/01/new-categories-for-news-preview.jpg ', alt: 'News Portal Design 2' },
    { src: 'https://static.vecteezy.com/system/resources/previews/019/011/544/original/trending-news-writing-on-chalkboard-news-concept-illustration-vector.jpg', alt: 'News Portal Design 3' },
    { src: 'https://thumbs.dreamstime.com/z/international-news-abstract-digital-banner-yellow-background-isolated-154775302.jpg', alt: 'News Portal Design 4' },
    { src: 'https://c8.alamy.com/comp/DJJK62/news-concept-blog-news-on-fabric-texture-background-DJJK62.jpg', alt: 'News Portal Design 5' },
    { src: 'https://www.shutterstock.com/image-vector/sports-news-abstract-background-elements-600nw-1753577588.jpg', alt: 'News Portal Design 4' },
    { src: 'https://www.ripplesnigeria.com/wp-content/uploads/2020/03/Latest-tech-news3.jpg', alt: 'News Portal Design 4' },
    { src: 'https://images.examples.com/wp-content/uploads/2019/05/Health-and-Wellness-Newspaper.jpg', alt: 'News Portal Design 4' },
    { src: 'https://th.bing.com/th/id/OIP.WiD04Xb4ya-MKG5L2H2TJAHaFj?w=241&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'News Portal Design 4' },
    { src: 'https://i.ytimg.com/vi/3HA24bWaRGQ/maxresdefault.jpg', alt: 'News Portal Design 4' },
    { src: 'https://thumbs.dreamstime.com/b/business-news-abstract-flat-background-design-illustration-isolated-129628024.jpg', alt: 'News Portal Design 4' },
    { src: 'https://www.indifferentlanguages.com/images/dqz33/news-in-different-languages.webp', alt: 'News Portal Design 4' },
    { src: 'https://static.vecteezy.com/system/resources/previews/011/643/615/large_2x/rolled-business-newspaper-with-the-headline-news-isolated-on-white-background-daily-newspaper-mock-up-concept-photo.jpg', alt: 'News Portal Design 4' },
    { src: 'https://th.bing.com/th/id/OIP.MsbPM_7YZzz-b4SYtvASlQHaHa?rs=1&pid=ImgDetMain', alt: 'News Portal Design 4' },
    { src: 'https://th.bing.com/th/id/OIP.CB1-axetMDZLqeY9xtSLBAHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', alt: 'News Portal Design 4' },
    { src: 'https://th.bing.com/th/id/OIP.8MD6v5taeHuFKAcrfq4vZQHaEP?rs=1&pid=ImgDetMain', alt: 'News Portal Design 4' },
  ];

  ngOnInit() {
    // Add any initialization logic here
  }
}
