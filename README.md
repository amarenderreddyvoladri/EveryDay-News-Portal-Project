# Online News Portal 📰

An Angular-based web application that integrates the latest news through APIs and organizes it into categories such as international, national, state, district, and street-level news. The project is built to provide users with a seamless news browsing experience.

---

## Table of Contents
- [About the Project](#about-the-project)
- [Why This Project](#why-this-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

---

## About the Project
The **Online News Portal** is a content-based platform that allows users to access the latest news efficiently. It fetches real-time news through APIs and categorizes them into different levels, from global to hyperlocal, providing users with a tailored experience.

---

## Why This Project
As a fresher, this project was chosen to:
- **Enhance Skills in Full-Stack Development**: Build expertise in Angular, Spring Boot, and MySQL while working on a practical application.
- **Learn API Integration**: Gain hands-on experience in consuming and managing third-party APIs.
- **Solve a Real-World Problem**: Create a platform to simplify access to news at various levels, from international to hyperlocal.
- **Develop User-Centric Features**: Focus on building features like search functionality and daily newspaper integration to provide a seamless user experience.
- **Improve Problem-Solving Abilities**: Address challenges like dynamic content rendering and real-time API data handling.

---

## Features
- 🌎 **News Categorization**: News is divided into levels such as international, country, state, district, and street.
- 🔍 **Search Functionality**: Search for specific news articles using keywords.
- 📜 **Daily Newspaper Integration**: Fetch daily newspapers from various official websites and display them.
- 📰 **Responsive Design**: Optimized for desktops, tablets, and mobile devices.
- ⚡ **API Integration**: Utilizes a News API to fetch real-time news data.

---

## Technologies Used
- **Frontend**: Angular, TypeScript, HTML, CSS, Bootstrap
- **Backend**: Spring Boot (REST API)
- **Database**: MySQL
- **API**: NewsAPI (or any other relevant service)
- **Version Control**: Git

---

## API Integration
This project uses a third-party **News API** to fetch real-time news articles. The API endpoint for fetching news categories is:
```
http://localhost:8181/api/news-category
```
The API returns a structured `newsCategory` array, which is dynamically displayed on the platform.

---

## Setup Instructions
Follow these steps to set up the project on your local machine:

### Prerequisites
- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)
- Java (JDK 11+)
- MySQL Server

### Steps
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd online-news-portal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Setup Backend**:
   - Navigate to the Spring Boot backend project folder.
   - Configure your MySQL database in the `application.properties` file.
   - Run the Spring Boot application using:
     ```bash
     mvn spring-boot:run
     ```

4. **Run the Frontend**:
   - Start the Angular application:
     ```bash
     ng serve
     ```
   - Open your browser and go to `http://localhost:4200`.

---

## Usage
1. **Explore News Categories**: Browse news across various levels such as international, national, and local.
2. **Search for News**: Use the search bar to find news articles of interest.
3. **Read Daily Newspapers**: View newspapers fetched from official websites.

---

## Project Structure
```
Online-News-Portal/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── news-category/
│   │   │   ├── search/
│   │   │   └── daily-newspaper/
│   │   ├── services/
│   │   ├── models/
│   │   └── app.module.ts
│   ├── assets/
│   ├── environments/
│   └── index.html
├── backend/
│   ├── src/main/java/
│   │   ├── com/example/newsportal/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── model/
│   │   └── repository/
│   ├── application.properties
│   └── pom.xml
└── README.md
```

---

## Screenshots
### Home Page
![Home Page Screenshot](https://via.placeholder.com/800x400?text=Home+Page)
### News Categories
![News Categories Screenshot](https://via.placeholder.com/800x400?text=News+Categories)

---

## Future Enhancements
- Add user authentication for personalized experiences.
- Include weather and traffic news integration.
- Allow users to save favorite news articles.
- Provide options for multiple language support.
- Deploy the application to a live server.

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request.

---

## Acknowledgments
- [NewsAPI](https://newsapi.org/) for providing news data.
- [Angular](https://angular.io/) for the frontend framework.
- [Spring Boot](https://spring.io/projects/spring-boot) for the backend.
