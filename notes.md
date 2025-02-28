# CS260 notes


## Deploying files to the server
./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s <subdomain>

## CSS
-All the center stuff
```
  main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
```
-height inheritance
```
  html{
    height: 80%;
  }
  body{
    height: 20%;  -----> will be 20% of 80%
  }
```
-Spacing
```
  *{
    margin: 0;              -----> reset everything
  }
  header > h3{
    margin-top: 5%;
    margin-right: 2%;       -----> then set each individually
    margin-bottom: 5%;
    margin-right: 5%;
  }
```
-Sliding-Animations
```
  @keyframes fly-in-left{
    0%{
      transform: translateX(-200%);
    }
    100%{
      transform: translateX(0%);
    }
  }
```


## Bootstrap
-just a bunch of already defined css rules that you can use to make the overall look of your website look better
-Also allows cool functional css like the accordian
```
  <div class="accordion" id="accordionExample">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
  </div>
```

## React
  -Starting Server
    ```npm run dev```