ahundredyears-thumblist-nav
===========================

AngularJS module that adds a thumblist directive which adds a horizontal scrollbar using jScrollPane.js.

Dependencies
============

- AngularJS

- jScrollPane (https://github.com/vitch/jScrollPane)

Usage
=====

HTML

```
  <thumblist-nav>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+01">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+02">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+03">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+04">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+05">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+06">
      <h4>Lorem ipsum</h4>
    </div>
    <div>
      <img src="http://placehold.it/350x100&text=thumb+07">
      <h4>Lorem ipsum</h4>
    </div>
  </thumblist-nav>
```

CSS

```
  .thumblist-nav {
    height: 200px;
  }

  .horizontal-only {
    max-height: 200px;
  }

  .jspPane > div {
    border: 1px solid #ddd;
    width: 350px;
  }

  .jspDrag {
    background: blue;
  }

  .jspDrag:hover {
    background: green;
  }
```