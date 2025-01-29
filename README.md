# React router v7 issue
* Checkout code
* npm install
* npm dev
* Open browser to `http://localhost:5174/`

* It should show
  * `PreLayout loading...` for 5 seconds
* Click `Random number` it shows `MainContent loading...` for 3 seconds
* Click `Random char` it should show `MainContent loading...` for 3 seconds but it dosent, but after 3 seconds the content is changed

* Open `package.json` and change `"react-router-dom": "^7.1.3"` to `"react-router-dom": "^6.28.2"`
* run `npm install`
* Run the tests above again, now it shows `MainContent loading...` every time you click a link instead of only doing it the first time...
