# Games Of Guesses! Website Project - Tunahan Tarhan
A modest school project I did as a second year student back in 2023.

## What's "Games of Guesses!"?

"Games of Guesses!" is a website that contains a couple of mini-games and a random music album suggestion page.

## Main Website Design (on every page)

- Select a color scheme as default style.
- Select fonts and button styles will be used on every page. 
  (default characteristic style of website)
- Make a template for the pages which is divided into 3 areas (divs):
  - Header section
  - Main section
  - Footer section
- Make a header section which will be STABLE through pages of this website.
  - Add an icon on the most left in header section.
  - Add site name with custom characteristic font of website in the center of header section. 
    (on-click ==> GO TO MAIN PAGE).
  - Add dark mode / light mode switch with their own icons on the right most in header section.
- Make a main section which context inside it will CHANGE through the pages of this website.
- Make a footer section which will be STABLE through pages of this website.

## To-Do-List:

## Home Page : Games of Guesses!

- Make welcoming texts
- Make a window alert at the start of website
  - Take name of the user.
  - Greet user with name in welcome text.
- Write website name in big fonts (add animation)
- Make redirection buttons (with animations) to sub-pages of website (games & other)

## Game: Guess By Flag 🏳️
- Make start game page with a button.
- Show current question number (as questionNumber/5).
- Show timer.
- Give random country flags.
- Take user string inputs.
- Push user answers and correct answers into two different arrays on clicking 
  "Make Guess" button. ("Finish" button on the last question)
- Return user "score" out of 5 (as score/5).
- Return elapsed time between clicking "Start Game" and "Finish" buttons.
- Return a "Restart" button.
- Make final general styling changes. 

## Game: Guess By Emoji 🔍
- Make start game page with a button.
- Make a timer which starts to count on-clicking "Start Game" button, 
  and stops when the last question is answered.
- Show current question number same as in the Guess By Flag game.
- Show timer.
- Give random group of emojis to guess in each question.
- Make option buttons which submits user answer on-click.
- After clicking on an option:
  - If corrects --> score++
  - If it wasn't the last question --> questionNumber++
  - Give next emojis & multiple choices.
- On result:
  - Return score out of 5 (as score/5 again).
  - Return elapsed time between starting and finishing game.
  - Show a "Restart" button same as in previous game.
  - Style result section.

## Home Page : Feeling Lucky!

  - Two buttons:
    - Music Recommendation Tool
    - Rabbit hole
  - Rabbit hole redirection is a 404 screen, I want to have a stylish one.
    - a "follow the white rabbit" gif in the background (dimmed/blurred).
    - print that the rabbit hole goes nowhere.
    - return to back-page button.

## Tool : Recommend a Music Album

- Make a language selection with only one option/value, which is English, to show the language.
- Make user pick selections with a drop down menu: (</select/> attribute)
    - genre (rock or pop)
    - mood (energetic or calm)
- Add spotify preview widget under the album cover.
- Make user able to want another album recommendation with the selected genre & mood.
- Make user able to go back and arrange the genre & mood selections again.

