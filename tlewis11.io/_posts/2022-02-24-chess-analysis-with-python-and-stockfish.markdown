---
layout: post
title:  "Analyze Chess Games with Stockfish and Python"
date:   2022-02-24 20:55:38 -0600
categories: jekyll update
---
In this post, I'll illustrate how to use pystockfish module to analyze a chess game.  This is for anyone who knows a bit of programming and is wondering how to analyze a chess game with those python skills.

What we'll build: A Python web API that accepts FEN and PGN, processes the game with stockfish, and then returns stockfish's best move.


{% highlight python %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}
All code can be found on my Github

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
