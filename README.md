# jQuery Center Plugin

A jQuery plugin that centralizes DOM element.

## Description

This simple plugin helps you centralize your DOM element against their parent element or the window. You can also specify the top of the DOM element by passing customized settings.

## Requires
  - jQuery 1.2.6+

## Browser Compatibility
  - [Firefox](http://mzl.la/RNaI) 2.0+
  - [Internet Explorer](http://bit.ly/9fMgIQ) 6+
  - [Safari](http://bit.ly/gMhzVR) 3+
  - [Opera](http://bit.ly/fWJzaC) 10.6+
  - [Chrome](http://bit.ly/ePHvYZ) 8+

## Installation
  - First, make sure you are using valid [DOCTYPE](http://bit.ly/hQK1Rk)
  - Include nessesary JS files

<!-- -->

      <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
      <script type="text/javascript" src="path-to-file/jquery.center.js"></script>

## Options

#### against
  - description: the element that the DOM element centralize against to 
  - data type: string
  - default value: 'window'
  - possible value: 'window', 'parent', or '.someTarget'

#### top
  - description: you can specify the top of the target element
  - data type: integer
  - default value: false
  - possible value: 13, 20, 36 ... any number you want

#### topPercentage
  - description: or specify the top in percentage of the target element
  - data type: float
  - default value: 0.5
  - possible value: 0.1, 0.4, 0.8 ...

## Usage
> Example code:
      
      // centralize #some-element against the window
      $( '#some-element' ).center();
      
      // centralize .some-element against its parent element
      $( '.some-element' ).center({
        against : 'parent',
        top: 10
      });
      
      // centralize .some-element against '.some-target-element'
      // !IMPORTANT '.some-target-element' must be ".some-element"'s parents
      $( '.some-element' ).center({
        against : '.some-target-element',
        topPercentage : 0.4
      });

## Demo
 - Please see demo.html
 - Online version please take a look at [this](http://dreamerslab.com/demos/centralize-html-dom-element-with-jquery-center-plugin)

## Documentation
  - There is a syntax highlight version, please see [this post](http://dreamerslab.com/blog/en/centralize-html-dom-element-with-jquery-center-plugin/)
  - For chinese version please go [here](http://dreamerslab.com/blog/tw/centralize-html-dom-element-with-jquery-center-plugin/)


## License

The expandable plugin is licensed under the MIT License (LICENSE.txt).

Copyright (c) 2011 [Ben Lin](http://dreamerslab.com)