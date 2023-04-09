# Space-travel-website

A space travel website build on HTML, CSS and Javascript

## What is CSS Reset?

A CSS Reset (or “Reset CSS”) is a short, often compressed (minified) set of CSS rules that resets the styling of all HTML elements to a consistent baseline.

As every browser has its own default ‘user agent’ stylesheet, that it uses to make unstyled websites appear more legible. For example, most browsers by default make links blue and visited links purple, give tables a certain amount of border and padding, apply variable font-sizes to H1, H2, H3 etc. and a certain amount of padding to almost everything. Ever wondered why Submit buttons look different in every browser?

Obviously this creates a certain amount of headaches for CSS authors, who can’t work out how to make their websites look the same in every browser.

Using a CSS Reset, CSS authors can force every browser to have all its styles reset to null, thus avoiding cross-browser differences as much as possible.

## What are Utility Classes?

It allows you to define a library of property: value pairs that power all your styles, managed from a single directory.Utility classes are self-descriptive, single-purpose CSS classes:

```css
.flex {
  display: flex;
}
```

Developers use these functional classes to build without writing additional CSS because if the style is in the library, you can use it over and over and over…

```html
<aside class="flex flex-column bg-black">
  <div class="flex align-center justify-center">
    <img src="#" />
  </div>

  <div class="flex flex-column">
    <h1>Jamie Thrift</h1>
    <p class="flex align-center">
      <svg>…</svg>
      Head of HR
    </p>
  </div>
</aside>
```

The classes tell us exactly what they do, so developers can visualize how these elements will be laid out instead of needing to scan through the underlying CSS.
