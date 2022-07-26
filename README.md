<h1 align="center">Welcome to Blip Tech Challenge 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/npm-8.11.0-blue.svg" />
  <img src="https://img.shields.io/badge/node-16.16.0-blue.svg" />
  <a href="https://github.com/onoue9/avalia-o-t-cnica-takeblip#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/onoue9/avalia-o-t-cnica-takeblip/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/onoue9/avalia-o-t-cnica-takeblip/blob/master/LICENSE" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/github/license/onoue9/Blip Tech Challenge" />
  </a>
  <a href="https://twitter.com/wolfonoue" target="_blank">
    <img alt="Twitter: wolfonoue" src="https://img.shields.io/twitter/follow/wolfonoue.svg?style=social" />
  </a>
</p>

> Repositório criado para avaliação técnica da Take Blip. Nele criei uma API que realiza a integração entre o chatBot, criado na plataforma da TakeBlip, e a API pública do GitHub. Onde listei os 5 repositórios da linguagem C# mais antigos, ordenados de forma crescente por data de criação.

### 🏠 [Homepage](https://github.com/onoue9/avalia-o-t-cnica-takeblip#readme)

## Prerequisites

- npm 8.11.0
- node 16.16.0

## Install

```sh
npm install
```

## Usage

```sh
npm run start
```

## Run tests

```sh
npm run test
```

## Deployment

O deploy da API foi feito no HEROKU.
Como nós buscamos os repositórios da TakeBlip pela API do GitHub, foi feita uma rota dinâmica onde colocamos o número do repositório que queremos como parametro, por exemplo o repositório 1:

https://take-blip-tech-challenge.herokuapp.com/challenge/1

OU, o 2:

https://take-blip-tech-challenge.herokuapp.com/challenge/2

e assim sucessivamente até o repositório 5.

Também foram adicionadas de forma estática as imagens usadas no carrosel que fala sobre as 6 culturas da TakeBlip, que são:

* Take.Be
* Take.Team
* Take.Excellence
* Take.Charge
* Take.Simple
* Take.Higher

onde podemos acessar respectivamente pelas URI's:

* https://take-blip-tech-challenge.herokuapp.com/images/TakeBe.png
* https://take-blip-tech-challenge.herokuapp.com/images/TakeTeam.png
* https://take-blip-tech-challenge.herokuapp.com/images/TakeExcellence.png
* https://take-blip-tech-challenge.herokuapp.com/images/TakeCharge.png
* https://take-blip-tech-challenge.herokuapp.com/images/TakeSimple.png
* https://take-blip-tech-challenge.herokuapp.com/images/TakeHigher.png

## Author

👤 **Filipe Onoue**

* Twitter: [@wolfonoue](https://twitter.com/wolfonoue)
* Github: [@onoue9](https://github.com/onoue9)
* LinkedIn: [@filipeonoue](https://linkedin.com/in/filipeonoue)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/onoue9/avalia-o-t-cnica-takeblip/issues). You can also take a look at the [contributing guide](https://github.com/onoue9/avalia-o-t-cnica-takeblip/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2022 [Filipe Onoue](https://github.com/onoue9).<br />
This project is [ISC](https://github.com/onoue9/avalia-o-t-cnica-takeblip/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
