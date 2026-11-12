# What does our application do?
Our application will recommend minecraft blocks, items and materials to use for building, based on the user's desired biome they want to build in.

## Who would use it, and why?
People who build in minecraft may use it and find it useful. It helps keep a build idea thematic and shows you exactly what you should use with your build based on where you are building it.

### The API We Are Using
[Astroworld API](https://api.astroworldmc.com/)

### Proof of the API Working
Fetch Request:
```js
fetch ("https://api.astroworldmc.com/api/v1/mobs?search=creeper");
```
Response:
```json
Promise { <state>: "pending" }
​
<state>: "fulfilled"
​
<value>: Response { type: "cors", url: "https://api.astroworldmc.com/api/v1/mobs?search=creeper", redirected: false, … }
```

#### Rough Sketch of the Interface
![Interface Sketch](../Project-Interface-Sketch-(Rough)/COSC219-Project-Interface-Sketch.png)

##### What Would Be The Hardest Requirements?
We think out of the 6 hard requirements, the hardest part would likely be making the app operable with only keyboard, mainly because it could be time consuming depending on the final look of the app.

###### **LEFT OFF HERE**
