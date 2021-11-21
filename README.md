# Mr. Robogers #
_By Cesar Lopez_

## Description ##

This website will return a string from 0 up to the number you enter. It will also replace any numbers containing 1 with "beep!", 2 with "boop!", and 3 with "won't you be my neighbor". These exceptions are written from least to most important, meaning the largest number between 3, 2, and 1 will take precedence.

## Technologies Used ##

* JavaScript
* JavaScript Dev Tools
* HTML
* CSS
* Github
* Bootstrap

## Setup Instructions ##

1. In your terminal, navigate to the directory you desire to download these files into.

2. Copy and enter this command:

```
  ** git clone https://github.com/wowgr8/mr-robogers-neighborhood **
```

3. Enter the following command:

```
  open index.html
```

## Known Bugs ##

* None

## License ##

[MIT](https://opensource.org/license/MIT)

## Tests ##



<details>
<summary>Click to see!</summary>

**Describe: mrRoboto()**

```
Test: "It should return an array with 0 if the number 0 is inputted."
Code:
mrRoboto(0);
Expected Output: 0
```

```
Test: "If the number one is entered, "Beep!" will be returned."
Code:
mrRoboto(1);
Expected Output: "Beep!"
```

```
Test: "If the number two is entered, "Boop!" will be returned."
Code:
mrRoboto(2);
Expected Output: "Boop!"
```

```
Test: "If the number three is entered, "Won't you be my neighbor" will be returned."
Code:
mrRoboto(3);
Expected Output: "Won't you be my neighbor"
```

```
Test: "The numbers above will take presedence from largest to smallest by rearanging if/else order."
Code:
mrRoboto(13);
Expected Output: ....'9', 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor"
```
</details>

## Contact Info ##

Cesar Lopez <Lopez.cesar.aug@gmail.com>
Github: https://github.com/wowgr8




