// ======== get URL ========
function appUrl() {
    location.href =
      "https://apps.apple.com/vn/app/roulette-rendezvous-spin/id6479869200";
}

// ======== get Icon ========
appIcon = {
  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/60/79/07/6079070b-e6f7-a43a-774c-9a3b87a1432e/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/246x0w.webp",
};
var iconInfo = appIcon;
document.getElementById('iconLarge').src = iconInfo.icon;
document.getElementById('iconSmall').src = iconInfo.icon;

// ======== get img url ========
imgUrl({
  img1: "https://vn-appstore.com/id010597666/images/img1.jpg",
  img2: "https://vn-appstore.com/id010597666/images/img2.jpg",
  img3: "https://vn-appstore.com/id010597666/images/img3.jpg",
  img4: "https://vn-appstore.com/id010597666/images/img4.jpg",
  img5: "https://vn-appstore.com/id010597666/images/img5.jpg",

  appImg1:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/20/2c/9e/202c9e8d-2806-fcf3-2b8d-f8ca4fe14854/e0d64158-8a57-4120-b6b1-192519dd07f4_1.jpg/434x0w.webp",
  appImg2:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource122/v4/53/84/29/5384297b-dcdb-8cb4-e5e7-a9fc2dd3cd2c/cbd8a03d-8b85-40ea-8317-27cb2d8faf3a_2.jpg/434x0w.webp",
  appImg3:
    "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource112/v4/ec/b6/63/ecb663d8-3faf-2073-7924-4d21dc272c69/45b8465a-7611-42a4-ab85-11bc07b0380b_3.jpg/434x0w.webp",
});

function imgUrl ({img1, img2, img3, img4, img5, appImg1, appImg2, appImg3}) {
  document.getElementById('img1').src = img1
  document.getElementById('img2').src = img2
  document.getElementById('img3').src = img3
  document.getElementById('img4').src = img4
  document.getElementById('img5').src = img5
  document.getElementById('pic1').src = appImg1
  document.getElementById('pic2').src = appImg2
  document.getElementById('pic3').src = appImg3
}