![](public/alt.svg)

#### A simple and elegant solution to images for social media!

---

Presence is a service that generates SVG images for social medias. It does this by accessing the endpoint, `presence.im/api/:platform/:type/:param`, where the API will return the image via headers. If you wish for base64 encoding, then append the `?type=base64` query to the end of the URL to obtain the base64 encoding of the image like so:

`GET https://presence.im/api/twitter/user/atmattt?type=base64`

```json
{ "data": "data:image/svg+xml;base64,PHN2ZwogICAgICB4bWxucz0iaHR..." }
```

[![presence](https://presence.im/api/twitter/user/atmattt)](https://twitter.com/atmattt)

Presence also comes with themes! By adding the following queries to the endpoint you can change what some things look like!

| query         | type              | Outcome                                                                                                           | Notes                                                            |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| type          | "base64" \| "png" | returns base64 encoding of image or png image.                                                                    | Only accepts 'base64' or 'png', else it will return just the svg |
| rounded       | boolean           | rounds the corners of the image.                                                                                  | n/a                                                              |
| theme         | string            | uses theme presets located within [themes.json](./themes.json).                                                   | n/a                                                              |
| icon          | hex               | changes the icon colo(u)r of the current platform.                                                                | colo(u)r cannot contain "#", ex. good: "c4c4c4", bad: "#c4c4c4"  |
| bg            | hex               | changes the background colo(u)r.                                                                                  | "                                                                |
| text          | hex               | changes the colo(u)r of any text that isn't specified otherwise by other queries.                                 | "                                                                |
| desc          | hex               | changes the description/bio colo(u)r.                                                                             | "                                                                |
| stats         | hex               | changes the colo(u)r of the svg or the text that accompanies stats_text.                                          | "                                                                |
| stats_text    | hex               | changes the colo(u)r of the text that accompanies any number or svg of statistics.                                | "                                                                |
| accent        | hex               | changes the colo(u)r of the border of any secondary info (ex. github/card, twitter/card).                         | "                                                                |
| show_language | boolean           | toggles the visibility of language on GitHub images.                                                              | n/a                                                              |
| show_icon     | boolean           | toggles the visibility of the icon on spotify/song & spotify/track                                                | n/a                                                              |
| top           | boolean           | only appears on spotify/song & spotify/track, changes the position of song text to the top.                       | n/a                                                              |
| bottom        | boolean           | only appears on spotify/song & spotify/track & discord/guild, changes the position of text to the bottom.         | n/a                                                              |
| index         | number            | only appears on spotify/song & spotify/track, changes the most popular colo(u)r from the image as the background. | n/a                                                              |

- _Please note that all queries are optional._

### Examples

`GET https://presence.im/api/github/user/punctuations?bg=282e33&text=fff&stats_text=c9c9c9`

![](https://presence.im/api/github/user/punctuations?bg=282e33&text=fff&stats_text=c9c9c9)

---

`GET https://presence.im/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?index=1&type=base64`

```json
{ "data": "data:image/svg+xml;base64,CiAgICA8c3ZnCiAgICAgIHhtbG5zPSJodHR..." }
```

base64 used as src:

![](https://presence.im/api/spotify/track/3dhjNA0jGA8vHBQ1VdD6vV?index=1)

### Contributing

If you want to contribute to this project, fix some bugs, add some platforms, or other things, you can visit the [Contributing Guide](./CONTRIBUTING.md).

### Contributors

([emoji-key](https://allcontributors.org/docs/en/emoji-key))

- [Tika](https://github.com/tika) 🎨
- [Conrad](https://github.com/cnrad) 💻 🤔 [📓](https://github.com/punctuations/presence/commit/aed0a147e94225480e03dbee3e833ca282254f84) [📖](https://github.com/punctuations/presence/pull/12)
- [Fish](https://github.com/rpxs) 🤔 📓 [📦](https://github.com/punctuations/presence/tree/main/lib/assets/producthunt)
- [Jack](https://github.com/jacc) 🤔
- [Ven](https://github.com/ven) [💻](https://github.com/punctuations/presence/commit/9cdf8664861e17cde20abd3b31f1aa1bcb1001c0) 🤔 📓
- [Jamie](https://twitter.com/jamiepine) 🎨 📓
- [Haden](https://github.com/hadenpf) 🎨 🐛
