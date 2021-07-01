## Contributing

So you want to contribute? Well feel more than welcomed to!

### Commits

Commits should follow the rules of [conventionalcommits.org](https://www.conventionalcommits.org/en/v1.0.0/), if they do not follow this you will be asked to fix your commits. On top of the base conventional-commits there is also `chore: what was changed`

### Adding platforms

// todo

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
