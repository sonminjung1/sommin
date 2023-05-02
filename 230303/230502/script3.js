// anime({
//   targets : "ul.menu li",
//   translateX : 250,
//   easing : "linear",
//   loop : true,
//   direction : "alternate", // 다시 돌아오도록하는 에니메이션
//   delay : function(el, i, l) {
//     console.log(el, i, l);
//   }
// })

// ------박스 3개------
// anime({
//   targets : ".box1",
//   translateX : 250,
//   easing : "linear",
//   backgroundColor : "#000",
//   loop : true,
//   direction : "alternate",
//   borderRadius : "50%"
// })
// anime({
//   targets : ".box2",
//   translateX : 280,
//   translateY : 300,
//   duration : 1000,
//   delay : 1000,
//   easing : "easeOutBounce",
//   loop : true,
//   direction : "alternate",
// })
// anime({
//   targets : ".box3",
//   translateX : {
//     value : 400,
//     duration : 1500,
//     delay : 1000,
//   },
//   rotate : {
//     value : 360,
//     duration : 1200
//   }
// })

// ★★ 타임라인 사용하기 > circle 2개 ★★
// let tl = anime.timeline({
//   easing : "linear",
//   duration : 1000
// })

// tl.add({
//   targets : ".circle1",
//   translateX : 500
// })

// .add({
//   targets : ".circle1",
//   translateY : 500
// })
// .add({
//   targets : ".circle1",
//   translateX : 0 // -200 이런식으로 넣으면 빠져나감,,
// })
// .add({
//   targets : ".circle1",
//   translateY : 0 // -200 이런식으로 넣으면 빠져나감,,
// })
// .add({
//   targets : ".circle2",
//   scale : 1.5,
//   rotate : 360,
//   borderRadius : 0
// })

// ★★ section 에니메이션 사용해보기 ★★
// anime({
//   targets : "ul li",
//   translateY : function(el, i) {
//     if (i % 2 == 0) {
//       return 80
//     }
//     else {
//       return -80
//     }
//   },
//   opacity : 1,
//   easing : "linear",
//   duration : 1500
//   // delay : function(el, i) {
//   //   return i * 300
//   // }
//   // delay : anime.stagger(300) // 위에 함수랑 똑같음
  
// })

// ★★ section 에니메이션2 사용해보기 ★★

const staggerWrap = document.querySelector("ul");
const fragment = document.createDocumentFragment();
// createDocumentFragment 
// > 다른 노드 요소를 담는 임시 컨테이너 역할을 맡기는 함수!
const grid = [9, 5];
const col = grid[0];
const row = grid[1];
const allElem = col * row;

for(let i = 0; i < allElem; i++) {
  const li = document.createElement("li");
  fragment.appendChild(li);
}
staggerWrap.appendChild(fragment);

let tl = anime.timeline({
  targets : "ul li",
  delay : anime.stagger(200, {
    grid : [9, 5],
    from : "center"
  }),
  loop : true,
  direction : "alternate" // 역방향으로 움직여!
})

tl.add({
  scale : [
    {value : 0.1, easing : "easeInOutSine", duration : 500},
    {value : 1, easing : "easeOutQuad", duration : 1200},
  ]
})

.add ({
  translateX : anime.stagger(10, {
    grid : [9, 5],
    from : "center",
    axis : "x"
  }),
  translateY : anime.stagger(10, {
    grid : [9, 5],
    from : "center",
    axis : "y"
  }),
  rotate : anime.stagger([0, 90], {
    grid : [9, 5],
    from : "center",
    axis : "x"
  }),
})

// anime({
//   targets : "ul li",
//   easing : "linear",
//   duration : 1000,
//   // scale : anime.stagger([0.5, 2])

//   // scale : anime.stagger([0.5, 1], {
//   //   grid : [9, 3],
//   //   from : "center"
//   // })

//   scale : anime.stagger([0.5, 1],{
//     grid : [9, 3],
//     from : "center",
//     axis : "x"
//   })
// })