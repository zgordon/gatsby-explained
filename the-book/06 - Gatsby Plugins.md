# Gatsby Plugins

We have actually already looked at a number of Gatsby Plugins in this book.  However, most of these plugins helped with core functionality with our site, like the ability to read files or process images.

In this chapter we will look at various plugins that help us add more dynamic functionality to our Gatsby sites.  This will include the following functionality:

1. Contact Forms
2. Newsletter Signup Form
3. Comments
4. Social Sharing Buttons
5. Tracking Analytics

For each feature we cover, several options exist.  Once you learn how to use the specific plugins we use in this chapter it will be easy for you to switch to alternative solutions.

## Adding Contact Forms to a Gatsby Site

The easiest way to add contact forms to a Gatsby site is to use a third party form tool, like Arengu (https://www.arengu.com/).  This will give you a UI for building forms and a dashboard for seeing all form submissions.  It also leverages the Arengu servers for delivering the emails.  Since Arengu offers free plans and a Arengu Gatsby Plugin already exists, this is a great solution.

The other approach to contact forms on a Gatsby site is to build your form in React and leverage a tool like Formspree (https://formspree.io) to send the forms to you.  An option like this does not generally provide you a dashboard to view your submission or a UI for building your forms, but it will handle the sending of emails for you.

Both of these approaches can also allow you to integrate with Zapier if you want additional integrations.

Let's look at how to get setup with using Arengu forms in a Gatsby site.  First, go to https://www.arengu.com/ and sign up for a free account.  Then walk though their guide on building a contact form.  You should find it intuitive software to use.

![Building a form with the Arengu dashboard](images/06-arengu-form.png)

Next we can install the Arengu Gatsby Plugin.  To start, copy the completed `chapter-05` folder to a `chapter-06` folder.

Then run the following command:

```
npm install --save gatsby-plugin-arengu-forms
```

The plugin does not require any special configuration, but we do have to add `gatsby-plugin-arengu-forms` to the list of plugins in the `gatsby-config.js` file. Make sure to add it there before proceeding.

Now, we can open our `/content/pages/contact.md` file and add our contact form.

Update your contact form page with the following:

```
---
slug: "contact"
title: "Contact"
---

import { ArenguForm } from "gatsby-plugin-arengu-forms"

# Contact

Reach out and get in touch!

<ArenguForm id="1234567890" />
```

You will have to lookup the ID for your Arengu form.  You can find that in the form builder under the "Share" tab.  Look in the first embed code to find the ID.

![Looking up the Arengu form ID](images/06-arengu-form-id.png)

Once you have the form setup, launch `gatsby-develop` and take a look at the contact page.  Even if you setup everything correctly, you will notice it does not work.

![Importing the component is not working](images/06-arengu-form-not-working.png)

The reason for this is that when we setup our MDX in the last chapter we did not configure our page and post templates to work with importing components.

Let's do that now.  Open up your `/src/templates/page.js` file and make the following changes:

```
import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PageTemplate = ({ data }) => {
  const { frontmatter, body } = data.mdx
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
      }
    }
  }
`
```

We have made a few important changes here:

1. Import the `MDXRenderer` component
2. Change the `pageQuery` to use `mdx` instead of `markdownRemark`
3. Get the `body` field of the `html` field
4. Display the page content using the `<MDXRenderer>` component instead of `dangerouslySetInnerHTML`

Now when we view our page we can see the contact form correctly display.

![Working contact form](images/06-working-contact-form.png)

If you would like to import components into your posts as well, you should make the same changes to the `/src/templates/post.js` file as well.

Go ahead and test your contact form and you should see the results show up in the Arengu dashboard for your form under the "Submissions" tab.

Now let's take a look at adding a different type of form to our site.

## Adding a Newsletter Signup Form

Most websites now include a newsletter signup form somewhere on the site.  In this example we will look at how to create a signup form in the footer and then connect it to Mailchimp.  

Other popular newsletter services exist and you can follow a similar approach for working with them.

To create a Mailchimp newsletter signup form we will not actually have to use a Gatsby plugin.  Since this functionality can be accomplished entirely with React, we can simply use an existing Mailchimp signup form React component.

To start, install the following package:

```
npm install react-mailchimp-form
```

Now open the `/src/components/layout.js` 

