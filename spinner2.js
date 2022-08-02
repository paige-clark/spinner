const spinner = function(incrTime) {
  let timer = 0;
  const animationIndex = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
  for (const frame of animationIndex) {
    setTimeout(() => {
      process.stdout.write(frame);
    }, timer);
    timer += incrTime;
  }
};

spinner(300);