# Change that wallpaper !

**Chathawalpap** is a small tool shamelessly inspired from [wallpaper-cli](https://github.com/sindresorhus/wallpaper-cli) which will pick a random wallpaper from [Alex Meub's Chromecast wallpapers dump](http://chromecastbg.alexmeub.com/) and set it as your wallpaper.

## Installation

- Clone the repository
- Run `npm install` inside the repository's folder

## Usage

`node .`

## Notes

A good idea would be to run the script every X hours in order to have your wallpaper chaning all day long !

Here is my `crontab` entry:

```
0 */1 * * * node ~/Documents/chathawalpap
```

