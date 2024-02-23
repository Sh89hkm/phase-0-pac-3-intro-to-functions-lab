function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

const string = "Let's have dinner together!";
console.log(shout(string));
console.log(whisper(string));
logShout(string)
logWhisper(string)
console.log(sayHiToHeadphonedRoommate(shout(string)));
console.log(sayHiToHeadphonedRoommate(whisper(string)));
console.log(sayHiToHeadphonedRoommate(string));
