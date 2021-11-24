# etch-a-sketch

## Description

This is a small project to practice maniulatingthe DOM based on user input with vanilla javascript. The web app relies on cursor location to flip tiles from white to black backgrounds. This allows the user to draw images with their cursors. They can erase, or clear the entire space. Theycan also adjust the size of the pixels in them image.

## Bugs

- The buttons seem to only work on second click, which is odd.
- At certain sizes, the pixels are not sizing correctly. My draw space is 500px for both width and height, and it's set up to resize based on a slider. So I just divide 500px by the size, and then it would make each box a fraction of the width. So if the size ont he slider is set to 100, then you would divide 500px by 100 and that would be the size of each box. However, some sizes seem to have issues with this.

## Access

You can access the site here, https://mcheering.github.io/etch-a-sketch/
