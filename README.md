# Spotify Wrapper Player

[![Build Status](https://travis-ci.org/filipegorges/spotify-wrapper-player.svg?branch=master)](https://travis-ci.org/filipegorges/spotify-wrapper-player)

[![Coverage Status](https://coveralls.io/repos/github/filipegorges/spotify-wrapper-player/badge.svg?branch=master)](https://coveralls.io/github/filipegorges/spotify-wrapper-player?branch=master)

Based on Udemy course: https://www.udemy.com/js-com-tdd-na-pratica/

This player makes use of the [reuwsaat spotify-wrapper](https://github.com/filipegorges/spotify-wrapper) library and provides UI interactions for finding albums, discovering tracks and previewing them.

## Browser Support

This project relies on [reuwsaat-spotify-wrapper](https://www.npmjs.com/package/reuwsaat-spotify-wrapper) which is supported in the following browsers:

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Getting Started
Make sure the port ```8080``` is free before running the application.

Download or clone the project, access the project folder through a terminal and then run:

```
npm run start
```
to get the project running on ```localhost:8080```.

### Prerequisites

In order to run this project locally, you'll need ```node``` and ```npm``` installed:

```
# For Debian-based distributions:
sudo apt update
sudo apt install nodejs
sudo apt install npm

# For RHEL-based distributions:
sudo dnf update
sudo dnf install nodejs
sudo dnf install npm

# For Windows/macOS:
https://nodejs.org/en/download/
```

## Running the tests

To run the tests once:

```
npm run test
```

To keep running the tests, watching for file changes (TDD-style):
```
npm rum test:tdd
```

To check test coverage:
```
npm run test:coverage
```

### Coding style tests

In order to maintain the coding style ESlint is part of the project and can be activated manually by running:

```
npm run lint
```
this command will automatically be executed before pushing commits to origin, alongside the ```test:coverage``` and will lock the pushing process should the code not be valid according to the defined coding style.

## Built With

* [Babel](https://babeljs.io/) - Javascript compiler
* [NPM](https://www.npmjs.com/) - Package manager
* [Reuwsaat Spotify Wrapper](https://www.npmjs.com/package/reuwsaat-spotify-wrapper) - Reuwsaat Spotify Wrapper lib

## Contributing

Please read [CONTRIBUTING.md](https://github.com/filipegorges/spotify-wrapper-player/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

| ![Filipe Gorges Reuwsaat](https://avatars3.githubusercontent.com/u/7244233?s=150&v=3)|
|:---------------------:|
|  [Filipe Gorges Reuwsaat](https://github.com/filipegorges/)   |

See also the list of [contributors](https://github.com/filipegorges/spotify-wrapper-player/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
