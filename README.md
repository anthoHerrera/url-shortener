# [URL Shortener Microservice](https://www.freecodecamp.org/learn/apis-and-microservices/apis-and-microservices-projects/url-shortener-microservice

**User Story 1:** You can POST a URL to /api/v1/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { url : 'https://google.com', short : kvTC7nBVz}

**User Story 2:** When you visit /api/v1/shorturl/<short_url>, you will be redirected to the original URL.

**User Story 3:** If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }