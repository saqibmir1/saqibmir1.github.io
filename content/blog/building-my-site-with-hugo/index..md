---
title: "Building My Site With Hugo"
date: 2023-06-05T18:21:27+05:30
draft: false
---

**Hugo is a static site generator which is fast, simle and minimal. If you have a static site or want to create one, you might find this blog useful**

## Introduction
I was watching a youtube video of Luke Smith on how to use hugo and i wanted to give it a try because i was sick and tired of writing same html tags over and over again
for every blog post. So after reading docs for a while and watching some youtube, i figured it was time to move my site to hugo and it was totally worth it.

### What is hugo
The world’s fastest framework for building websites.With its amazing speed and flexibility, Hugo makes building websites fun again; that's what it says on their website. In hugo you 
can use md to write any content and convert it into html pages. and for styling, you have themes. Readymade themes are available on hugo's website but if you are like me and have no life, you 
can create your own theme. Once you have a theme setup, you can then fouus on content instead of writeing html and css for every page and article.

### Prerequitites
- Install ```hugo```
- Install ```git``` (optional)

## How to use hugo

### Initial steps

So in order to use hugo, you have to first create a site using:
```shell
hugo new site new-site
```
Note that new-site is the name of your site and can be anything you want.

Now you should see a newly created folder 'new-site'. cd in into the folder and download a theme and paste in into the themes directory or if you want to create your own theme, do
```shell
hugo new theme mytheme
```

Your site directory structure should look like this:
```shell
config.toml
content/
  _index.md
  blog/
    _index.md
    my-first-blog-post.md
    my-second-blog-post.md
data/
layouts/
  _default/
    baseof.html
    list.html
    single.html
  partials/
    header.html
    footer.html
static/
themes/
  mytheme/
    assets/
    layouts/
    static/
archetypes/
resources/
public/

```
in the config.toml, write the basic info like
```toml
baseURL = "https://example.com"
title = "Your site tile"
theme = "mytheme"

```

### Creating this theme
#### Partials
First we will create partials. In Hugo, partials are reusable components or snippets of code that can be included within templates. 
Go to themes/mytheme/layouts/partials/footer.html and paste the following code:
```html
</main>
<hr>

<footer>
	<div class="footer">
	<nav>
	<a href="https://wiby.me">
		<img style="display: inline-block;" src="""></a>
	<a href="https://landchat.net">
		<img style="display:inline-block;" src=""></a>
	<a href="https://freebsd.org">
		<img style="display: inline-block;" src=""/></a>
	<a href="https://larbs.xyz">
		<img style="display: inline-block;" src=""/></a>
	</nav>
	<br>
	<p>&copy;{{ dateFormat "2006" now }} {{ .Site.Title }}</p>
    </div>
</footer>
</body>
</html>
```
For header.html, paste this:
```html
<!DOCTYPE html>
<html lang="en">
<head>

	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>{{ if not .IsHome }}{{ .Title }} | {{ end }}{{ .Site.Title }}</title>
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="/css/style.css" type="text/css" media="all" />
	{{ with .OutputFormats.Get "rss" -}}
		{{ printf `<link rel="%s" type="%s" href="%s" title="%s" />`
		.Rel .MediaType.Type .Permalink $.Site.Title | safeHTML }}
	{{ end -}}
</head>
{{ partial "nav.html" . }}
<main class="content">

```html
And for nav.html, paste this:
```

<header class="header">
  <nav class="nav">
    <span><a href="/">Home</a></span>|
    <span><a href="/about">About</a></span>|
    <span><a href="/posts">Blog</a></span>|
    <span><a href="https://github.com/saqibmir1">Git</a></span>|
     <span><a href="/contact">Contact</a></span>
  </nav>
</header>
```

#### Home page
You can write the home page in html which is located in new-site/themes/mytheme/layouts/index.html
Since homepage is different for everypage, im not going to paste it here. Remember you can use partials in here like this:
```html
<h1 class="title">{{ .Site.Title }}</h1>
{{ partial "header.html" . }}

<!-- your page content -->

 <h2>My Blog Entries</h2>
    <ul>
        {{ range first 10 (where .Site.RegularPages "Section" "posts") }}
          <li><time>[{{ .Date.Format "January 2, 2006" }}]</time>
          - <a href="{{ .Permalink }}">{{ .Title }}</a></li>
        {{ end }}
      </ul>
      {{ partial "footer.html" . }}
```

The ```blog entries``` part will automatically list most recent 10 blogs on your homepage. Very useful, You can use it in your blogs list page too. 

#### Static files
Your static files: images, buttons, stylesheets, javascript should be located in the static folder of theme directory.
In my site i have only one css file for the entire site under static/style.css in themes directory.

### View your site
Now you are done with the most part. In order to test, do
```shell
hugo serve
```
go to ```localhost:1313``` on your browser and view the site

### Adding new pages and blogs
In order to add a new page for your site, say about page, you need to go to the root dir of your site and do
```
hugo new about.md
```
And if you want to create new blog post, do
```hugo new posts/new-post.md```

Then open that particular md file and write the conent in md.

### Some more features of hugo 
- The deployable site, after running hugo serve, is generated in the public folder.
- Hugo autogenerates a xml file in public folder so you can use it for your rss.
- ```--noCache flag```:  This flag tells Hugo not to use any cached data and forces a full rebuild of the site.

### Conclusion
In conclusion, migrating to hugo has been a transformative expreience. It is minimal, past and flexible. If you are tired
of manually writing html for each blog, i highly recommend considering hugo. Dont be an internet peasant, be a landlord, own a website lol.

**You can checkout my website's source code for more comprehensive guide [here](https://github.com/saqibmir1/saqibmir1.github.io)**
