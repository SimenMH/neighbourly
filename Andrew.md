# Andrew's note: 

Today we start the legacy project. This is a very different project than what you are used to and what you will be doing in the thesis. This time we're digging into someone else's code with the intention of improving it. Improving doesn't always mean new features, it often means refactoring code to make it cleaner, more readable and more reliable.

## Refactoring: 
Readable well laid out code is what we should be aiming for here. This means meaningful variable names, breaking down large code blocks into smaller modular ones and linking them together, breaking down components when needed, improving data-flow or implementing a state management system. Depending on the project you might need to do any number of these (and any more you think of).
The main purpose of this is two fold: To give you practice going into someone else's code (this is what you will be doing on the job most of the time) and to make you see the importance of what's mentioned here so that when you next make a project, you implement it yourself.

## Testing :
Testing is a fundamental skill that may seem less exciting than creating new things, however, it's one of the most important skills you can learn. When you have a production ready app, you simply cannot have unreliable code. Testing enables you to have confidence in what you deploy, you test different edge cases, you test what the user see's on the page as a result of a button click, you test what happens when your component is given different prop values, you test that a function has been called after a user click etc.....

Knowing what to test is one of the hardest things to learn. Tests shouldn't be there for the sake of having them and more tests doesn't always mean more robust code. Like everything, there are many different theories in what's best to test, but a reliable source and opinion is K.C.Dodds . Dodds is a well respected figure in the community who has focused his career on testing. I'll post some links below to some useful content regarding him. His theory is that you test what matters....... and what ultimately matters most? The User. What matters most is that things on the page are exactly as they should be when they're meant to be. When components are passed different prop values, does the user see the desire result? When a user fills out a form and hits submit, has the submit function been called and is the DOM meant to change as a result? For more info, feel free to look at the links below.

## Tools :
Like all things, depending on what projects you have chosen, you may require different tools. You'll see a lot of conflicting documentation regarding what to use, with words like `Enzyme`, `Jest`, `ReactDom` and `Testing-Library`. Take a little look to briefly look into each and don't just copy/paste code snippets you see.... Look at the documentation at what methods that code snippet is using and find out what they're doing. For React/React-Native, I personally like Jest and React-Testing-Library (there are also X-Testing-Library for other frameworks).  K.C.Dodds created the testing-library brand to follow his personal theory, this is a theory I personally agree with (disclaimer, this is my personal opinion and not related to CodeWorks or anyone else, don't take it as gospel). I'll post links below for these/material related to them.

### Code Coverage:
 Code coverage is a tool that gives you states/percentages of how much of your codebase is being tested. It's a solid tool for giving you an idea of where you can improve etc.  However, code coverage isn't everything, what you are testing is far more important than getting that sweet sweet :100:p'. Don't aim for 100%, test the correct things.
 
 ### GIT:
   I can't say enough about how important working as a team is important whilst using GIT. Don't work on the same code at the same time, use separate branches for each section, commit often and merge often. GIT Conflicts happen when you don't do this, when you push code that conflicts each other, it's a pain to sort out and can easily take up a whole day, you've been warned!

I advise that you create a branch called develop off of the main branch. You merge your branches into this one to make sure you have no conflicts and when you know it's working as intended, you can then merge this into main . This ensures that you will always safely have a working main .

## Links:
- [Frontend Masters - KC.Dodds](https://frontendmasters.com/courses/testing-react/) (says out of date, however still very very useful)
- [Testing-Library Docs](https://testing-library.com/docs/react-testing-library/intro/) - use them!
- [K.C.Dodds Blog](https://kentcdodds.com/blog/?q=testing) - covers a lot of topics
- [How to know what to test](https://kentcdodds.com/blog/how-to-know-what-to-test)
- [fix-the-not-wrapped-in-act](https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning) (some of you may thank me for this later :joy:)

### Bonus Links:
For those of you implementing Typescript in the legacy:
- [Frontend Masters - Typescript basics](https://frontendmasters.com/courses/typescript-v2/)
- [Frontend-Masters - Production typescript](https://frontendmasters.com/courses/production-typescript/)


I would urge you all to spend an hour or two this morning looking over some material, it will save you far more time in the long run and give you a much less frustrating week (for those of you that made it through this essay..... I'm curious, those of you that have read this, react with a bug).
Anyway, that's enough from me. Happy coding 