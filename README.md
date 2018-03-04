# express-gallery-server

#### a lite node express file server and api endpoint, with a decoupled client app.

```
git clone https://github.com/jasenmichael/express-gallery-server.git

cd express-gallery-server

npm install

npm start
```

then goto [localhost:3000](http://localhost:3000) in your browser

add image folder to the root directory, or edit the imagePath variable in index.js (line 2).

the api endpoint is available at [localhost:3000/api/images](http://localhost:3000/api/images)

#### ToDo

 * [ ] Implement upload image to server feature.
 * [ ] Re-factor add-images.html into a template or modal.
 * [ ] Implement search - filter from title and description.
 * [ ] Add file extension/image filter when serving image directory
