## Contributing

So you want to contribute? Well feel more than welcomed to!

### Commits

Commits should follow the rules of [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/), if they do not follow this you will be asked to fix your commits. On top of the base conventional-commits there is also `chore: what was changed`

### Adding platforms

To add a platform you can either make an issue and use the platform request template, or if you want to add it yourself you can get started by going to `pages/api` which from there you can make a directory of the platform name, in the directory create another directory of the type of image that will be returned like `user`, `channel`, or `song`. Once you have created that you can create a dynamic route file like so: `[uname].ts`, uname meaning username. you can refer to the other files for what the contents should look like. Once everything is made you can navigate to `lib/assets` and create a directory of the name and a sub-directory of the type, within the sub-directory create a file called `image.tsx` in this file you can create the actual svg, for reference you can see the other ones

### Adding themes

To add themes you can go to `/themes.json` and add a theme by adding the following entry:

```json5
/* themes.json */
{
  themes: {
    dark: {
      bg: "#000",
      text: "#FFF",
      description: "#B4B4B4",
      stats: "#C4C4C4",
      statsText: "#646464",
      icon: "#C4C4C4",
      accent: "#9D9D9D",
    },
    "your-theme": {
      // add your theme here
      bg: "#000",
      text: "#FFF",
      description: "#B4B4B4",
      stats: "#C4C4C4",
      statsText: "#646464",
      icon: "#C4C4C4",
      accent: "#9D9D9D",
    },
  },
}
```

to see a list of available theme attributes you can go to `lib/types/ThemesTypes.ts`

### Adding theme attributes

##### What are theme attributes?

Attributes are query values used for customization with themes.

##### How can I add theme attributes?

To add attributes you can go to `lib/types/ThemesTypes.ts` and then add your theme attribute to the `/themes.json` file with just a default value of `#FFF`.
