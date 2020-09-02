# code-quiz

For the resubmission of this assignment, I worked for nearly 6 hours trying to figure out the proper Javascript to use. I also learned I needed two seperate JS and HTML files to make a highscores page. Unfortunately, I keep getting some bizzare and infuriating
error that is completely screwing up the Initials submission button as well as the return to quiz button. I worked for multiple hours over the last few days on it but can't seem to figure out the problem. What I did manage to do was get the quiz itself and the "carousel" function properly working, which was a big plus for me. I had help from classmates but I was ultimately able to figure out what needed to be done.

I utilized many variables and queryselector to ensure the proper elements were returned. Then I created an array that encompassed the questoins and answers of the quiz. After that, I created a getElementById on click function to start the quiz.

I created two variables and set them equal to 0 and false so that when the timer hits 0, the quiz ends. I then create a function that multiplies the number of questions I have by 8, essentially giving the user 8 seconds per question. The rest of the code in this section is dedicated to the timer properties, making sure there's text next to the timer and text that alerts when the user's time is up.

I coded an if else statement to target the question array and link it to the answer list so the buttons with the answers on them work properly. Then I coded an eventlistener for a click function that sets an attribute making green text saying correct pop up if the answer is right, and vice versa with red incorrect text if the answer selection is wrong.

The show results function is where I had the most trouble. I got help with it and made sure the JS and HTML was correct but for some reason I keep getting the damn error notification I mentioned earlier.

 https://astoiano13.github.io/code-quiz/
