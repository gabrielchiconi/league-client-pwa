# My quest trying to recreate League of Legends's launcher as a Progressive Web App

Anyone who's ever played **League of Legends** knows the launcher is notoriously slow.

As developers, we know that performance is a tradeoff. If you put time into improving it, you'll take that time away from new features.

I try to be understanding as much as possible, because we all know the struggles of undermanned teams being forced to add new features before they've improved existing ones. It's the business drive added to people not caring about the launcher's performance as much as they say they do -- most people have mid- to high-end computers they game on, anyways. I don't, though, and a significant amount of people get annoyed by the game client's low performance and bugs.

So, while I know that Riot may or may not be to blame for the client's current performance issues -- you could make arguments both ways regarding its priority in their schedule -- I decided I'd try to clone the client and see for myself: **is it possible to make League's client perform better?** While it obviously is, it's unclear whether the possible improvements are large enough that Riot should devote a larger time to this task.

Even if I succeed, the results here are not to be taken as definitive proof that Riot has their priorities wrong -- my launcher clone probably doesn't have as many bindings to external APIs, OS APIs, telemetry, and legacy device support that is most likely invisible to us end users. And if I do not succeed, I hope this teaches me (and possibly others) about the real shortcomings of modern fast-development frameworks sucha as HTML5.

## Dev log

### 06/08/2020

Started working on the app. So far I've managed to make it installable as a PWA on Chrome and fixed the window size to 1280x720 (one of the available client sizes). While small for most people, it fits laptop screens and is easier for me to work with.

I've managed to clone the "Play" button and main navigation with CSS. It's not 1:1 with the current client but I don't expect anything to be during the early stages. Plus it's really close.

I'll probably switch to using React over the next few days. I didn't want to do that initially, but it's going to be easier to do all the heavy lifting with regards to navigation, component reuse, state management and whatnot.

I've already set up Typescript and ESLint to keep development fast and easy. Also, I'm using Parcel for bundling and have set up the PWA installation on desktop -- this is probably what we'll use as the basis for the launcher.
