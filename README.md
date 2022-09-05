# jsonresume-theme-material

This is the Material theme for [JSON Resume](http://jsonresume.org/) project.
Fork of [nocturnalbeast's jsonresume-theme-material](https://github.com/nocturnalbeast/jsonresume-theme-material) with bugfixes and slight styling changes for output simplification.

![demo](https://raw.githubusercontent.com/JayCanuck/jsonresume-theme-material/master/samples/preview.png)

## Getting started

### Installation

We need to install the dependencies. Local projects/workspaces will need both `resume-cli` and this theme, `@jaycanuck/jsonresume-theme-material`.

```sh
npm install resume-cli @jaycanuck/jsonresume-theme-material
```

Resume-CLI will look for a valid `resume.json` file in the current working directory.

### Usage

This theme can be used like other themes with `resume-cli` commands. 

For serving locally:
```sh
resume serve --theme @jaycanuck/jsonresume-theme-material --port 8000
```

For exporting to PDF or HTML:
```sh
resume export --format pdf --theme @jaycanuck/jsonresume-theme-material resume.pdf
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
