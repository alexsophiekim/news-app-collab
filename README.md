# news-app-collab
# A News API project by Sophie and John

[See News API](https://newsapi.org/)

# Installation

To install everything needed for this project, you need to have a version of **Node JS** and **npm** installed on your machine.

In Terminal on your computer:
```
$ git clone https://github.com/ThisIsMattSaunders/formative3.1.git

```

Still in Terminal, but now in your local server (vagrant, localhost, etc.):
```
$ npm install

```

This will install Bootstrap, jQuery, Popper.js, and Grunt (which are listed in the package.json file) when you type **npm install** in the Terminal.

You also need to create a config.json file in your root directory and paste the following into the file. You need to get a News API Key from the News API website (see link above) and then include it in the config.json file.

Here's how it should look:

```
{
   "newsAPIkey": "ADD_API_KEY_HERE"
}
```
