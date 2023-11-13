const navbar = document.getElementById("navbar");
const fixedHeader = document.getElementById("fixed-header");
const contentsPostion = document.getElementById("contents-position");

const navbarWidth = navbar.clientWidth;
const webWidth = document.body.clientWidth;

fixedHeader.style.left = `${navbarWidth}px`;
fixedHeader.style.width = `${webWidth - navbarWidth}px`;

// 헤더 부분에 의한 콘텐츠 영역 지정
contentsPostion.style.paddingLeft = `${navbarWidth}px`;
contentsPostion.style.paddingTop = `${fixedHeader.clientHeight}px`;
