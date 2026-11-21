---
updated: 2026-11-21
---

It all started out of boredom. So much for people saying it's bad to get bored now and then.

It was one of those afternoons of scrolling through Instagram and watching stories without really seeing anything, when I wandered into Notes, the feature the app had launched a few months earlier. I hated it with all my soul. I have never understood the need to share what you're thinking with everyone at all hours, and this made it even easier.

Among dozens of notes I saw one that wasn't a note but a video. A video inside Notes, which is basically the same as posting a story, but in notes. You see how little sense that makes, right?

That part really was new. And the first version of a feature tucked inside another feature that is itself new has every chance of shipping with bugs. So, with the boredom that was tormenting me that afternoon, I started looking at where that video was stored and whether I could download it. Plain curiosity, with no expectations at all.

I could. All it took was inspecting the page, copying the video's address and opening it in another tab. I downloaded it and thought that was the end of it.

The video had a song in the background that its author had added from Instagram. But when I played it on my computer, the song wasn't what I heard. I heard the real audio of the recording. You could hear people talking in the background.

And an alarm went off in my head.

In Notes a video always plays silently or with the song you picked, never with its original sound. Whoever uploads it is counting on that. Those people were talking about trivial things, but what if they had been sharing a secret? What if something intimate had been playing in the background? What you thought you had muted was still there, within reach of anyone who knew where to look.

It was a privacy problem, so I reported it to Meta's bug bounty programme.

---

Here comes the curious part, because if it weren't for my stubbornness I wouldn't have this bug acknowledged today.

They rejected the report. I had to appeal as many as three times, with videos showing the issue was real, and the answer was always the same: they couldn't reproduce it.

In a way they were right. From where they were testing, the bug didn't exist.

They never gave me details, so this is what I worked out. The audio was processed differently depending on the servers the video went through, and that depended on where you uploaded it from. If you uploaded it from Spain, the original sound stayed inside the file. When Meta's team tried from the United States, their servers cleaned it properly and there was nothing to find.

I gave them the hint: maybe it was a matter of geography. I assume they tried from another region, because in the next reply they agreed with me. They validated the bug, fixed it and awarded me $1,000.

If I learned anything, it's that "we can't reproduce it" doesn't always mean the problem isn't there. Sometimes it just means they're looking from somewhere else.

The report and the proof video are in my repository, in case you want to take a look. And no, I still don't understand Instagram Notes.
