# Starting a project with typescript + react native + react web

Hi there, my name is Damon Smith, web engineering lead at Sportsbet, where we've been super busy building new web and native apps in React. Sportsbet really seems to want features built in lockstep across web, mobile-web, iOS and Android, so we experimented heavily with approaches to a React shared codebase for cross-platform development, and this talk is about how we did that - a shared codebase for React DOM and Native.

This demo aims to give you a bit of a feel for how you would develop in a codebase that generates a web app and a native app at the same time. Now, last time I was here a few months ago I was super impressed with the crowd debugging skills. It wasn't just syntax errors or spelling mistakes, no! The presenter was live coding and the crowd were picking up semantics and lifecycle issues, all sorts of amazing stuff.

So, I'm going to ask for a brave volunteer or two to come up here are do a live coding demo. And all of you who don't volunteer have to shout advice (politely) at them to get them through.

But first let me describe this codebase and how it works.

First of all, it's Typescript. We're big fans of Typescript. A little bit of type definition up front gives us a massive boost in quality, tooling and refactorability down the track. Also it uses MobX for it's state storage because I'm bored of Redux at work and MobX is succinct due to it's heavy use of evil magic.

Before we begin, there's one more thing I should talk about, which is which bits are shared and which bits are not shared? Lets look at the structure of this demo app:

