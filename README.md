# The Listening Room

A Hugo music gallery with a Zune inspired look, a metal spotlight, genre sections, and instant search. The collection has 66 songs: 40 exact Spotify tracks from three playlists the owner shared, plus 26 curated additions. Spotify listening history and play counts were not available, so the additions and weekly chart are editorial selections.

Playlist sources: [Collection009](https://open.spotify.com/playlist/1uVQH2mqhqMqyCLWNkh3o6), [Linkin Park Nostalgic](https://open.spotify.com/playlist/1kHKRmwYIKh1NVvMh32RXC), and a shared [Death Metal Mix](https://open.spotify.com/playlist/37i9dQZF1EIf78r65WuXwA). The Death Metal Mix may display different tracks when personalized for another listener. Each card labels its playlist source or says **Curated addition**.

## Edit the gallery

- Add or replace songs in `data/songs.yaml`. Available cover colors: `violet`, `amber`, `lime`, `blue`, `coral`, `rose`, `yellow`, `teal`, `orange`, `slate`, `red`, and `purple`.
- Set `favorite: true` and a `rank` to place a song in the metal spotlight.
- Set `weekly_rank: 1` through `weekly_rank: 10` on ten songs to build the curated **This week's top 10** section. Keep each rank unique. Update these selections weekly; Hugo does not infer play counts.
- Playlist sourced cards link to the exact Spotify recording shown in the shared playlist. Curated additions link to a Spotify search. All cards offer a YouTube Music search. The site does not host or stream audio files.
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

