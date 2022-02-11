const axios = require("axios")

// let TOKEN;

let SUB_DATA;
let DATA_INDEX = 0;

/* const login = (username, password) => {

  const params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('username', username);
  params.append('password', password);

  axios
    .post("https://www.reddit.com/api/v1/access_token",
      params,
      {
        headers: {
          'User-Agent': 'hentai.js'
        },
        auth: {
          username: "7SYlBu6caSAlR4FIQf_Xyw",
          password: "cHhA0TnmR9T9s3G14HLyULiPsuJ4Ig"
        }
      }
    )
    .then(res => {
      TOKEN = res.data.access_token
      document.getElementById("connect").innerHTML = `Connecté, token: ${TOKEN}`
      downloadJson(SUBREDDIT)
    })
} */

const downloadJson = (sub) => {
  const endpoint = `https://reddit.com/r/${sub}.json?limit=100`
  const header = {
    'User-Agent': 'hentai.js'
  }
  return axios
    .get(endpoint, {headers: header})
    .then(res => {
      SUB_DATA = res.data.data;
      console.log(SUB_DATA)
    })
}

const base = () => {
  downloadJson(document.getElementById("subreddit")?.value ?? "hentai")
    .then(res => load(1))
}

const random = () => {
  DATA_INDEX = Math.floor(Math.random() * SUB_DATA.children.length);
  updateDisplay()
}

const load = (count) => {
  DATA_INDEX += count

  if (DATA_INDEX >= SUB_DATA.children.length) {
    DATA_INDEX = 0
  }
  if (DATA_INDEX < 0) {
    DATA_INDEX = SUB_DATA.children.length - 1
  }

  document.getElementById("num").innerHTML = `(${DATA_INDEX + 1}/${SUB_DATA.children.length})`

  updateDisplay()
}

const updateDisplay = () => {
  if (SUB_DATA.children[DATA_INDEX].data.url.match(/^.+\.(gif)|(png)|(jpg)|(jpeg)$/)) {
    document.getElementById("display").innerHTML = `<img src="${SUB_DATA.children[DATA_INDEX].data.url}" class="scale"></img>` // "Dynamic html"
  } else if (SUB_DATA.children[DATA_INDEX].data.url.match(/^https:\/\/(www)?\.redgifs\.com\/(watch)\/.+$/)) {
    // Example: https://www.redgifs.com/watch/flickeringlazybaiji
    document.getElementById("display").innerHTML = `<iframe src="${SUB_DATA.children[DATA_INDEX].data.url.replace("watch", "ifr")}" class="scale"></iframe>`
  } 
  else {
    document.getElementById("display").innerHTML = `<iframe src="${SUB_DATA.children[DATA_INDEX].data.url}" class="scale"></iframe>` // Hell
  }
  document.getElementById("title").innerHTML = SUB_DATA.children[DATA_INDEX].data.title
}

base()