# Getting Started with Gatsby

## Installing the Gatsby CLI

We can start a Gatsby project two ways: from scratch or using a command line interface (CLI).

Most developers use the CLI and that is what we are going to do here.

To install the Gatsby CLI, open a command line tool, like Terminal, and type the following:

```
npm install -g gatsby-cli
```

Once this is done you will be able to use `gatsby` commands in the command line. We are assuming that you already have NPM installed. If you do not, please visit https://docs.npmjs.com for instructions.

Here are a few of the most common `gatsby` commands:

- `new` - Creates a new Gatsby project
- `develop` - Starts a development server for a Gatsby project
- `build` - Used to generate the final production version of a project

There are more commands, but these ones are the most commonly used.

## Create a New Gatsby Project

Now that we have the Gatsby CLI installed, let's setup our first Gatsby project.

You may want to create a new folder on your computer called "Gatsby Explained."  Then open that folder in your terminal app of choice or a code editor like VS Code with a built in terminal.

Run the following command:

```
gatsby new chapter-02 
```

*NOTE: If you would like to follow along with the completed files from this chapter you can find them at https://github.com/zgordon/gatsby-explained* under the `chapter-02` folder.*

Once this command finishing executing, you should see a new folder with a bunch of files in it.

## The Default Gatsby Folder Structure

When we run `gatsby new projectname` we should get a folder and file structure similar to this:

```
/node_modules
/src
.gitignore
.prettierignore
gatsby-browser.js
gatsby-config.js
gatsby-node.js
gatsby-ssr.js
LICENSE
package-lock.json
package.json
README.md
```

It is always a good idea to look through the files Gatsby creates to get an idea of how a Gatsby site is structured.  

We will go over some of the most important and commonly used files and directories below.**‌**

### The Gatsby /src Directory

The `/src` folder is where the main React templates live for your site.

If you look within it you will see it separated into `components`, `images` and `pages`.

```
/src
	/components
	  header.js
	  image.js
	  layout.css
	  layout.js
	  seo.js
	/images
		gatsby-astronaut.png
		gatsby-icon.png   
	/pages
		404.js
		index.js
		page-2.tsx
```

If you have worked with React applications previously, the components folder should make sense.

The `layout.js` component is commonly used as a wrapper template for other pages in a Gatsby project.

Under `/pages` we see two hard coded pages and a 404 page that Gatsby will load by default if a particular URL does not exist.

The `index.js` page in particular is worth looking at.  It will load automatically as the homepage for our site.  This shows us something interesting about Gatsby.

If we create a React component in the `/pages` directory, Gatsby will create a static page with a URL that matches the filename.

## Creating Our First Gatsby Page

To demonstrate a simple way to create a new page on a Gatsby site, create a new file named `about.js` in the `/pages` directory.

Then copy and paste the contents of `index.js` into the `about.js` file and make the following changes:

```
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>About</h1>
    <p>Here is a little about me.</p>
    <p>Where do you want to go now?</p>
    <ul>
	    <li><Link to="/">Home</Link></li>
	    <li><Link to="/page-2/">Page 2</Link></li>	    	    <li><Link to="/fake-url/">404 Page</Link></li>
    </ul>
  </Layout>
)

export default AboutPage
```

There are a few things to note about this:

1. We can see the <Layout />` component in use as a wrapper around our page content.  This gives us a consistent layout across pages.  It is common for sites to have more than one layout or have conditional logic built into a layout.
2. We see the `<SEO />` component in use.  This allows us to set the `<title>` tag for the page.
3. Gatsby has a component called `<Link />` that will link between pages based on passing a relative URL as a prop.

To test our changes we will have to start up the Gatsby Development Server.

## Running the Gatsby Development Server

To start the Gatsby Development server, make sure you are in your `chapter-02` directory, then run the following command:

```
gatsby develop
```

This will start a development server, usually at the following URL:

```
http://localhost:8000/
```

You can find the URL for your development Gatsby site in your command line interface.

Once you open the site, change the URL to the following:

```
http://localhost:8000/about
```

Here you can see the new page we built with links to the Homepage, Page 2 and a broken link that will load the 404 page.  

Notice that if you click on the 404 page it will actually show you a special "Development" 404 page with some helpful information for developers.  You will also see an option to "Preview custom 404 page" based on the `404.js` page.

The Gatsby Development server will automatically refresh whenever we make changes to our `/src/` files.

Go ahead and open the `about.js` and change the `<h1>` message from "About" to "About Me."  

Then look at the development site again and you will see the changes take place automatically.

*NOTE: Making changes within the `/src` folder will be automatically reflected in the development server.  However, making changes to configuration files will require restarting the development server.*

To stop the development server, type `Ctl + C` in the command line.  Go ahead and stop the development server for now.

## Gatsby Configuration Files

Gatsby has a series of configuration files that are helpful to know about.  Some of them you will use with every project, and some of them are less commonly edited.

Let's briefly go over each one now:

- **gatsby-browser.js** - This file includes client side code to be added to or wrapped around your Gatsby project.  A common use case involves adding an Apollo wrapper to your site for making client side API calls.
- **gatsby-config.js** - This is the most commonly used configuration file. It includes meta data about your project and it is where plugins are configured.
- **gatsby-node.js** - Code in this file is executed during the Gatsby build project.  It is most commonly used for programmatically creating static pages based on dynamic content like a database or CMS.
- **gatsby-ssr.js** - This configuration file is less commonly used.  It lets you inject your own code or wrappers when the Gatsby site is being rendered from the server.  A common use case involves adding Redux state to your app before the page loads, but after the static site has been generated.

We will use some of these files throughout this book, and some of the files you might not need until getting into more complex Gatsby projects.

## Making a Change to the Site Metadata

The metadata for a site, like it's name, description and things like that can be found in the `gatsby-config.js` file.

Go ahead and open that file and change the `siteMetadata` information to your own information:

```
module.exports = {
  siteMetadata: {
    title: `Zac's Site`,
    description: `A simple Gatsby project.`,
    author: `@zgordon`,
    location: `Washington, DC`,
  },
  ...
```

Notice that we also added our own piece of metadata called `location`.  If you have simple, global meta information for your site you can add it here.

To access this information in one of your pages you will use GraphQL.

## Accessing Site Metadata with GraphQL

We will explore GraphQL in more depth in this book.  So for now, let's just look at a working example in action.

Open the `about.js` page and import `useStaticQuery` and `graphql` from `gatsby` at the top of the file.

```
import { Link, useStaticQuery, graphql } from "gatsby"
```

Then, convert the `AboutPage` component to look like the following:

```
const AboutPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
            location
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="About" />
      <h1>About {site.siteMetadata.title}</h1>
      <ul>
        <li>Author: {site.siteMetadata.author}</li>
        <li>Location: {site.siteMetadata.location}</li>
      </ul>
      <p>Where do you want to go now?</p>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page-2/">Page 2</Link>
        </li>{" "}
        <li>
          <Link to="/fake-url/">404 Page</Link>
        </li>
      </ul>
    </Layout>
  )
}
```

Notice that we have added a GraphQL query here using a Gatsby function called `useStaticQuery()`.  This function is commonly used when you need to query your data in a component.

This query also shows us how we specifically query the site meta data.  This query will return a `site` parameter with the following values:

- site.metaData.title
- site.metaData.author
- site.metaData.location

We can then use these in our component.  

Notice though what happens if you go back and make a change to your meta data in the `gatsby-config.js` file.  The change is *not* reflected on the site.

That is because changes made to the Gatsby configuration files require a reboot of the development server or a rebuild of the production site.

## Building Our Production Gatsby Site

As a final step to our exploration of getting started with Gatsby, let's stop the development server and run the following command in the `chapter-02` directory:

```
gatsby build 
```

This will create a production ready version of our Gatsby site into a new `/public` folder.

If you try to open the `/public/index.html` file in the browser, the site will not function properly.
\
Gatsby projects require a web server to be running.

Luckily, Gatsby comes with a built in server we can use to test the production version of our Gatsby project generated in the `/public` directory.

Run the following command in your `chapter-02` directory:

```
gatsby serve 
```

This will open the `/public` directory on a local web server similar to what you would find with Gatsby friendly hosts like Netlify and others.

Usually, the production site will be available at the following URL:

```
http://localhost:9000/
```

However, you can always find the correct URL for in the terminal console after running the command.

## Review and Next Steps

In this chapter we have started with installing the Gatsby CLI and learning how to setup a new Gatsby project.
\
Then we explored some of the commonly used files in a Gatsby project, including the React template files in the `/src` directory and the Gatsby configuration files.

You also had a chance to run the Gatsby development server that tracks changes to your code and the `gatsby build` and `gatsby serve` commands that let you build and test the production version of your Gatsby site.

From here we are going to dig deeper into creating pages in Gatsby.  We will look specifically at how we can create pages programmatically from a data source rather than having to hardcode each page in the `/src/pages/` directory.
