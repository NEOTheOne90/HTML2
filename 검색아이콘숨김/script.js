//input , 버튼 , search
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

//버튼을 클릭하면 search에 active 클래스를  toggle()은 클래스추가/제거
btn.addEventListener('click', () => {
  search.classList.toggle('active'); //없으면 추가, 있으면 제거
  input.focus(); // 자동으로 인풋창에 입력가능 커서
});
