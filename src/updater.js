const MYVERSION = 325

console.log("Checking for updates...")
axios.get("https://api.github.com/repos/KodiCraft/hentai.js/releases")
  .then(res => {
    console.log(res)
    body = res.data[0].body
    try {
      id = body.match(/(?<=\[\[).*?(?=]])/)[0]
    } catch {
      id = 0 // Could not get update data
    }
    console.log("Most recent version is " + id)
    if (id > MYVERSION) {
      if (confirm("A new version of hentai.js is available!\nWould you like to open the github releases page?")) {
        require("electron").shell.openExternal("https://github.com/KodiCraft/hentai.js/releases")
      }
    }
  })
