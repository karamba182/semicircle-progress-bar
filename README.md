# Semicircle Progress Bar

![npm](https://img.shields.io/npm/v/@yurii_tokar/semicircle-progress-bar?style=flat-square)
![license](https://img.shields.io/github/license/karamba182/semicircle-progress-bar)
![issues](https://img.shields.io/github/issues/karamba182/semicircle-progress-bar)

A customizable semicircular progress bar for React, allowing you to display progress based on points with enhanced features like percentage display and customizable min/max values.

## Features

- Fully customizable semicircular progress bar.
- Smooth gradient from red to green to indicate progress visually.
- Lightweight and easy to integrate into any React project.

---

## What’s New

### Version 1.1.0

This version introduces the following enhancements:

1. #### Dynamic Props for minPoints and maxPoints
   You can now customize the minimum and maximum points directly through props:

```bash
<SemicircleProgressBar points={450} minPoints={200} maxPoints={800} />
```

2. #### Percentage Display (showPercentage)
   Added a new optional prop showPercentage. When set to true, the progress bar will display the percentage instead of raw points:

```bash
<SemicircleProgressBar points={600} showPercentage={true} />
```

3. #### Improved Styling
   • Font size for the displayed value has been increased for better readability.
   • Text color is now set to #333 for better contrast.

---

## Installation

Install the package via NPM:

```bash
npm install @yurii_tokar/semicircle-progress-bar
```

---

## Usage

Here’s how you can use the component in your React project:

### Basic Example

```jsx
import React from "react";
import SemicircleProgressBar from "@yurii_tokar/semicircle-progress-bar";

const App = () => {
  return <SemicircleProgressBar points={500} />;
};

export default App;
```

### Advanced Example

```jsx
import React from "react";
import SemicircleProgressBar from "@yurii_tokar/semicircle-progress-bar";

const App = () => {
  return (
    <div>
      {/* Example with customized min/max points */}
      <SemicircleProgressBar points={700} minPoints={400} maxPoints={1000} />

      {/* Example with percentage display */}
      <SemicircleProgressBar points={600} showPercentage={true} />
    </div>
  );
};

export default App;
```

---

## Props

| Prop   | Type   | Default | Description                             |
| ------ | ------ | ------- | --------------------------------------- |
| points | Number | `75`    | Current progress value (from 0 to 100). |

---

## Changelog

### v1.1.0

    •	Added props for minPoints and maxPoints.
    •	Introduced showPercentage prop for percentage display.
    •	Improved styling for better readability.

---

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Support

If you encounter any issues or have feature requests, feel free to open an issue [here](https://github.com/karamba182/semicircle-progress-bar/issues).
