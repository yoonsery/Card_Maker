# [Business Card Maker ๐](https://sery-cardmaker.netlify.app/)

![demo_cardmaker](https://user-images.githubusercontent.com/69155242/159934907-16a37391-0c37-4215-9b58-01f4478c2de1.gif)

## Features

Users are able to

- Log in using the Google & GitHub provider
- Enter the personal information
- Make and Delete a card with an add and delete buttonAdd
- See the modified information at the preview when reflected at card maker realtime
- Upload profile image using cloudinary
- See the stored cards whenever they log in

## Skills

- [x] React Hooks
- [x] React Router
- [x] PostCSS
- [x] Firebase (Authentication, Realtime Database)
- [x] Cloudinary

## Note โ๐ป

### The more arrays there are, the slower they are when mapping

์ํ๋ฅผ ์๋ฐ์ดํธํ  ๋ ์ฃผ๊ธฐ์ ์ผ๋ก ๋ฐ์ํ๋ ์ด๋ฒคํธ์ ๋ํด์ map, for loop์ ์ฌ์ฉํ๋ ๊ฒ์
์ฑ๋ฅ์ ์ข์ง ์๋ค (ํผํฌ๋จผ์ค์)
id๋ฅผ ํค๋ก ์ด์ฉํ๊ณ , card ์์ฒด ์ค๋ธ์ ํธ๋ฅผ value๋ก ์ด๋ค (๋ฐฐ์ด์ ์๋!)

```js
const createOrUpdateCard = useCallback(
  (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  },
  [cardRepository, userId]
);
```

๋ฐฐ์ด์ด ์๋๋ฏ๋ก Editor component์์

```js
{cards.map(card => (
  <CardEditForm
  key={card.id}
  card={card}
  // ..
```

๊ฐ ์๋๋ผ ์ด๋ ๊ฒ ๋์ผ ํจ

```js
{Object.keys(cards).map((key) => (
  <CardEditForm
  key={key}
  card={cards[key]}
  // ..
```

### Dependency Injection

ImageFileInput component needs ImageUploader
as a props
(ImageFileInput > card_edit_form, card_add_form > editor >
maker > app )

What if `imageUploader` has a lot of props?

Make ImageFileInput component from the outside then
transfer it

at index.js

```js
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
```

pros: doesn't need to transfer many services
if you have to change any services you just need to edit it at index.js

## Setup

Install dependencies

```sh
$ npm install
```

Run application

```sh
$ npm start
```
