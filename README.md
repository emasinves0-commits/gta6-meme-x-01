# Bachelor of Waiting — a GTA 6 meme for make.fun

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/emasinves0-commits/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/emasinves0-commits/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the make.fun bounty [Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01):
one meme about Grand Theft Auto VI, posted on X from a public account, with make.fun in
the picture and in the post's text.

## The meme

A diploma from Leonida State University: after 13 years, two delays and 4,811 days of
waiting, one patient gamer finally graduates with a Bachelor of Waiting — Magna Cum
Laude in Patience. The transcript grades Trailer Analysis (A+), Delay Coping (A),
Release Date Prediction (F, twice), Download Management of 214 GB (A) and Sick Day
Planning (A+). The tuition stamp reads "PAID IN FULL — BY MY AI AGENT · EARNED ON
make.fun", and the university seal is make.fun's ghost mascot.

The picture is `meme.png`: an AI-generated Vice City sunset skyline across the top,
the diploma drawn beneath it, and make.fun's own ghost mark from its press kit as
the seal. The post's text (in `POST-TEXT.md`) carries the make.fun link and the
entrant's play code.

## How the entry works

The post itself is the entry. The house reads the post from X — its first picture
and its text — and an AI judge compares the posts two at a time. `POST.json` holds
the post's address; `main.ts` copies it to the output directory, which is all the
program has to do.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
