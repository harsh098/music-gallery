# The Listening Room

A Hugo music gallery with a Zune inspired look, a metal spotlight, genre sections, and instant search. The included songs are draft picks based on the genres named in the chat, not verified against the owner's Spotify listening history. Make the gallery yours by editing `data/songs.yaml`.

## Edit the gallery

- Add or replace songs in `data/songs.yaml`. Available cover colors: `violet`, `amber`, `lime`, `blue`, `coral`, `rose`, `yellow`, `teal`, `orange`, `slate`, `red`, and `purple`.
- Set `favorite: true` and a `rank` to place a song in the metal spotlight.
- Each card links to Spotify and YouTube Music search results for that song and artist. For an exact recording, add `spotify_url` or `youtube_music_url` to the song entry. The site does not host or stream audio files.
- To add a new genre, add it to `params.genres` in `hugo.toml`. Its count and filter button are generated automatically.
- Change `params.curator` and the site title in `hugo.toml`. Edit the introduction and About copy in `layouts/index.html`.

## Run locally

Install [Hugo](https://gohugo.io/installation/) and run:

```sh
hugo server --renderToMemory
```

Open the local URL printed by Hugo. Build static files with `hugo --minify`.

## Publish with GitHub Pages

1. Create a GitHub repository, commit this project, and push it to `main` or `master`.
2. In **Settings → Pages**, choose **GitHub Actions** as the build and deployment source.
3. The workflow in `.github/workflows/hugo.yml` builds and publishes on each push to either branch.

The workflow computes the correct base URL from the repository name, so it works for both project sites and `<username>.github.io` repositories. The `baseURL` in `hugo.toml` targets the local preview; pass `--baseURL` with your final URL if you build locally for production. In-memory preview keeps a simultaneous production build from replacing the pages served by the dev server.

