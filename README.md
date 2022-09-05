# jsonresume-theme-material

This is the Material theme for [JSON Resume](http://jsonresume.org/) project.
Fork of [nocturnalbeast's jsonresume-theme-material](https://github.com/nocturnalbeast/jsonresume-theme-material) with bugfixes and slight styling changes for output simplification.

![demo](https://raw.githubusercontent.com/JayCanuck/jsonresume-theme-material/master/samples/preview.png)

## Getting started

### Install Node.js

Get the latest LTS/current installer for your platform from the official Node.js website [here](https://nodejs.org/en/download).

### Install resume-cli (optional, but recommended)

Once Node.js is installed, run the command `npm install -g resume-cli`.

**Please note:** this is not necessary since the next step(s) take care of the same, but is recommended when working with other JSON Resume themes.

### Download theme

Do **either** of the following:

- Clone the repository using the command `git clone https://github.com/nocturnalbeast/jsonresume-theme-material`
- Download a [copy of the repository](https://github.com/nocturnalbeast/jsonresume-theme-material/archive/master.zip).

### Install npm packages

We need to install the dependencies. `cd` into the theme folder we just downloaded and run:

```sh
npm install
```

This will read the local `package.json` and install the packages listed under `dependencies`.

### Hosting

While inside the theme folder, run the following command:

```
npm run serve
```

You should now see this message:

```
Preview: http://localhost:4000
Press ctrl-c to stop
```

Your default browser should open with the resume rendered from the sample `resume.json` included within the repository.

### Exporting

While inside the theme folder, run the following command:

```
npm run export
```

You should now see this message:

```
Done! Find your new .pdf resume at:
 ...path_to_repository/resume.pdf
```

## Modifying the theme / Theme development

The theme is structured as follows:

- `package.json` - The NPM definition of the theme (this theme) package.
- `index.js` - The entrypoint for JSON Resume tool.
- `main.hbs` - The main template, uses [Handlebars](https://handlebarsjs.com/) as it's templating engine.
- `partials/*.hbs` - The sections of the Handlebars template, included within the `main.hbs` file.
- `style.css` - The material theme CSS definition.
- `resume.json` - The sample resume data containing all fields that are supported within this theme.

### Editing resume.json

A sample `resume.json` file has been included within this repository. This contains all the fields that are supported within this theme.

Once you modify the data within the `resume.json` file and save it, the brower will reload if the server is running.

### Embedding HTML content

In this template, only `summary` can host HTML content. This can be done like so:

```json
{
    "name": "Heading",
    "summary": "Point 1<br>Point 2<br>Point 3"
}
```
