# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout\CheckoutPage.spec.js >> @regression @checkout checkout displayed product price as per quantity wise
- Location: tests\Checkout\CheckoutPage.spec.js:97:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#quantity')

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=e24]: 
            - text: Logout
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=e27]: 
            - text: Delete Account
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e30]: 
            - text: Test Cases
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e33]: 
            - text: API Testing
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e36]: 
            - text: Video Tutorials
        - listitem [ref=e37]:
          - link [ref=e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e39]: 
            - text: Contact us
        - listitem [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: 
            - text: Logged in as Darrel Malone
  - generic [ref=e44]:
    - img [ref=e45]
    - textbox [ref=e46]:
      - /placeholder: Search Product
    - button [ref=e47] [cursor=pointer]:
      - generic [ref=e48]: 
  - generic [ref=e51]:
    - generic [ref=e53]:
      - heading [level=2] [ref=e54]: Category
      - generic [ref=e55]:
        - heading [level=4] [ref=e58]:
          - link [ref=e59] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e61]: 
            - text: Women
        - heading [level=4] [ref=e64]:
          - link [ref=e65] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e67]: 
            - text: Men
        - heading [level=4] [ref=e70]:
          - link [ref=e71] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e73]: 
            - text: Kids
      - generic [ref=e74]:
        - heading [level=2] [ref=e75]: Brands
        - list [ref=e77]:
          - listitem [ref=e78]:
            - link [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e80]: (6)
              - text: Polo
          - listitem [ref=e81]:
            - link [ref=e82] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e83]: (5)
              - text: H&M
          - listitem [ref=e84]:
            - link [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e86]: (5)
              - text: Madame
          - listitem [ref=e87]:
            - link [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e89]: (3)
              - text: Mast & Harbour
          - listitem [ref=e90]:
            - link [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e92]: (4)
              - text: Babyhug
          - listitem [ref=e93]:
            - link [ref=e94] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e95]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e96]:
            - link [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e98]: (3)
              - text: Kookie Kids
          - listitem [ref=e99]:
            - link [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e101]: (5)
              - text: Biba
    - generic [ref=e103]:
      - heading [level=2] [ref=e104]: All Products
      - generic [ref=e106]:
        - generic [ref=e107]:
          - generic [ref=e108]:
            - img [ref=e109]
            - heading [level=2] [ref=e110]: Rs. 500
            - paragraph [ref=e111]: Blue Top
            - generic [ref=e112] [cursor=pointer]:
              - generic [ref=e113]: 
              - text: Add to cart
          - generic [ref=e114]:
            - heading [level=2] [ref=e115]: Rs. 500
            - paragraph [ref=e116]: Blue Top
            - generic [ref=e117] [cursor=pointer]:
              - generic [ref=e118]: 
              - text: Add to cart
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link [ref=e122] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e123]: 
              - text: View Product
      - generic [ref=e125]:
        - generic [ref=e126]:
          - generic [ref=e127]:
            - img [ref=e128]
            - heading [level=2] [ref=e129]: Rs. 400
            - paragraph [ref=e130]: Men Tshirt
            - generic [ref=e131] [cursor=pointer]:
              - generic [ref=e132]: 
              - text: Add to cart
          - generic [ref=e133]:
            - heading [level=2] [ref=e134]: Rs. 400
            - paragraph [ref=e135]: Men Tshirt
            - generic [ref=e136] [cursor=pointer]:
              - generic [ref=e137]: 
              - text: Add to cart
        - list [ref=e139]:
          - listitem [ref=e140]:
            - link [ref=e141] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e142]: 
              - text: View Product
      - generic [ref=e144]:
        - generic [ref=e145]:
          - generic [ref=e146]:
            - img [ref=e147]
            - heading [level=2] [ref=e148]: Rs. 1000
            - paragraph [ref=e149]: Sleeveless Dress
            - generic [ref=e150] [cursor=pointer]:
              - generic [ref=e151]: 
              - text: Add to cart
          - generic [ref=e152]:
            - heading [level=2] [ref=e153]: Rs. 1000
            - paragraph [ref=e154]: Sleeveless Dress
            - generic [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
              - text: Add to cart
        - list [ref=e158]:
          - listitem [ref=e159]:
            - link [ref=e160] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e161]: 
              - text: View Product
      - generic [ref=e163]:
        - generic [ref=e164]:
          - generic [ref=e165]:
            - img [ref=e166]
            - heading [level=2] [ref=e167]: Rs. 1500
            - paragraph [ref=e168]: Stylish Dress
            - generic [ref=e169] [cursor=pointer]:
              - generic [ref=e170]: 
              - text: Add to cart
          - generic [ref=e171]:
            - heading [level=2] [ref=e172]: Rs. 1500
            - paragraph [ref=e173]: Stylish Dress
            - generic [ref=e174] [cursor=pointer]:
              - generic [ref=e175]: 
              - text: Add to cart
        - list [ref=e177]:
          - listitem [ref=e178]:
            - link [ref=e179] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e180]: 
              - text: View Product
      - generic [ref=e182]:
        - generic [ref=e183]:
          - generic [ref=e184]:
            - img [ref=e185]
            - heading [level=2] [ref=e186]: Rs. 600
            - paragraph [ref=e187]: Winter Top
            - generic [ref=e188] [cursor=pointer]:
              - generic [ref=e189]: 
              - text: Add to cart
          - generic [ref=e190]:
            - heading [level=2] [ref=e191]: Rs. 600
            - paragraph [ref=e192]: Winter Top
            - generic [ref=e193] [cursor=pointer]:
              - generic [ref=e194]: 
              - text: Add to cart
        - list [ref=e196]:
          - listitem [ref=e197]:
            - link [ref=e198] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e199]: 
              - text: View Product
      - generic [ref=e201]:
        - generic [ref=e202]:
          - generic [ref=e203]:
            - img [ref=e204]
            - heading [level=2] [ref=e205]: Rs. 400
            - paragraph [ref=e206]: Summer White Top
            - generic [ref=e207] [cursor=pointer]:
              - generic [ref=e208]: 
              - text: Add to cart
          - generic [ref=e209]:
            - heading [level=2] [ref=e210]: Rs. 400
            - paragraph [ref=e211]: Summer White Top
            - generic [ref=e212] [cursor=pointer]:
              - generic [ref=e213]: 
              - text: Add to cart
        - list [ref=e215]:
          - listitem [ref=e216]:
            - link [ref=e217] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e218]: 
              - text: View Product
      - generic [ref=e220]:
        - generic [ref=e221]:
          - generic [ref=e222]:
            - img [ref=e223]
            - heading [level=2] [ref=e224]: Rs. 1000
            - paragraph [ref=e225]: Madame Top For Women
            - generic [ref=e226] [cursor=pointer]:
              - generic [ref=e227]: 
              - text: Add to cart
          - generic [ref=e228]:
            - heading [level=2] [ref=e229]: Rs. 1000
            - paragraph [ref=e230]: Madame Top For Women
            - generic [ref=e231] [cursor=pointer]:
              - generic [ref=e232]: 
              - text: Add to cart
        - list [ref=e234]:
          - listitem [ref=e235]:
            - link [ref=e236] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e237]: 
              - text: View Product
      - generic [ref=e239]:
        - generic [ref=e240]:
          - generic [ref=e241]:
            - img [ref=e242]
            - heading [level=2] [ref=e243]: Rs. 700
            - paragraph [ref=e244]: Fancy Green Top
            - generic [ref=e245] [cursor=pointer]:
              - generic [ref=e246]: 
              - text: Add to cart
          - generic [ref=e247]:
            - heading [level=2] [ref=e248]: Rs. 700
            - paragraph [ref=e249]: Fancy Green Top
            - generic [ref=e250] [cursor=pointer]:
              - generic [ref=e251]: 
              - text: Add to cart
        - list [ref=e253]:
          - listitem [ref=e254]:
            - link [ref=e255] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e256]: 
              - text: View Product
      - generic [ref=e258]:
        - generic [ref=e259]:
          - generic [ref=e260]:
            - img [ref=e261]
            - heading [level=2] [ref=e262]: Rs. 499
            - paragraph [ref=e263]: Sleeves Printed Top - White
            - generic [ref=e264] [cursor=pointer]:
              - generic [ref=e265]: 
              - text: Add to cart
          - generic [ref=e266]:
            - heading [level=2] [ref=e267]: Rs. 499
            - paragraph [ref=e268]: Sleeves Printed Top - White
            - generic [ref=e269] [cursor=pointer]:
              - generic [ref=e270]: 
              - text: Add to cart
        - list [ref=e272]:
          - listitem [ref=e273]:
            - link [ref=e274] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e275]: 
              - text: View Product
      - generic [ref=e277]:
        - generic [ref=e278]:
          - generic [ref=e279]:
            - img [ref=e280]
            - heading [level=2] [ref=e281]: Rs. 359
            - paragraph [ref=e282]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e283] [cursor=pointer]:
              - generic [ref=e284]: 
              - text: Add to cart
          - generic [ref=e285]:
            - heading [level=2] [ref=e286]: Rs. 359
            - paragraph [ref=e287]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e288] [cursor=pointer]:
              - generic [ref=e289]: 
              - text: Add to cart
        - list [ref=e291]:
          - listitem [ref=e292]:
            - link [ref=e293] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e294]: 
              - text: View Product
      - generic [ref=e296]:
        - generic [ref=e297]:
          - generic [ref=e298]:
            - img [ref=e299]
            - heading [level=2] [ref=e300]: Rs. 278
            - paragraph [ref=e301]: Frozen Tops For Kids
            - generic [ref=e302] [cursor=pointer]:
              - generic [ref=e303]: 
              - text: Add to cart
          - generic [ref=e304]:
            - heading [level=2] [ref=e305]: Rs. 278
            - paragraph [ref=e306]: Frozen Tops For Kids
            - generic [ref=e307] [cursor=pointer]:
              - generic [ref=e308]: 
              - text: Add to cart
        - list [ref=e310]:
          - listitem [ref=e311]:
            - link [ref=e312] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e313]: 
              - text: View Product
      - generic [ref=e315]:
        - generic [ref=e316]:
          - generic [ref=e317]:
            - img [ref=e318]
            - heading [level=2] [ref=e319]: Rs. 679
            - paragraph [ref=e320]: Full Sleeves Top Cherry - Pink
            - generic [ref=e321] [cursor=pointer]:
              - generic [ref=e322]: 
              - text: Add to cart
          - generic [ref=e323]:
            - heading [level=2] [ref=e324]: Rs. 679
            - paragraph [ref=e325]: Full Sleeves Top Cherry - Pink
            - generic [ref=e326] [cursor=pointer]:
              - generic [ref=e327]: 
              - text: Add to cart
        - list [ref=e329]:
          - listitem [ref=e330]:
            - link [ref=e331] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e332]: 
              - text: View Product
      - generic [ref=e334]:
        - generic [ref=e335]:
          - generic [ref=e336]:
            - img [ref=e337]
            - heading [level=2] [ref=e338]: Rs. 315
            - paragraph [ref=e339]: Printed Off Shoulder Top - White
            - generic [ref=e340] [cursor=pointer]:
              - generic [ref=e341]: 
              - text: Add to cart
          - generic [ref=e342]:
            - heading [level=2] [ref=e343]: Rs. 315
            - paragraph [ref=e344]: Printed Off Shoulder Top - White
            - generic [ref=e345] [cursor=pointer]:
              - generic [ref=e346]: 
              - text: Add to cart
        - list [ref=e348]:
          - listitem [ref=e349]:
            - link [ref=e350] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e351]: 
              - text: View Product
      - generic [ref=e353]:
        - generic [ref=e354]:
          - generic [ref=e355]:
            - img [ref=e356]
            - heading [level=2] [ref=e357]: Rs. 478
            - paragraph [ref=e358]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e359] [cursor=pointer]:
              - generic [ref=e360]: 
              - text: Add to cart
          - generic [ref=e361]:
            - heading [level=2] [ref=e362]: Rs. 478
            - paragraph [ref=e363]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e364] [cursor=pointer]:
              - generic [ref=e365]: 
              - text: Add to cart
        - list [ref=e367]:
          - listitem [ref=e368]:
            - link [ref=e369] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e370]: 
              - text: View Product
      - generic [ref=e372]:
        - generic [ref=e373]:
          - generic [ref=e374]:
            - img [ref=e375]
            - heading [level=2] [ref=e376]: Rs. 1200
            - paragraph [ref=e377]: Little Girls Mr. Panda Shirt
            - generic [ref=e378] [cursor=pointer]:
              - generic [ref=e379]: 
              - text: Add to cart
          - generic [ref=e380]:
            - heading [level=2] [ref=e381]: Rs. 1200
            - paragraph [ref=e382]: Little Girls Mr. Panda Shirt
            - generic [ref=e383] [cursor=pointer]:
              - generic [ref=e384]: 
              - text: Add to cart
        - list [ref=e386]:
          - listitem [ref=e387]:
            - link [ref=e388] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e389]: 
              - text: View Product
      - generic [ref=e391]:
        - generic [ref=e392]:
          - generic [ref=e393]:
            - img [ref=e394]
            - heading [level=2] [ref=e395]: Rs. 1050
            - paragraph [ref=e396]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e397] [cursor=pointer]:
              - generic [ref=e398]: 
              - text: Add to cart
          - generic [ref=e399]:
            - heading [level=2] [ref=e400]: Rs. 1050
            - paragraph [ref=e401]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e402] [cursor=pointer]:
              - generic [ref=e403]: 
              - text: Add to cart
        - list [ref=e405]:
          - listitem [ref=e406]:
            - link [ref=e407] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e408]: 
              - text: View Product
      - generic [ref=e410]:
        - generic [ref=e411]:
          - generic [ref=e412]:
            - img [ref=e413]
            - heading [level=2] [ref=e414]: Rs. 1190
            - paragraph [ref=e415]: Cotton Mull Embroidered Dress
            - generic [ref=e416] [cursor=pointer]:
              - generic [ref=e417]: 
              - text: Add to cart
          - generic [ref=e418]:
            - heading [level=2] [ref=e419]: Rs. 1190
            - paragraph [ref=e420]: Cotton Mull Embroidered Dress
            - generic [ref=e421] [cursor=pointer]:
              - generic [ref=e422]: 
              - text: Add to cart
        - list [ref=e424]:
          - listitem [ref=e425]:
            - link [ref=e426] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e427]: 
              - text: View Product
      - generic [ref=e429]:
        - generic [ref=e430]:
          - generic [ref=e431]:
            - img [ref=e432]
            - heading [level=2] [ref=e433]: Rs. 1530
            - paragraph [ref=e434]: Blue Cotton Indie Mickey Dress
            - generic [ref=e435] [cursor=pointer]:
              - generic [ref=e436]: 
              - text: Add to cart
          - generic [ref=e437]:
            - heading [level=2] [ref=e438]: Rs. 1530
            - paragraph [ref=e439]: Blue Cotton Indie Mickey Dress
            - generic [ref=e440] [cursor=pointer]:
              - generic [ref=e441]: 
              - text: Add to cart
        - list [ref=e443]:
          - listitem [ref=e444]:
            - link [ref=e445] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e446]: 
              - text: View Product
      - generic [ref=e448]:
        - generic [ref=e449]:
          - generic [ref=e450]:
            - img [ref=e451]
            - heading [level=2] [ref=e452]: Rs. 1600
            - paragraph [ref=e453]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e454] [cursor=pointer]:
              - generic [ref=e455]: 
              - text: Add to cart
          - generic [ref=e456]:
            - heading [level=2] [ref=e457]: Rs. 1600
            - paragraph [ref=e458]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e459] [cursor=pointer]:
              - generic [ref=e460]: 
              - text: Add to cart
        - list [ref=e462]:
          - listitem [ref=e463]:
            - link [ref=e464] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e465]: 
              - text: View Product
      - generic [ref=e467]:
        - generic [ref=e468]:
          - generic [ref=e469]:
            - img [ref=e470]
            - heading [level=2] [ref=e471]: Rs. 1100
            - paragraph [ref=e472]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e473] [cursor=pointer]:
              - generic [ref=e474]: 
              - text: Add to cart
          - generic [ref=e475]:
            - heading [level=2] [ref=e476]: Rs. 1100
            - paragraph [ref=e477]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e478] [cursor=pointer]:
              - generic [ref=e479]: 
              - text: Add to cart
        - list [ref=e481]:
          - listitem [ref=e482]:
            - link [ref=e483] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e484]: 
              - text: View Product
      - generic [ref=e486]:
        - generic [ref=e487]:
          - generic [ref=e488]:
            - img [ref=e489]
            - heading [level=2] [ref=e490]: Rs. 849
            - paragraph [ref=e491]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e492] [cursor=pointer]:
              - generic [ref=e493]: 
              - text: Add to cart
          - generic [ref=e494]:
            - heading [level=2] [ref=e495]: Rs. 849
            - paragraph [ref=e496]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e497] [cursor=pointer]:
              - generic [ref=e498]: 
              - text: Add to cart
        - list [ref=e500]:
          - listitem [ref=e501]:
            - link [ref=e502] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e503]: 
              - text: View Product
      - generic [ref=e505]:
        - generic [ref=e506]:
          - generic [ref=e507]:
            - img [ref=e508]
            - heading [level=2] [ref=e509]: Rs. 1299
            - paragraph [ref=e510]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e511] [cursor=pointer]:
              - generic [ref=e512]: 
              - text: Add to cart
          - generic [ref=e513]:
            - heading [level=2] [ref=e514]: Rs. 1299
            - paragraph [ref=e515]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e516] [cursor=pointer]:
              - generic [ref=e517]: 
              - text: Add to cart
        - list [ref=e519]:
          - listitem [ref=e520]:
            - link [ref=e521] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e522]: 
              - text: View Product
      - generic [ref=e524]:
        - generic [ref=e525]:
          - generic [ref=e526]:
            - img [ref=e527]
            - heading [level=2] [ref=e528]: Rs. 1000
            - paragraph [ref=e529]: Green Side Placket Detail T-Shirt
            - generic [ref=e530] [cursor=pointer]:
              - generic [ref=e531]: 
              - text: Add to cart
          - generic [ref=e532]:
            - heading [level=2] [ref=e533]: Rs. 1000
            - paragraph [ref=e534]: Green Side Placket Detail T-Shirt
            - generic [ref=e535] [cursor=pointer]:
              - generic [ref=e536]: 
              - text: Add to cart
        - list [ref=e538]:
          - listitem [ref=e539]:
            - link [ref=e540] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e541]: 
              - text: View Product
      - generic [ref=e543]:
        - generic [ref=e544]:
          - generic [ref=e545]:
            - img [ref=e546]
            - heading [level=2] [ref=e547]: Rs. 1500
            - paragraph [ref=e548]: Premium Polo T-Shirts
            - generic [ref=e549] [cursor=pointer]:
              - generic [ref=e550]: 
              - text: Add to cart
          - generic [ref=e551]:
            - heading [level=2] [ref=e552]: Rs. 1500
            - paragraph [ref=e553]: Premium Polo T-Shirts
            - generic [ref=e554] [cursor=pointer]:
              - generic [ref=e555]: 
              - text: Add to cart
        - list [ref=e557]:
          - listitem [ref=e558]:
            - link [ref=e559] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e560]: 
              - text: View Product
      - generic [ref=e562]:
        - generic [ref=e563]:
          - generic [ref=e564]:
            - img [ref=e565]
            - heading [level=2] [ref=e566]: Rs. 850
            - paragraph [ref=e567]: Pure Cotton Neon Green Tshirt
            - generic [ref=e568] [cursor=pointer]:
              - generic [ref=e569]: 
              - text: Add to cart
          - generic [ref=e570]:
            - heading [level=2] [ref=e571]: Rs. 850
            - paragraph [ref=e572]: Pure Cotton Neon Green Tshirt
            - generic [ref=e573] [cursor=pointer]:
              - generic [ref=e574]: 
              - text: Add to cart
        - list [ref=e576]:
          - listitem [ref=e577]:
            - link [ref=e578] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e579]: 
              - text: View Product
      - generic [ref=e581]:
        - generic [ref=e582]:
          - generic [ref=e583]:
            - img [ref=e584]
            - heading [level=2] [ref=e585]: Rs. 799
            - paragraph [ref=e586]: Soft Stretch Jeans
            - generic [ref=e587] [cursor=pointer]:
              - generic [ref=e588]: 
              - text: Add to cart
          - generic [ref=e589]:
            - heading [level=2] [ref=e590]: Rs. 799
            - paragraph [ref=e591]: Soft Stretch Jeans
            - generic [ref=e592] [cursor=pointer]:
              - generic [ref=e593]: 
              - text: Add to cart
        - list [ref=e595]:
          - listitem [ref=e596]:
            - link [ref=e597] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e598]: 
              - text: View Product
      - generic [ref=e600]:
        - generic [ref=e601]:
          - generic [ref=e602]:
            - img [ref=e603]
            - heading [level=2] [ref=e604]: Rs. 1200
            - paragraph [ref=e605]: Regular Fit Straight Jeans
            - generic [ref=e606] [cursor=pointer]:
              - generic [ref=e607]: 
              - text: Add to cart
          - generic [ref=e608]:
            - heading [level=2] [ref=e609]: Rs. 1200
            - paragraph [ref=e610]: Regular Fit Straight Jeans
            - generic [ref=e611] [cursor=pointer]:
              - generic [ref=e612]: 
              - text: Add to cart
        - list [ref=e614]:
          - listitem [ref=e615]:
            - link [ref=e616] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e617]: 
              - text: View Product
      - generic [ref=e619]:
        - generic [ref=e620]:
          - generic [ref=e621]:
            - img [ref=e622]
            - heading [level=2] [ref=e623]: Rs. 1400
            - paragraph [ref=e624]: Grunt Blue Slim Fit Jeans
            - generic [ref=e625] [cursor=pointer]:
              - generic [ref=e626]: 
              - text: Add to cart
          - generic [ref=e627]:
            - heading [level=2] [ref=e628]: Rs. 1400
            - paragraph [ref=e629]: Grunt Blue Slim Fit Jeans
            - generic [ref=e630] [cursor=pointer]:
              - generic [ref=e631]: 
              - text: Add to cart
        - list [ref=e633]:
          - listitem [ref=e634]:
            - link [ref=e635] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e636]: 
              - text: View Product
      - generic [ref=e638]:
        - generic [ref=e639]:
          - generic [ref=e640]:
            - img [ref=e641]
            - heading [level=2] [ref=e642]: Rs. 2300
            - paragraph [ref=e643]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e644] [cursor=pointer]:
              - generic [ref=e645]: 
              - text: Add to cart
          - generic [ref=e646]:
            - heading [level=2] [ref=e647]: Rs. 2300
            - paragraph [ref=e648]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e649] [cursor=pointer]:
              - generic [ref=e650]: 
              - text: Add to cart
        - list [ref=e652]:
          - listitem [ref=e653]:
            - link [ref=e654] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e655]: 
              - text: View Product
      - generic [ref=e657]:
        - generic [ref=e658]:
          - generic [ref=e659]:
            - img [ref=e660]
            - heading [level=2] [ref=e661]: Rs. 3000
            - paragraph [ref=e662]: Cotton Silk Hand Block Print Saree
            - generic [ref=e663] [cursor=pointer]:
              - generic [ref=e664]: 
              - text: Add to cart
          - generic [ref=e665]:
            - heading [level=2] [ref=e666]: Rs. 3000
            - paragraph [ref=e667]: Cotton Silk Hand Block Print Saree
            - generic [ref=e668] [cursor=pointer]:
              - generic [ref=e669]: 
              - text: Add to cart
        - list [ref=e671]:
          - listitem [ref=e672]:
            - link [ref=e673] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e674]: 
              - text: View Product
      - generic [ref=e676]:
        - generic [ref=e677]:
          - generic [ref=e678]:
            - img [ref=e679]
            - heading [level=2] [ref=e680]: Rs. 3500
            - paragraph [ref=e681]: Rust Red Linen Saree
            - generic [ref=e682] [cursor=pointer]:
              - generic [ref=e683]: 
              - text: Add to cart
          - generic [ref=e684]:
            - heading [level=2] [ref=e685]: Rs. 3500
            - paragraph [ref=e686]: Rust Red Linen Saree
            - generic [ref=e687] [cursor=pointer]:
              - generic [ref=e688]: 
              - text: Add to cart
        - list [ref=e690]:
          - listitem [ref=e691]:
            - link [ref=e692] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e693]: 
              - text: View Product
      - generic [ref=e695]:
        - generic [ref=e696]:
          - generic [ref=e697]:
            - img [ref=e698]
            - heading [level=2] [ref=e699]: Rs. 5000
            - paragraph [ref=e700]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e701] [cursor=pointer]:
              - generic [ref=e702]: 
              - text: Add to cart
          - generic [ref=e703]:
            - heading [level=2] [ref=e704]: Rs. 5000
            - paragraph [ref=e705]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e706] [cursor=pointer]:
              - generic [ref=e707]: 
              - text: Add to cart
        - list [ref=e709]:
          - listitem [ref=e710]:
            - link [ref=e711] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e712]: 
              - text: View Product
      - generic [ref=e714]:
        - generic [ref=e715]:
          - generic [ref=e716]:
            - img [ref=e717]
            - heading [level=2] [ref=e718]: Rs. 1400
            - paragraph [ref=e719]: Lace Top For Women
            - generic [ref=e720] [cursor=pointer]:
              - generic [ref=e721]: 
              - text: Add to cart
          - generic [ref=e722]:
            - heading [level=2] [ref=e723]: Rs. 1400
            - paragraph [ref=e724]: Lace Top For Women
            - generic [ref=e725] [cursor=pointer]:
              - generic [ref=e726]: 
              - text: Add to cart
        - list [ref=e728]:
          - listitem [ref=e729]:
            - link [ref=e730] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e731]: 
              - text: View Product
      - generic [ref=e733]:
        - generic [ref=e734]:
          - generic [ref=e735]:
            - img [ref=e736]
            - heading [level=2] [ref=e737]: Rs. 1389
            - paragraph [ref=e738]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e739] [cursor=pointer]:
              - generic [ref=e740]: 
              - text: Add to cart
          - generic [ref=e741]:
            - heading [level=2] [ref=e742]: Rs. 1389
            - paragraph [ref=e743]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e744] [cursor=pointer]:
              - generic [ref=e745]: 
              - text: Add to cart
        - list [ref=e747]:
          - listitem [ref=e748]:
            - link [ref=e749] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e750]: 
              - text: View Product
  - insertion [ref=e752]:
    - iframe [ref=e754]:
      - generic [active] [ref=f24e1]:
        - generic [ref=f24e6]:
          - link [ref=f24e7] [cursor=pointer]:
            - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=9&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
            - img [ref=f24e8]
          - generic [ref=f24e10]:
            - generic [ref=f24e13]:
              - link "Text and images in seconds" [ref=f24e16] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=0&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
              - link "Turn text and images into 3D models in minutes using AI. Fast, easy, and accurate results." [ref=f24e19] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=7&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
                - text: Turn text and images into 3D models in minutes using AI. Fast, easy, and
                - text: accurate results.
            - generic [ref=f24e22]:
              - link:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
              - link "Meshy.AI" [ref=f24e24] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=1&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
              - link "Learn More" [ref=f24e26] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
              - link [ref=f24e27] [cursor=pointer]:
                - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CdiFGkzz0aYGDGdL8kPIPhNTcmAaD5OvYhgGBwdLcqRWzx9PsuA4QASD9tJ6VAWDliuWDqA6gAYjL2Z4pyAEJqQJ0EpLMhKeDPqgDAcgDywSqBOwBT9AViaNiqKMG9bnj25cCw7kIGvWhDmYJbSyI30fYJjm6XCjChHFwh8saq3tyqk6_JAvj9yL_mUKurDJ5rd7HUuJ6xlwNt1ZDRr5HGXh88cZqVXnP6P6UlTqRkQK5pBWLkzb8yMDbFdSUs3u2VaVJVoB3SSBXZOqG224NNMvYRFvZNh1KIRlBIKR9n86wHR6k-IaS-QlXfvUWVn_p-btwv4tVRvSDa42M5Jj1vN9W0E7XrIJod6C8SORM_Rzna5YgV0vNeLLsLd13YdVOri4VxyQOn3L-8Z02pOeUNU1lnl0g66FkPVJXQ5c1n_nABL2egLTXBYgF9cvytFigBi6AB4iDqv4DqAenzLECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggxCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljZ7ruKsJeUA7EJyXFhkzXY5zuACgGYCwHICwGADAGqDQJJTsgNAeoNEwiznsGKsJeUAxVSPkQIHQQqF2PwDQKIDgmwDtWvh_oY2BMM0BUByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAuhYGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE&num=1&cid=CAQS6QEABaugfdw7lT5Jd6UAGemLfLfs-34ppJsXTSr3bSbSheWEed4YPk4THoyWb9sU4NWBudaIPxRS512_bGeFWNov5skF1SfWtBZ1dfxJ1IuM4Z5PwNwSdGH7ICWs8ioth3saALEu_n2ha8BqncSKCf0SWQi3Va_aWSWIs8ots974bcY5Bmn26hZ1Ci5LmocDUZOrkJypWPHlL2KZ3fFdfl3cJ82REyGuT9OzKaUPtw5RfV2beNChADAR_7ViR234xBCvnTXfbQCRUXCxeHQuMfrH8gPKc1jy5wSF2-i4kGBRB50Pr-0umxSmKhgB&sig=AOD64_1CRsrvl1m5YHy4rJhKcVgUuHfRvQ&client=ca-pub-1677597403311019&rf=1&nb=8&adurl=https://www.meshy.ai/%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_content%3DROW%26utm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3DPerformance-Max-ROW-Traffic%26utm_term%3D%26gad_source%3D5%26gad_campaignid%3D23733249525%26gclid%3DEAIaIQobChMIwZjBirCXlAMVUj5ECB0EKhdjEAEYASAAEgL4EvD_BwE
                - generic [ref=f24e29]:
                  - img [ref=f24e30]
                  - img [ref=f24e32]
        - img [ref=f24e40] [cursor=pointer]
        - button [ref=f24e42] [cursor=pointer]:
          - img [ref=f24e43]
        - iframe
  - contentinfo [ref=e755]:
    - generic [ref=e760]:
      - heading [level=2] [ref=e761]: Subscription
      - generic [ref=e762]:
        - textbox [ref=e763]:
          - /placeholder: Your email address
        - button [ref=e764] [cursor=pointer]:
          - generic [ref=e765]: 
        - paragraph [ref=e766]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e770]: Copyright © 2021 All rights reserved
  - link [ref=e771] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e772]: 
```

# Test source

```ts
  1  | class ProductPage {
  2  | 
  3  |     /** @param {import('@playwright/test').Page} page */
  4  |     constructor(page) {
  5  |         this.page = page;
  6  |         this.productsTitle = page.getByText("ALL PRODUCTS");
  7  |         this.searchProductTitle = page.getByRole('heading', { name: "Searched Products" });
  8  |         this.inpSearchBox = page.getByPlaceholder('Search Product');
  9  |         this.btnSubmitSearch = page.locator("#submit_search");
  10 |         this.allProductsCard = page.locator(".product-image-wrapper");
  11 | 
  12 |         //product detail page locators 
  13 |         this.productName = page.locator(".product-information h2");
  14 |         this.priceProductDetail = page.getByText('Rs.');
  15 |         this.addToCartProductDetail = page.getByRole("button", { name: 'Add to cart' });
  16 |         this.quantityInp = page.locator('#quantity');
  17 |         this.availiblityStatus = page.getByText("Availability");
  18 |     }
  19 | 
  20 |     getProductsTitle() {
  21 |         return this.productsTitle;
  22 |     }
  23 | 
  24 |     getSearchProductsTitle() {
  25 |         return this.searchProductTitle;
  26 |     }
  27 | 
  28 |     async searchProduct(productName) {
  29 |         await this.inpSearchBox.fill(productName);
  30 | 
  31 |         await Promise.all([
  32 |             this.page.waitForLoadState('networkidle'),
  33 |             this.btnSubmitSearch.click()
  34 |         ]);
  35 |     }
  36 | 
  37 |     getProductCard(productName) {
  38 |         return this.allProductsCard.filter({
  39 |             has: this.page.locator('.productinfo p'), hasText: productName
  40 |         });
  41 |     }
  42 | 
  43 |     async clickOnProductDetails(productName) {
  44 |         const product = this.getProductCard(productName);
  45 |         await product.locator("a[href*='product_details']").click();
  46 |     }
  47 | 
  48 |     async clickOnAddToCart(productName) {
  49 |         const product = this.getProductCard(productName);
  50 | 
  51 |         //Hover on product 
  52 |         await product.hover();
  53 | 
  54 |         //click on add to cart for overlay content
  55 |         await product.locator(".overlay-content a").click();
  56 |     }
  57 | 
  58 |     async getProductPrice(productName) {
  59 |         const product = this.getProductCard(productName);
  60 | 
  61 |         //Hover on product 
  62 |         await product.hover();
  63 | 
  64 |         //click on add to cart for overlay content
  65 |         const price = await product.locator(".overlay-content h2").textContent();
  66 |         return Number(price.replace(/[^\d]/g, ''));
  67 |     }
  68 | 
  69 |     //Product details method 
  70 |     getProductName() {
  71 |         return this.productName;
  72 |     }
  73 | 
  74 |     async getProductPriceFromDetailPage() {
  75 |         const price = await this.priceProductDetail.textContent();
  76 | 
  77 |         return Number(price.replace(/[^\d]/g, ''));
  78 |     }
  79 | 
  80 |     async getProductAvailiblityStatus() {
  81 |         await this.availiblityStatus().inner
  82 |     }
  83 | 
  84 |     async updateProductQuantity(quntity){
> 85 |         await this.quantityInp.fill(quntity);
     |                                ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  86 |     }
  87 | 
  88 |     async clickOnAddToCartFromDetailPage() {
  89 |         await this.addToCartProductDetail.click();
  90 |     }
  91 | 
  92 | 
  93 | }
  94 | module.exports = { ProductPage };
```