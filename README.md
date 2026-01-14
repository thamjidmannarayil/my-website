<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/thamjidmannarayil/my-website/refs/heads/master/public/logo.jpg" width="100" />
</div>
<h1 align="center">
  anaflous.com - v1
</h1>
<p align="center">
  The first iteration of <a href="https://thamjidthachu.dev" target="_blank">anaflous.com</a> built with <a href="https://nextjs.org/" target="_blank">Nextjs</a> and hosted with <a href="https://vercel.com/" target="_blank">Vercel</a>
</p>

<p align="center">
  <a href="https://my-website-ten-sage.vercel.app/" target="_blank">
    <img src="https://raw.githubusercontent.com/DataDog/integrations-extras/master/vercel/images/logo-full-black.png" width="100" alt="Vercel Status" />
  </a>
</p>

![demo](https://raw.githubusercontent.com/thamjidmannarayil/my-website/refs/heads/master/public/projects/home.png)
---

### Table of Contents

- [Description](#description)
- [How To Use](#how-to-use)
- [ Color Reference](#references)
- [License](#license)
- [Author Info](#author-info)

---
## Description

Azure Horizon is more than just a project for me — it started back in 2021 as a demo for my first job, but it slowly grew into something personal. I began with Django templates, but as I evolved, so did the project. Now it’s powered by Django REST Framework on the backend and Next.js on the frontend, giving it both flexibility and scalability.  

Why Django REST Framework? Because it provides a clean and robust way to structure APIs, making it perfect for scalability and future integrations.  

Why Next.js? Because I wanted a fast, modern frontend that’s SEO-friendly with features like Server-Side Rendering — essential for when this turns into a real resort’s digital presence.  

And why TailwindCSS? Because I like clean, maintainable code. Tailwind makes it easy to design without bloating CSS files, while still keeping everything consistent and sharp.  

At the end of the day, Azure Horizon isn’t just code. It’s my dream to one day bring it to life as a real resort with its own digital platform.


---
## Technologies & libraries

Since i integrated some of my project into my website i'll i mention most of technologies & libraries that i used.

- Python
- Django
- Flask
- MySQL/PostgreSQL
- Elastic Search
- Docker
- Celery
- Redis
- RabbitMQ

##### Note : 
##### You can find the rest of packages in the file ```/package.json```
---

### How To Use

## 🛠 Installation & Set Up

1. Clone the repo CLI

   ```sh
   git clone https://github.com/thamjidmannarayil/my-website.git
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```
   
4. (OPTIONAL) : Add .env file to the root project 
 
```bash
    touch .env
```

5.  (OPTIONAL) : Add your Google API key inside .env file.

###### ***Note :***
###### not Adding Google API to the project will cause not returning the correct zip code, it might be always "00000"
###### make sure you enabled Geolocation to this API

```Javascript
    NEXT_PUBLIC_KEY_GOOGLE_API="your API key"
```

6. Start the development server

   ```sh
   yarn dev
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   yarn build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   yarn run serve
   ```
---
## API Description :
##### Endpoint 1 :
the following endpoint will return a json object contains a bunch of information about the ip address  

```api
    /api/userInfoByIP/[IP-Address]
```
example :

```api
    /api/userInfoByIP/159.89.173.104
```
###### ***Get Request to above endpoint will return the following json data :***
```JavaScript
    {"zip":"560002","country":"India","countryCode":"IN","region":"KA","regionName":"Karnataka","city":"Bengaluru","datetime":"9/6/2022, 1:24:30 AM","lat":12.9634,"lon":77.5855,"timezone":"Asia/Kolkata","isp":"DigitalOcean, LLC","org":"Digital Ocean","as":"AS14061 DigitalOcean, LLC","query":"159.89.173.104"}
```

##### Endpoint 2 :
the following endpoint will return a json object contains the zip code for the latitude and logitude

```api
    "/api/userInfoByLatLon/" + lat + "/" + lon
```
example :

```api
    /api/userInfoByIP/159.89.173.104
```
###### ***Get Request to above endpoint will return the zipcode of the lat and long provided :***
```JavaScript
    {"zipcode" : "56998"}
```
###### ***the Response below is returned if the lat and long provided has no zip code in Google maps, like lat & long in positioned in the ocean :***
```JavaScript
    {"zipcode" : "00000"}
```

##### Endpoint 3 :
the following endpoint will return a json object contains "quote" and "author", for SpeedTyping project i displayed only the quote, **minLength** is considered as the minimum of characters.  

```api
    /api/typing/[minLength]
```
##### notes : 
- ***minLength*** should be between 10 - 300.
- the returned quote is a chain of 
- i costumized the original Endpoint using The API Route of Nextjs, here is the Original Endpoint.

##### Original Endpiont :
###### URL : 
```api
    https://api.quotable.io/random?minLength=[minLength]
```
---


## License

MIT License

Copyright (c) [2022] [Abdellatif Anaflous]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


---


[Back To The Top](#description) ^

