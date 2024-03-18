// const target = document.querySelector("#dynamic"); //html에서 dynamic 선택

// //함수 만들기
// function blink(){
//     target.classList.toggle("active"); // dynamic에 active 클래스 추가<->삭제 반복
// }
// setInterval(blink, 500) // blink 함수를 0.5초마다 실행

// const string = "I want to be a Front-end Developer";//원하는 텍스트를 string변수 선언
// const split = string.split(""); //string의 텍스트를 여러개의 문자열로 나눠줌

// const str = 'The quick brown fox';
// //split을 이용해 문자열 나누기
// const words = str.split(' ');
// console.log(words);
// //["The", "quick", "brown", "fox"]
// const chars = str.split('');
// console.log(chars);



// function reset(){ 
//     target.textContent = ""; //textContent의 내용 없애주기
//     const resplit = string.split(""); 
//   // string의 텍트스를 여러개의 문자열로 나눠주고 resplit 변수에 할당
//     dynamic(resplit); // dynamic함수에 resplit인자를 넣어서 실행
// }

// function dynamic(arr){
//     if(arr.length > 0){
//         target.textContent += arr.shift();
//         setTimeout(function(){
//             dynamic(arr)}, 80)
//     } else { //배열의 길이가 0이하이면(배열에 요소가 없으면)
//         setTimeout(reset, 3000); //3초후에 reset함수 실행
//     }
// }
// dynamic(split);