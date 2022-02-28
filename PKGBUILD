# Maintainer: Kodi <kodicraft4@gmail.com>
pkgname=hentaijs
pkgver=v2.3.6
pkgrel=1

pkgdesc="rule34.xxx wrapper written in electron"
arch=('x86_64')
url="https://github.com/KodiCraft/hentai.js"
license=('MIT')

depends=("nodejs" "npm")
makedepends=()
checkdepends=()
optdepends=("electron")
# provides=()
# conflicts=()
# replaces=()
# backup=()
# options=()
# install=
# changelog=
source=("$url/archive/refs/tags/${pkgver}.tar.gz")
# noextract=()
# md5sums=()
# validpgpkeys=()

prepare() {
	cd "$pkgver"
  npm install	
}

build() {
	cd "$pkgver"
  npm run build-linux
  cd out/$pkgname-linux-x64
  mkdir -p /usr/local/bin/hentaijs
  mv * /usr/local/bin/hentaijs
  ln /usr/local/bin/hentaijs/hentaijs /usr/bin/hentaijs
}

