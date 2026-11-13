# The Listening Room

A Hugo music gallery with a Zune inspired look, an HMX identity, genre sections, a curated weekly top 10, and instant search. The collection has 164 songs grouped into 19 musical genres. It includes 40 exact Spotify tracks from three shared playlists, all 26 tracks from the eight-track editions of Jagjit Singh's *Saher* and *Face To Face* and the ten-track *Dard-E-Jigar* compilation, and 98 curated additions. Spotify listening history and play counts were not available, so the additions and weekly chart are editorial selections.

Playlist sources: [Collection009](https://open.spotify.com/playlist/1uVQH2mqhqMqyCLWNkh3o6), [Linkin Park Nostalgic](https://open.spotify.com/playlist/1kHKRmwYIKh1NVvMh32RXC), and a shared [Death Metal Mix](https://open.spotify.com/playlist/37i9dQZF1EIf78r65WuXwA). The Death Metal Mix may display different tracks when personalized for another listener. Jagjit Singh album tracklists follow [Saher](https://music.amazon.com/albums/B074W12PN4), [Dard-E-Jigar](https://music.amazon.com/albums/B004X98HCC), and the eight-track [Face To Face](https://www.qobuz.com/us-en/album/face-to-face-jagjit-singh/0886443571020). Each card labels its source or says **Curated addition**.

## Edit the gallery

- Add or replace songs in `data/songs.yaml`. Available cover colors: `violet`, `amber`, `lime`, `blue`, `coral`, `rose`, `yellow`, `teal`, `orange`, `slate`, `red`, and `purple`.
- Set `weekly_rank: 1` through `weekly_rank: 10` on ten songs to build the curated **This week's top 10** section. Keep each rank unique. Update these selections weekly; Hugo does not infer play counts.
- Playlist sourced cards link to the exact Spotify recording shown in the shared playlist. Album tracks and curated additions link to a Spotify search. All cards offer a YouTube Music search. The site does not host or stream audio files.
- Each song has one genre. Artist names and albums appear on the cards but are not collection groups. Green Day is filed under Pop Punk, Skrillex under EDM, and Creed and Nickelback under Post-Grunge. The NFS track is filed under Hip-Hop, with its soundtrack origin kept in the album field.
- To add a new genre, add it to `params.genres` in `hugo.toml`. Its count and filter button are generated automatically.
- Change `params.curator`, `params.homeURL`, and the site title in `hugo.toml`. Edit the introduction, credits, and About copy in `layouts/index.html`. The HMX logo and favicon are in the template and `static/images/favicon.svg`.

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

