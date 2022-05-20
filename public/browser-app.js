const motdsDOM = document.querySelector(".motds");
const pageloadAnim = "puff-in-center";

// Load motds from /api/motds

const grabRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getMotds = async () => {
  try {
    const res = await axios.get("/api/v1/motd");
    const data = res.data.msg;
    const e = grabRandomElement(data);
    if (res.status === 200) {
      motdsDOM.innerHTML = e.text;
    }
  } catch (error) {
    console.log(error);
  }
};

//
const animate = (element, anim, time) => {
  $(element).addClass(anim);
  setTimeout(() => {
    $(element).removeClass(anim);
  }, time);
};

// On messagge click
$(motdsDOM).on("click", () => {
  try {
    $(motdsDOM).fadeOut(500, () => {
      getMotds();
      $(motdsDOM).fadeIn(500);
    });
  } catch (error) {
    console.log(error);
  }
});

// Ready state
$(function () {
  getMotds();
  animate(motdsDOM, pageloadAnim, 750);
});
