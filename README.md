# Browser Technologies @cmda-minor-web 1920

A demo based on the use case: I want to be able to design, print, save, and use my own t-shirt-with-nerdy-text and i want to work it again later.


# Nerdy shirt ink 

<img width="" alt="725e7d23418c8ae0ab598082b050dc7c" src="https://user-images.githubusercontent.com/43183768/77921401-099f7380-72a0-11ea-8bdc-d02ed3e08cdd.png">



## introduction 

Nerdy shirt ink is made as part of a course from @cmda-minor-web 1920. In this course i had to build a website for all the users, With the core funcitions still work in (almost) all browser. Build the site based on progressive enhancement.

## Nerdy shirt ink
With nerdy shirt ink you can design you very own a nerdy shirt. you can add text and select text colors, font ,shirt color. Also you can save your design to edit it later and print the design

![IMG_20200330_161805](https://user-images.githubusercontent.com/43183768/77923067-2d63b900-72a2-11ea-8c36-ff9cd221a8b9.jpg)


## Progressive enhancement

We start with just a simple experiences (Plain html) so the core function will work. and then adding styling and JS to make the experiences even better.  

#### Functional and reliable

Turning off JS and css

<img width="" alt="8898dcffb9365ce1663c5e266fb0e752" src="https://user-images.githubusercontent.com/43183768/77923670-0d80c500-72a3-11ea-95b9-5baa6fae9be7.png">

It looks boring and ugly but it work with all browsers that are used. Because js is disabeld the live preview dont work. But the input fields are visible so the user can see what he choose. You can still save the url and continue later. 

#### Usable

Turning on CSS 

<img width="" alt="3bb6f22f53c71e0806f16c76a9ca49d6" src="https://user-images.githubusercontent.com/43183768/77924522-0908dc00-72a4-11ea-86ee-2745fe7aa668.png">

It looks good. the buttons have colors and you see the fonts awesome!! but you still see a shirt it doens't do anything.


<img width="" alt="06458ecf6c766aef7a904d5071f1bbac" src="https://user-images.githubusercontent.com/43183768/77925079-b8de4980-72a4-11ea-8100-1d25efa132eb.png">

Also if you save your design you will get a message that you can copy the url to used ot later

#### Pleasurable
Now turn on CSS and JS 

<img width="" alt="725e7d23418c8ae0ab598082b050dc7c" src="https://user-images.githubusercontent.com/43183768/77921401-099f7380-72a0-11ea-8bdc-d02ed3e08cdd.png">

Now when you select a color the shirt changes. 

<img width="" alt="7ef0d8ac7feb9ee64354882237da2c6e" src="https://user-images.githubusercontent.com/43183768/77925758-8d0f9380-72a5-11ea-8100-d4c504fe8dcb.png">

Wow you get a link. 


## Feature detection

For the most part i use tags/code that will work on (almost) every browser but there are so fallbacks that i have implemented.

#### HTML
The only thing what i come across is that IE11 doesn't support ```<main>``` tag but it will go to the next tag and that is ```<section>


#### CSS and JS

1. Font 

If a browser can't read a custom font it will use the font that is used for the browser as a fallback. (IE11 cant read custom fonts)
but just te be sure i added ```sans-serif``` as a fallback. 

```css
font-family: Streamster, sans-serif;
```
2. before and after

<img width="" alt="9a7b97de12e3b7b4f5db9286f1b7a2cd" src="https://user-images.githubusercontent.com/43183768/77926293-3fdff180-72a6-11ea-81ac-92b959c821bd.png">


unfortunately  IE  doesn't support this so the radio buttons cant't be styled.  What i did. In JS it create a class that targets the span tag for the hover function. (on edge this will not work because it can read this JS code)
```js
x = document.querySelectorAll(".label-text");
    for (i = 0; i < x.length; i++) {
      x[i].classList.replace("label-text","label-text-active");
    }
```
And in css i made sure the the span text is visible 
``` css
input ~ span.label-text {
    position: relative;
    color: #fff;
    left: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 1;
    z-index: 0;
    transition: 0.3s ease-in-out 0s;
    border: none;
    border-radius: 0.5em;
    text-align: center;
    font-size: medium;
    z-index: 10;
    display: inline;
    top: -2px;
    font-size: 0.9em;
}
```
3. Gradient

Gradient dont work on safari

```css
background: #202024; /* fallback */
background-image: linear-gradient(45deg,#380CD6 10%, #E50AE7 50%, #380CD6 100%);
```

4. EM
IE 6-8 doens't support em and rem

```css
body > section {
    padding-top:112px;
    padding-top: 7em;
}
```

4. Firefox/edge Before and after (Input)
To use ::before or ::after styling for radio buttons on firefix it needs a ```css -moz-appearance: initial;``` in order to style it . [The -moz-appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance) The -moz-appearance CSS property is used in Gecko (Firefox) to display an element using platform-native styling based on the operating system's theme. without ```css -moz-appearance: initial;``` the radio buttons will remain grey. for Edge is this not possible

```css
input[type="radio"] {
    position: relative;
    -moz-appearance:initial
}

::before
 {
    content: "";
    position: absolute;
}

```

## Browsers and devices
DesktopBrowser: Google Chrome 80

DesktopBrowser: Firefox 74.0

DesktopBrowser: Edge 18

⋅DesktopBrowser: IE 11

DesktopBrowser: Opera 67.0

DesktopBrowser: Brave (Chrome 80)

Apple macbook: Safari 11.1.2

Apple Ipad: Safari IOS 13.3

Apple Iphone: Safari IOS 13.3.1

Oneplus 6: Android 10

[Screenshots](https://github.com/TheKevSter35/browser-technologies-1920/wiki/Browser-tests)

### Backlog
- [x] start by making the html page
- [x] basic CSS
- [X] Use npm
- [x] Make a start screen so user can make a new shirt or edit a old one.
- [x] Update home page
- [x] Finish design page
- [x] Print the design 
- [x] save the design (unique code or save the link)
- [x] JS make it more interactief 

### Wishlist
- [ ] Add a clipboard for the link
- [ ] if user choose a yellow shirt he can't use white text (js)
- [ ] Split the form in a progressive disclosure to make it in layers


