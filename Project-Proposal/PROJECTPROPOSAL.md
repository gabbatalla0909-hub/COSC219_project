# Project Proposal
**What Are We Building? And What Will It Do?**

Our application will recommend minecraft blocks, items and materials to use for building, based on the user's desired biome they want to build in.

**Who would use it, and why?**

People who build in minecraft may use it and find it useful. It helps keep a build idea thematic and shows you exactly what you should use with your build based on where you are building it.

**The API We Are Using**

[Astroworld API](https://api.astroworldmc.com/)

**Proof of the API Working**

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

**Rough Sketch of the Interface**

![Interface Sketch](../Project-Interface-Sketch-(Rough)/COSC219-Project-Interface-Sketch.png)

**What Would Be The Hardest Requirements?**

We think out of the 6 hard requirements, the hardest part would likely be making the app operable with only keyboard, mainly because it could be time consuming depending on the final look of the app.

**Who Will Do What?**

**Dallas**:
- API and recommendation system
    - Fetch and gather necessary data such as materials and blocks (*<u>Using API</u>*).
    - Build recommendation system logic and filtering (*<u>Using recommendations that were built off the data fetched from the API</u>*).
    - Build recommendations and what data each recommendation will contain (*<u>Using data fetched from the API</u>*).

**Gabriel**:
- User interface and interactions
    - Preference selection that is used to retrieve recommended materials (*<u>Using the recommendation system that was built using the API</u>*).
    - Displaying the recommendations with information, images, etc (*<u>Rendering everything into HTML</u>*).
    - User interactions such as being able to favourite recommendations or bookmark them, etc. (*<u>Using</u>* `localStorage` *<u>or</u>* `sessionStorage`).
