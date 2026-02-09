let isMuted = false;

const crossfadeToLana = () => {
  const pvz = document.getElementById("bgMusic");
  const lana = document.getElementById("lanaMusic");
  if (!pvz || !lana) return;
  lana.volume = 0;
  lana.currentTime = 0;
  lana.play().catch(() => {});
  const vol = { pvz: pvz.volume, lana: 0 };
  TweenMax.to(vol, 1.2, {
    pvz: 0,
    lana: isMuted ? 0 : 0.35,
    onUpdate: function () {
      pvz.volume = vol.pvz;
      lana.volume = isMuted ? 0 : vol.lana;
    },
    onComplete: function () {
      pvz.pause();
    },
  });
};

// Animation Timeline
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const hbdText = hbd.innerHTML.trim();
  const hbdWords = hbdText.split(/\s+/);
  hbd.innerHTML = hbdWords
    .map((word) => `<span class="wish-hbd-word">${word}</span>`)
    .join(" ");

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg",
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg",
  };

  const tl = new TimelineMax();

  tl.to(".container", 0.1, {
    visibility: "visible",
  })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10,
    })
    .from(".two", 0.4, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2.5"
    )
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "-=1"
    )
    .from(".or-should-i-say", 0.7, {
      opacity: 0,
      y: 10,
    })
    .to(
      ".or-should-i-say",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10,
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10,
      },
      "+=2"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0,
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0,
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible",
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "#66bb6a",
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150,
      },
      "+=0.7"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .add(crossfadeToLana, "-=0.5")
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "#2e7d32",
      color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0,
      },
      "+=0.5"
    )
    .fromTo(
      ".sea-of-love-hearts",
      0.7,
      { opacity: 0, y: 15 },
      { opacity: 0.9, y: 0 },
      "-=0.7"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8,
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0,
      },
      "+=2"
    )
    .to(
      ".sea-of-love-hearts",
      0.7,
      { opacity: 0, scale: 0.5 },
      "-=0.7"
    )
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: Expo.easeOut,
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: Expo.easeOut,
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400,
      },
      {
        opacity: 1,
        y: -1000,
      },
      0.2
    )
    .from(
      ".girl-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45,
      },
      "-=2"
    )
    .from(".hat", 0.5, {
      x: -100,
      y: 350,
      rotation: -180,
      opacity: 0,
    })
    .staggerFrom(
      ".wish-hbd .wish-hbd-word",
      0.7,
      {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5),
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd .wish-hbd-word",
      0.7,
      {
        scale: 1.4,
        rotationY: 150,
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut,
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg",
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4,
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90,
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    const pvz = document.getElementById("bgMusic");
    const lana = document.getElementById("lanaMusic");
    if (lana) {
      lana.pause();
      lana.currentTime = 0;
    }
    if (pvz) {
      pvz.currentTime = 0;
      pvz.volume = isMuted ? 0 : 0.35;
      pvz.play().catch(() => {});
    }
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  return fetch("customize.json")
    .then((res) => res.json())
    .then((data) => {
      Object.keys(data).map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run animation only after fetch has finished, DOM is updated, and image has loaded
const startWhenReady = () => {
  const imgEl = document.getElementById("imagePath");
  if (imgEl.complete && imgEl.naturalWidth > 0) {
    animationTimeline();
  } else {
    imgEl.onload = () => animationTimeline();
  }
};

// Game flow: start screen -> play -> game view (plant the heart) -> plant -> animation
let heartSelected = false;

const handlePlayClick = () => {
  const startScreen = document.getElementById("startScreen");
  const gameView = document.getElementById("gameView");
  const bgMusic = document.getElementById("bgMusic");
  if (!startScreen || !gameView) return;
  startScreen.classList.add("hidden");
  gameView.classList.add("visible");
  document.body.classList.add("speaker-visible");
  fetchData();
  if (bgMusic) {
    bgMusic.volume = 0.35;
    bgMusic.play().catch(function () {});
  }
};

const handleHeartClick = () => {
  heartSelected = true;
  const heartSeed = document.getElementById("heartSeed");
  const plantZone = document.getElementById("plantZone");
  if (heartSeed) heartSeed.classList.add("selected");
  if (plantZone) plantZone.classList.add("ready");
};

const handleHeartKeyDown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleHeartClick();
  }
};

const handlePlantZoneClick = () => {
  const gameView = document.getElementById("gameView");
  if (!heartSelected || !gameView) return;
  gameView.classList.remove("visible");
  startWhenReady();
};

const handlePlantZoneKeyDown = (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handlePlantZoneClick();
  }
};

const doPlant = () => {
  const gameView = document.getElementById("gameView");
  if (!gameView) return;
  gameView.classList.remove("visible");
  startWhenReady();
};

const handleDragStart = (e) => {
  e.dataTransfer.setData("text/plain", "heart");
  e.dataTransfer.effectAllowed = "copy";
  heartSelected = true;
  const heartSeed = document.getElementById("heartSeed");
  const plantZone = document.getElementById("plantZone");
  if (heartSeed) heartSeed.classList.add("selected", "dragging");
  if (plantZone) plantZone.classList.add("ready");
};

const handleDragEnd = () => {
  const heartSeed = document.getElementById("heartSeed");
  const plantZone = document.getElementById("plantZone");
  if (heartSeed) heartSeed.classList.remove("dragging");
  if (plantZone) plantZone.classList.remove("drag-over");
};

const handleDragOver = (e) => {
  e.preventDefault();
  e.dataTransfer.dropEffect = "copy";
  const plantZone = document.getElementById("plantZone");
  if (plantZone) plantZone.classList.add("drag-over");
};

const handleDragLeave = (e) => {
  const plantZone = document.getElementById("plantZone");
  if (plantZone && !plantZone.contains(e.relatedTarget)) plantZone.classList.remove("drag-over");
};

const handleDrop = (e) => {
  e.preventDefault();
  const plantZone = document.getElementById("plantZone");
  if (plantZone) plantZone.classList.remove("drag-over");
  if (e.dataTransfer.getData("text/plain") === "heart") doPlant();
};

const handleSpeakerClick = () => {
  const bgMusic = document.getElementById("bgMusic");
  const lanaMusic = document.getElementById("lanaMusic");
  const speakerBtn = document.getElementById("speakerBtn");
  isMuted = !isMuted;
  if (bgMusic) bgMusic.muted = isMuted;
  if (lanaMusic) lanaMusic.muted = isMuted;
  var iconSpeaker = speakerBtn && speakerBtn.querySelector(".icon-speaker");
  var iconMuted = speakerBtn && speakerBtn.querySelector(".icon-muted");
  if (iconSpeaker) iconSpeaker.classList.toggle("hidden", isMuted);
  if (iconMuted) iconMuted.classList.toggle("hidden", !isMuted);
  if (speakerBtn) {
    speakerBtn.setAttribute("aria-label", isMuted ? "Unmute music" : "Mute music");
    speakerBtn.setAttribute("title", isMuted ? "Unmute music" : "Mute music");
  }
};

function initGameFlow() {
  var playBtn = document.getElementById("playBtn");
  var speakerBtn = document.getElementById("speakerBtn");
  var heartSeed = document.getElementById("heartSeed");
  var plantZone = document.getElementById("plantZone");
  if (playBtn) playBtn.addEventListener("click", handlePlayClick);
  if (speakerBtn) speakerBtn.addEventListener("click", handleSpeakerClick);
  if (heartSeed) {
    heartSeed.addEventListener("click", handleHeartClick);
    heartSeed.addEventListener("keydown", handleHeartKeyDown);
    heartSeed.addEventListener("dragstart", handleDragStart);
    heartSeed.addEventListener("dragend", handleDragEnd);
  }
  if (plantZone) {
    plantZone.addEventListener("click", function () {
      if (heartSelected) doPlant();
    });
    plantZone.addEventListener("keydown", handlePlantZoneKeyDown);
    plantZone.addEventListener("dragover", handleDragOver);
    plantZone.addEventListener("dragleave", handleDragLeave);
    plantZone.addEventListener("drop", handleDrop);
  }
}

if (typeof document !== "undefined" && document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initGameFlow);
} else {
  initGameFlow();
}
