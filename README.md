# Hentai.js
Simple electron wrapper for rule34.xxx displaying your favourite hentai in a semi-slideshow format.

I started this dumb little project to learn the electron framework, so it's not the greatest thing ever. It's really simple and doesn't have many features but it taught me a lot so... that's cool.

# Installation
## Windows
Simply download the latest `setup.exe` release from the [[Releases]] tab and execute it, that will install the program and add it to your start menu. It is not signed so it may be detected by an antivirus.

While I do promise it's not a virus, you might still want to consider checking the source code or [[#Compiling from source]]
## MacOS
Simply download the latest `darwin` zip file from the [[Releases]] tab and execute the `hentaijs` executable. There is currently no better way to install the program.
## Arch Linux (AUR install)
If you use Arch Linux or an Arch-derived distribution, you can install `hentai.js` from the AUR. That package is maintained by myself so it will always be up to date.

Installing from the AUR will automatically disable update checking since your AUR helper will update the program automatically.
## Linux
Simply download the latest `linux` zip file from the [[Releases]] tab and execute the `hentaijs` executable. You might want to add it to your PATH or to your own Application Launcher for convenience.

# Usage
Enter any rule34.xxx tag in the text area and hit enter to reload the data. Then click on **>** and **<** or use the arrow keys to navigate the images.

You can click on an image to view it on rule34.xxx, you can click the download button to download an image.

# Compiling from source
hentai.js depends on **Node.js** and on **npm**. If you're on linux, those will be available on your package manager. If you're on another platform, simply follow that platform's install instructions

1. Download the latest source code or the source code of the latest release
```sh
git clone https://github.com/KodiCraft/hentai.js && cd hentai.js
```

2. Download the development dependencies
```sh
npm install
```

3. Package the app
```sh
npm run package
```

4. If you're on Windows, you need to make the installer
```sh
npm run make-win
```

The files can be found in the `out/` directory, the installer can be found in the `out/make` directory
