const MYVERSION = 330

let searchedFile = process.execPath.match(".*(?=/.*$)")[0] + "/.noupdates"

console.log(`Checking if file "${searchedFile}" exists, create that file to disable updates`)

if (!fs.existsSync(searchedFile)) {
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
    else if (MYVERSION > id) {
      alert("Current version is above latest version, if you're not on a dev build, I hope you know what you're doing")
    }
  })
} else {
  console.log(".noupdates file found, not checking for updates")
}
