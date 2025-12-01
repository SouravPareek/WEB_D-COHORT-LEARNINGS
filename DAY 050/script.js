const reels = [
  {
    username: "Lukas Rodriguez",
    likeCount: 1200,
    isLiked: false,
    commentCount: 45,
    caption: "Enjoying the vibe ✨",
    video: "assets/reel1.mp4",
    userProfile: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    shareCount: 12,
    isFollowed: false
  },
  {
    username: "Tima Miroshnichenko",
    likeCount: 980,
    isLiked: false,
    commentCount: 32,
    caption: "Coding all night 💻🔥",
    video: "assets/reel2.mp4",
    userProfile: "https://images.pexels.com/photos/5384419/pexels-photo-5384419.jpeg",
    shareCount: 20,
    isFollowed: true
  },
  {
    username: "Nadezhda Moryak",
    likeCount: 15000,
    isLiked: false,
    commentCount: 210,
    caption: "Sunset at Bali 🌅",
    video: "assets/reel3.mp4",
    userProfile: "https://images.pexels.com/photos/10041257/pexels-photo-10041257.jpeg",
    shareCount: 320,
    isFollowed: false
  },
  {
    username: "foodie_we",
    likeCount: 2300,
    isLiked: false,
    commentCount: 80,
    caption: "Best pasta ever 🍝",
    video: "assets/reel4.mp4",
    userProfile: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    shareCount: 43,
    isFollowed: true
  },
  {
    username: "Tima Miroshnichenko",
    likeCount: 4200,
    isLiked: false,
    commentCount: 102,
    caption: "No pain, no gain 💪",
    video: "assets/reel5.mp4",
    userProfile: "https://images.pexels.com/photos/5384427/pexels-photo-5384427.jpeg",
    shareCount: 51,
    isFollowed: false
  },
  {
    username: "Atahan Demir",
    likeCount: 820,
    isLiked: false,
    commentCount: 15,
    caption: "Forest walk 🍃",
    video: "assets/reel6.mp4",
    userProfile: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    shareCount: 7,
    isFollowed: true
  },
  {
    username: "JD dancer",
    likeCount: 5400,
    isLiked: false,
    commentCount: 130,
    caption: "Dance like nobody's watching 💃",
    video: "assets/reel7.mp4",
    userProfile: "https://images.pexels.com/photos/1701194/pexels-photo-1701194.jpeg",
    shareCount: 89,
    isFollowed: false
  },
  {
    username: "Frank Schrader",
    likeCount: 3000,
    isLiked: false,
    commentCount: 77,
    caption: "OP gameplay 🔥🎮",
    video: "assets/reel8.mp4",
    userProfile: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    shareCount: 24,
    isFollowed: true
  },
  {
    username: "daily_quotes",
    likeCount: 540,
    isLiked: false,
    commentCount: 9,
    caption: "Stay positive ✨",
    video: "assets/reel9.mp4",
    userProfile: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg",
    shareCount: 3,
    isFollowed: false
  },
  {
    username: "Francesco Morrone",
    likeCount: 9000,
    isLiked: false,
    commentCount: 190,
    caption: "Vibes only 🎵",
    video: "assets/reel10.mp4",
    userProfile: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    shareCount: 110,
    isFollowed: true
  }
];

let sum ="";
reels.forEach((elem)=>{
    sum = sum + `<div class="reel">
                <video loop muted autoplay src="${elem.video}"></video>
                <div class="right">
                    <div class="like">
                        ${elem.isLiked? '<i class="ri-heart-3-fill"></i>' : '<i class="ri-heart-line"></i>'}
                        <h4>${elem.likeCount}</h4>
                    </div>
                    <div class="comment">
                        <i class="ri-chat-3-line"></i>
                        <h4>${elem.commentCount}</h4>
                    </div>
                    <div class="share">
                        <i class="ri-share-forward-line"></i>
                        <h4>${elem.shareCount}</h4>
                    </div>
                    <div class="menu">
                        <i class="ri-more-2-fill"></i>
                    </div>
                </div>
                <div class="btm">
                    <div class="btm-top">
                        <img src="${elem.userProfile}" alt="">
                        <h3>${elem.username}</h3>
                        <button>${elem.isFollowed? "Following" : "Follow"}</button>
                    </div>
                    <p class="caption">${elem.caption}</p>
                </div>
            </div>
            `;
})


var allReels = document.querySelector('.all-reels');

allReels.innerHTML = sum;


var likeIcons = document.querySelectorAll('.like i');

likeIcons.forEach((icon)=>{
    var countLikes = icon.closest('.like').querySelector('h4');
    icon.addEventListener('click', ()=>{
        var count = Number(countLikes.textContent);
        
        if (icon.classList.contains('ri-heart-line')) {
            // like
            icon.classList.remove('ri-heart-line');
            icon.classList.add('ri-heart-3-fill');
            icon.style.color = 'red';
            countLikes.textContent = count + 1;
        } else {
            // unlike
            icon.classList.remove('ri-heart-3-fill');
            icon.classList.add('ri-heart-line');
            icon.style.color = 'white';
            countLikes.textContent = Math.max(0, count - 1);
        }
    })
});


var follow = document.querySelectorAll('.btm-top button');
follow.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        if(btn.innerHTML === 'Follow'){
            btn.innerHTML = 'Following'
        }else{
            btn.innerHTML = 'Follow'
        }
    })
})