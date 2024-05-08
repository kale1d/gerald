

# Getting Started


To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org) + [NPM](https://www.npmjs.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kale1d/gerald.git

# Go into the repository
$ cd gerald

# Install dependencies
$ npm install
#For IOS
$cd ios && pod install && cd ..

# Run the server
$ npm run start

# Run the app (iOS)
$ npm run ios

# Run the app (Android)
$ npm run android
```

## Videos 
<div align="center">
   <h4>Android Example</h4>
   <video src="https://github.com/kale1d/gerald/assets/36973947/0db90490-41ca-42d9-bf91-c6bb7960f031" width="400" />
</div>

<div align="center">
<h4>iOS Example</h4>
   <video src="https://github.com/kale1d/gerald/assets/36973947/ad9930b3-40e0-46d3-9d9b-9dd7cd79f6c4" width="400" />
</div>


## Thoughts about the challenge 

Upon encountering the gif and reviewing the challenge, my initial presumption was that it would be straightforward. However, as I delved into the coding process, specifically in attempting to animate the drawer within React Navigation, my perspective shifted. Despite my efforts to construct a custom solution when faced with difficulties in animating the drawer, I eventually circled back to utilizing the provided drawer prop.

Upon closer examination of the gif, I discerned a crucial detail: the border radius played a pivotal role in preventing screen overlap within the drawer. This realization led to a successful resolution of the issue.

Subsequently, when I embarked on typing out all the navigation, I encountered yet another round of investigation. This experience served as a valuable lesson, underscoring the importance of recognizing that tasks are rarely as straightforward as they initially appear, particularly if one endeavors to execute them with precision and excellence.
