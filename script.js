const timeNodes = Array.from(documents.querySelectorAll('[data-time]'));

console.log(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time);

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':');
    return (mins * 60) + secs;
    console.log(mins, secs);
  })

  .reduce((total, vidSeconds) => total = vidSeconds)

  let secondsLeft =seconds;
  const hours = secondsLeft / 3600;
  secondsLeft = secondsLeft % 3600;

  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);
