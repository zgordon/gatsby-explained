# An Introduction to Gatsby

## Gatsby as a Static Site Generator

We can most simply describe Gatsby as a static site generator. Gatsby can pull in data from a variety of sources, apply this data to templates, and produce HTML, CSS and JavaScript files that function as websites and applications.

We call Gatsby sites "static" because all of the pages exist as HTML files on the server.

With "non-static" sites, when you visit a page, the server must query the data, apply it to a template and generate the HTML on the fly while you wait.

You may be familiar with caching systems for "non-static" sites. These create static HTML, CSS, and JavaScript versions of the pages on your site so a user does not have to wait for the page to be generated while they wait.

Gatsby takes this a step further and creates an actual HTML file for every possible page on your site ahead of time, before the user ever visits your page.

Since the final files can include JavaScript, it is possible to make Gatsby sites dynamic by using frontend JavaScript and HTTP calls to fetch or interact with data.

## Dynamic Gatsby Sites

When building Gatsby sites, you can include JavaScript in your templates that will execute once the page loads. This allows you to do things like request data from APIs, authenticate users, or save data to databases.

Let's imagine for instance that we had a members-only site. With frontend JavaScript we could add the following to a non-dynamic React site:

1. Ability to make payments using Stripe
2. Ability to authenticate using a service like Auth0
3. Ability to view members only content via API requests if authenticated

This ability to quickly render a static HTML file, but then execute interactive JavaScript after page load allows for a range of dynamic possibilities.

## Under the Hood

We will get into depth in this book with how Gatsby works. But there are some helpful things to know from the start.

First, you interact with Gatsby using the command line. This let's you start a new Gatsby site, run a local development, build for production, and eventually even deploy your final project.

When you create a new Gatsby site, you get a few configuration files and a few React files.

All of the templates for your content in Gatsby are built with React. So, it is helpful to know some React to start. I would recommend the book React Explained as a companion to this book.

Gatsby uses GraphQL as a query language for getting or setting any data within a Gatsby project. So, even if you connect to a MySQL database you will write a GraphQL query in your template. Or if you are pulling data from a .CSV file, you will still write a GraphQL query for the data.

For this to work, the Gatsby community has produced a large collection of "transformer plugins" that take data from one source and map it over to GraphQL.

GraphQL has been a favorite standard on the web for a while now because it is both concise and powerful. Luckily you don't have to know too much GraphQL to get started, and lots of folks learn this along the way. If you want to dive in deeper, try the site HowToGraphQL.com.

There are many other types of plugins that exist to help you easily integrate Gatsby sites with other common tools, from Google Analytics to Mailchimp or Shopify.

When you build out your final Gatsby site, it will create a folder with an HTML file for each page on your site, your CSS and your JavaScript.

## Benefits of Static Sites with Gatsby

This system of building websites and applications has some distinct benefits compared to more traditional methods.

### Speed

The first benefit you often hear about with static sites is speed. With a traditional "dynamic" page you have to wait for a query to take place and files to be generated before you see the page load.

With a static HTML based static site, the user does not have to wait for this to take place. Gatsby ran all of the queries every page on your site needs to load ahead of time. So the user doesn't have to wait.

### Scalability

Even if you can get a dynamically built page to load quickly for a single user, or even a few hundred users, when you get into the thousands or tens of thousands or hundreds of thousands of users, the game changes.

To scale dynamic sites you must invest in potentially costly server and database architecture. To scale static HTML sites does not require nearly the same costs, and the savings of static sites increases the more you need to scale.

### Security

A Gatsby site will query your data sources before files are uploaded to your server. This means that people (and machines) cannot access your database or CMS or CRM or other data sources via your website.

This provides a huge layer of security protection. Even if your server is hacked, your data is not accessible. All that exists on your public server are the pre-generated HTML files for your site.

Although we have listed security as the third benefit, for many projects this is the number one benefit.

### Data Agnostic

Another benefit of Gatsby particularly is that it is data agnostic. It can just as easily get data from a database, a CMS or a .csv file.

This means you can easily switch where your data lives and what software and services you use behind the scenes without needing to change much in your site or application code base.

You can also very easily use data from multiple sources and services using Gatsby. More and more sites and applications today integrate with multiple services in what we will call a "Content Mesh."

### Image Optimization

Image optimization is one of the most important factors for page load time. Gatsby integrates with the Sharp image processing library to automatically optimize all of the images on your site before they are ever uploaded to the server.

This Gatsby Sharp integration not only optimizes your image file sizes and formats, but also helps determine what version of an image should load depending on the user's screen size and device.

Things like lazy and progressive image loading are also available along with a range of other features that makes Gatsby's image handling one of the best available.

### Developer Experience

This benefit belongs in the list of top three benefits along with speed and security.

Gatsby provides a React and GraphQL based ecosystem to query your data and build your templates. This means that regardless of your data sources you can use the same tools and code across various projects.

Many developers report they prefer coding templates with React because of it's modular and reusable design. There is also a significant ecosystem of React tools and packages.

### It's the Future

It is clear that static generated sites are becoming more and more common. Because of the tremendous benefits outlined above, this way of building sites will be prevelant for some time to come.

Thanks to it's community, marketing, and solid product, Gatsby is a clear winner when compared to some of the earlier static site generators, like Jekyll or Hugo.

## Who's Using Gatsby

Although Gatsby is fairly new on the scene, there are some major brands and sites that run on Gatsby.

• IBM
• Nike
• Airbnb
• Dominoes
• Century 21
• The History Channel
• The Food and Drug Administration
• California State University
• Free Code Camp
• Bitcoin.com
• React JS
• Node JS
• SendGrid
• Frame.io
• Algolia
• Sitepoint
• Egghead
• Contentful

We can see from this list that we are in good company when we go about learning and building with Gatsby. We are also likely to see this list grow as more sites become static.

## Organization of This Book

This book is organized to teach you a new concept in each chapter. We will also build a project throughout the course of this book. In each chapter we will learn something new and then apply it to our project.

You will build a solid, production ready Gatsby site that you can launch as is or customize to meet your own needs

I recommend you follow along with both the reading and project practice so that you get both the theory and the hands on experience.

## Helpful Prerequisites

As mentioned, Gatsby uses React under the hood. It can be helpful to know React ahead of time, but if you are already here and ready to go, it is possible to learn some React along the way as you learn Gatsby.

For the React companion book to this book, please visit ReactExplained.com.

In addition to React, you also want to know some basic JavaScript, CSS and HTML.

Another major technology in the Gatsby stack is GraphQL. It is less important to know GraphQL to start. Many developers are learning GraphQL for the first time through learning Gatsby. If you would like to learn more, please visit HowToGraphQL.com.

The final component is the command line. If running commands in a terminal like interface is something new to you, I suggest you visit CommandLineBasics.com to learn a few of the basic commands you will need to know.

Luckily, all of these technologies that React uses, are also helpful to know above and beyond just Gatsby. So learning these skills will apply to other projects and frameworks as well.

## Let's Begin!

Now that we have a bit of a high level overview of what Gatsby is and what benefits using it brings to our sites, let's jump in and get practical with learning more about it and building our first Gatsby site.
