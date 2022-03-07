---
layout: post
title:  "Analyze Chess Games with Stockfish and Python"
date:   2022-02-24 20:55:38 -0600
categories: jekyll update
---

In this post, I'll illustrate how to use pystockfish module to analyze a chess game.  This is for anyone who knows a bit of programming and is wondering how to analyze a chess game with those python skills.

What we'll build: A Python web API that accepts FEN and PGN, processes the game with stockfish, and then returns stockfish's best move.

Access all the code on my [Github repo](https://github.com/tlewis11/chess-analysis/tree/master/engine)