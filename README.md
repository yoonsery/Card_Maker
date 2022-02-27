# [Business Card Maker](https://sery-cardmaker.netlify.app/)

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

## Note ✍🏻

### The more arrays there are, the slower they are when mapping

상태를 업데이트할 때 주기적으로 발생하는 이벤트에 대해서 map, for loop을 사용하는 것은
성능상 좋지 않다 (퍼포먼스상)
id를 키로 이용하고, card 자체 오브젝트를 value로 쓴다 (배열임 아님!)

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

배열이 아니므로 Editor component에서

```js
{cards.map(card => (
  <CardEditForm
  key={card.id}
  card={card}
  // ..
```

가 아니라 이렇게 되야 함

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
