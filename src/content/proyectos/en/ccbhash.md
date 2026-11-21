---
updated: 2026-11-21
---

This story begins on an ordinary day in a static analysis class with Professor José Antonio Onieva, on the Expert Diploma in Reverse Engineering and Malware Intelligence.

He was explaining the kinds of hashes that exist. Among them are some designed to identify malware families: they return the same hash when two samples behave, in essence, the same way. Or at least they try to.

One called CCBHash appeared on the slides. He told us it had been developed at VirusTotal in collaboration with the University of Málaga, and that it still needed its collision tests before it could start being circulated and promoted. And then, half joking, he dropped it: he didn't have the time, but anyone who wanted to could give them a go.

The way he said it caught my attention. Running collision tests on a hash is not exactly trivial, and he said it as casually as could be, as if anyone in the field could have it sorted in a few afternoons.

But what really made me think was the part about time. I don't believe AI crossed his mind at any point. I kept wondering: why not put an agent to work on it in the background and review it when it finishes?

Since I'm convinced that with AI we can do almost anything, I couldn't turn down the invitation. I gave it a few afternoons, as a challenge, and because I liked the idea of doing some research.

I put the best models to work, but on one condition: a very strict methodology, both statistical and mathematical, so that the results wouldn't depend on what the AI believed but on what the mathematics proved. Every claim had to be checkable. That left no room for us to get it wrong.

What came out fits in one sentence: an equal signature does not imply equal behaviour. The study separates the three reasons why CCBHash gives the same signature to different functions, and backs each with examples anyone can verify. The most striking is a set of 256 functions that share a signature and return provably different results. And over a public corpus of 7.2 million functions it counts, one by one, every pair that matches.

I came to class and showed him. First came the surprise that someone had actually taken it on because of a passing remark. Then, after skimming it, that it looked very good.

And that is where I still am today, waiting for the review to finish so it can be published as a contribution to the research. In the meantime, the full study and the way to reproduce it are in the repository.
