
# Semicircle Progress Bar

![npm](https://img.shields.io/npm/v/semicircle-progress-bar?style=flat-square)
![license](https://img.shields.io/github/license/karamba182/semicircle-progress-bar)
![issues](https://img.shields.io/github/issues/karamba182/semicircle-progress-bar)

A customizable semicircular progress bar built for React.

## Features

- Fully customizable semicircular progress bar.
- Smooth gradient from red to green to indicate progress visually.
- Lightweight and easy to integrate into any React project.

---

## Installation

Install the package via NPM:

```bash
npm install semicircle-progress-bar
```

---

## Usage

Here’s how you can use the component in your React project:

```javascript
import React from "react";
import SemicircleProgressBar from "semicircle-progress-bar";
import "semicircle-progress-bar/styles.css"; // Import styles

const App = () => {
  return (
    <div>
      <SemicircleProgressBar points={500} />
    </div>
  );
};

export default App;
```

---

## Props

| Prop   | Type   | Default | Description                                     |
|--------|--------|---------|-------------------------------------------------|
| points | Number | `300`   | Current progress value (from 300 to 900).       |

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

