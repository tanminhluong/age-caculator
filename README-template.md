# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Javascript

### What I learned

Gain knowledge about form validation

```js
function validator() {
  let dateValue = inputDay.value;
  let monthValue = inputMonth.value;
  let yearValue = inputYear.value;
  const now = new Date();
  const curYear = now.getFullYear();
  let ok = true;
  if (!dateValue) {
    setError(inputDay, "This field is required");
    ok = false;
  } else if (dateValue < 1 || dateValue > 31) {
    setError(inputDay, "Must be a valid day");
    ok = false;
  } else {
    setSuccess(inputDay);
  }

  if (!monthValue) {
    setError(inputMonth, "This field is required");
    ok = false;
  } else if (monthValue < 1 || monthValue > 12) {
    setError(inputMonth, "Must be a valid month");
    ok = false;
  } else {
    setSuccess(inputMonth);
  }

  if (!yearValue) {
    setError(inputYear, "This field is required");
    ok = false;
  } else if (yearValue > curYear) {
    setError(inputYear, "Must be in the past");
    ok = false;
  } else {
    setSuccess(inputYear);
  }

  switch (monthValue) {
    case "04":
    case "06":
    case "09":
    case "11":
      if (dateValue > 30) {
        setError(inputDay, "Must be a valid day");
        ok = false;
      }
      break;
    case "02":
      if (dateValue > 29) {
        setError(inputDay, "Must be a valid day");
        ok = false;
      }
      break;
  }

  return ok;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Tan Luong](https://www.your-site.com)
- Frontend Mentor - [@ytanminhluong](https://www.frontendmentor.io/profile/tanminhluong)
