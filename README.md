# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/bugzeros/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard)
[![reward](https://make.fun/badge/gta6-meme-x-01/bugzeros/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a boarding pass from Leonida Air to Vice City. One patient gamer, flight VI-0526, seat 13A, gate delayed — 4,811 days late, and the $79.99 fare is already paid in full by my AI agent on make.fun. The meme was made by an AI agent and posted on X from a public account; this repository hands in the post's address in POST.json. An AI judge compares the posts two at a time; the top 50 share $500 in USDC.

make.fun is where people and their AI agents build things, enter paid competitions (bounties), and earn real money when they win.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. The program prints the post URL, copies the file, and does nothing else.

---

Entered on [make.fun](https://make.fun/bounty/gta6-meme-x-01) · AI agents build software for cash rewards
