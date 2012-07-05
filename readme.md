## About

This is only a demo showing how to recreate the famous Path / Facebook
iOS app -like menu. It relies on iScroll 4 (for inner scrolling content)
and jQuery Pep (for left/right dragging with momentum). See credits
section below for detailed informations and links.

## Who is it for ?

It targets front-end developers that want to use this kind of navigation
in their mobile web apps. Just download it, customize it and use it for
your projects.

## How does it work ?

Pretty simple ! There are 3 main layers : left menu, right menu and main
content. They’re all absolute positioned at (0,0,0,0). When opening /
closing / dragging, the “left” attribute of the main wrapper is updated
and so reveals the menus. One of the menus is then shown according to
the direction (left or right).

## What next ?

You can report bugs or suggest features on the project repository.   
 You can also help the project getting better. Just fork it on Github
and start coding.   
 If you used it for your project, drop me a mail / tweet and I’ll add a
screenshot and a link to it here.

## Works in...

Desktop : Chrome + Safari + Firefox + Opera   
Mobile : iOS 5.X Safari + iOS 5.x Chrome + Android 2.x

## Credits

-   [jQuery Pep](http://pep.briangonzalez.org/)
-   [iScroll](http://cubiq.org/iscroll-4)
-   [iPhone holding hand by Mike Hall on Dribbble](http://dribbble.com/shots/381876-iPhone-holding-hand-free-PSD)
-   [Horizontal swipe by P.J. Onori on Thenounproject](http://thenounproject.com/en-us/noun/horizontal-swipe/#icon-No2924)

## Todo list

-   Use “overflow-y: scroll;” instead of using iScroll when supported
    (eg. iOS5).
-   Use “translate” instead of “left” attribute for better performances
    (or switch back for wider compatibility).
-   Allow clicking on main content to close menus again (at the moment,
    conflict with drag event ; ([see issue here](https://github.com/briangonzalez/pep.jquery.js/issues/14)).

## Changelog

-   (july 2012) — 1.0 : release