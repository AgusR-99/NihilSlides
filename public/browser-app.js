const motdsDOM = document.querySelector(".motds");

// Load motds from /api/motds

const grabRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const showMotds = async () => {
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

showMotds();
