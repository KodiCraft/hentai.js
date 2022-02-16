const axios = require("axios")

let DATA;
let DATA_INDEX = 0;

const downloadJson = (tags) => {
  const endpoint = new URL('https://api.rule34.xxx/index.php?page=dapi&s=post&q=index&json=1&limit=1000')
  endpoint.searchParams.set("tags", tags)
  const header = {
    'User-Agent': 'hentai.js'
  }
  return axios
    .get(endpoint, {headers: header})
    .then(res => {
      DATA = res.data;
      console.log(DATA)
    })
}

const base = () => {
  downloadJson(document.getElementById("tag")?.value ?? "abmayo")
    .then(res => load(1))
}

const random = () => {
  DATA_INDEX = Math.floor(Math.random() * DATA.length);
  updateDisplay()
}

const load = (count) => {
  DATA_INDEX += count

  if (DATA_INDEX >= DATA.length) {
    DATA_INDEX = 0
  }
  if (DATA_INDEX < 0) {
    DATA_INDEX = DATA.length - 1
  }

  document.getElementById("num").innerHTML = `(${DATA_INDEX + 1}/${DATA.length})`

  updateDisplay()
}

const updateDisplay = () => {
  document.getElementById("display").innerHTML = `<img src="${DATA[DATA_INDEX].sample_url}" class="scale"></iframe>` // Hell
  // document.getElementById("title").innerHTML = DATA[DATA_INDEX].data.title
}

base()