# &lt;gantt-chart&gt;

![Latest Release](https://badgen.net/github/release/nextbitlabs/gantt-chart) [![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/gantt-chart)

Web component implementation of a Gantt chart.

<div align="center">


<img width="900px" src="image.png">
</div>

## Data model

```js
{
  milestones: [
    {
      id: 1,
      taskId: 6, // Graphical hint, it may be latest task in the milestone.
      title: 'Milestone A',
      date: 'July 2019', // Optional.
      additionalVerticalShift: 1 // Optional.
    },
    ...
  ],
  tasks: [
    {
      id: 1,
      title: 'task 1',
      start: 0, // Week number.
      duration: 4, // Duration in weeks.
      class: 'c1',
      progress: // Optional, defaults to 0.
    },
    ...
  ]
}
```

## Exposed attributes

* `width`: chart width in pixels
* `height`: chart height in pixels

Margins attributes help to ensure task and milestone titles are visible.

* `margin-top`: space in pixel between the top border and the first task.
* `margin-bottom`: space in pixel between the bottom border and the last task.
* `margin-left`: space in pixel between the left border and the first task.
* `margin-right`: space in pixel between the right border and the last task.

See section [Usage](#usage) for an example.

## Exposed CSS Custom Properties


* `--font-family` defaults to `sans-serif`
* `--font-size` defaults to `12px`
* `--background-color` defaults to `white`
* `--visibility-ticks` defaults to `visible`, set to `hidden` to hide the week ticks

Up to 10 classes can be passed:

* `--c1`, the task color defaults to `purple`
* `--c2`, the task color defaults to `blue`
* `--c3`, the task color defaults to `gold`

See section [Usage](#usage) for an example.

## Usage

In an html file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="module">
      import 'https://unpkg.com/@nextbitlabs/gantt-chart@1.0.2/dist/gantt-chart.umd.js';
    </script>
  </head>
  <style>
    @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
    /*
      CSS custom properties penetrate the Shadow DOM,
      they are useful to provide custom styling.
      The gantt-chart webcomponent exposes font-size and font-family custom properties.
    */
    gantt-chart {
      --font-family: 'Lato', sans-serif;
      --c1: lightblue;
    }
  </style>
  <body>
    <!-- Set component attributes -->
    <gantt-chart
      width="1150"
      height="700"
      margin-top="40"
      margin-left="40"
      margin-right="40"
      margin-bottom="40"
    ></gantt-chart>
  </body>
  <script>
    const element = document.querySelector('gantt-chart');

    // Set gantt data: tasks and milestones.
    element.data = {
      milestones: [
        {
          id: 1,
          taskId: 1,
          title: 'Milestone A'
        },
      ],
      tasks: [
        {
          id: 1,
          title: 'task 1',
          start: 0,
          duration: 4,
          class: 'c1',
          progress: 0.65
        },
      ]
    };
  </script>
</html>
```

With npm:

```sh
npm i @nextbitlabs/gantt-chart
```

See [demo](https://stackblitz.com/edit/gantt-chart-example).

## Development

Install dependencies with

```sh
npm install
```

Update build on changes with

```sh
npm run dev
```

and see updates on `./demo/index.html` running a local server from `./`.

## Release

```sh
npm run release
```

## License

This project is licensed under the MIT License. See the [license](license) file for details.
