$(document).ready(function () {
  console.log("xxx");
  let projects = [
    {
      name: "2021 제9회 통일교육주간",
      img: "images/works/project1.png",
      text: "국립통일교육원 주간 행사용홈페이지 <br>- 메인화면 UI 개발 작업 <br>- 각종 게시판 기능 개발 <br>- 출석체크, 선착순 이벤트등 ajax를 이용한 실시간 데이터 처리",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , NODE.JS, AJAX, MYSQL",
      date: "2021-04 ~ 2021-05",
      per: 100,
      link: "https://www.uniedu.go.kr/uniedu/home/cms/page/uniweek/uniweek9.do",
    },
    {
      name: "2021 제9회 통일교육주간",
      img: "images/works/project2.png",
      text: "국립통일교육원 주간 행사용홈페이지 <br>- 메인화면 UI 개발 작업 <br>- 각종 게시판 기능 개발 <br>- 출석체크, 선착순 이벤트 ajax를 이용한 실시간 데이터 처리 <br>- 이상형월드컵 , 사다리타기, 십자말 풀이등 각종 게임 기능 개발",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-04 ~ 2022-05",
      per: 100,
      link: "https://www.uniedu.go.kr/uniedu/home/cms/page/uniweek/uniweek10.do?mid=UNIWEEK",
    },
    {
      name: "법무법인 AK",
      img: "images/works/ak.png",
      text: "법무법인 ak 홈페이지 <br>- 실시간 상담 예약 기능 <br>- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업 <br>- css 애니메이션을 통한 인터렉티브한 동작 구현 <br>- email.js를 사용하여 예약 완료 데이터 이메일로 전송하는 기능",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , WORDPRESS",
      date: "2022-06 ~ 2022-08",
      per: 100,
      link: "https://www.lawfirmak.com/",
    },
    {
      name: "차량 유지ˑ관리 제공 시스템",
      img: "images/works/abys.jpg",
      text: "차량 시공관리 시스템, 차량 주차장 관리 시스템 <br>- sessionStorage에 로그인 정보 저장하여 로그인 기능 구현 <br>- 차량 관리 로직 연구, 개발 <br>- JSON데이터 조작을 통하여 건물 층별 주차위치 표시기능 작업 <br>- 차량등록, 리스트 DB 테이블 작성 <br>- ajax통신으로 차량등록, 리스트화 DB 테이블 과 연계 실시간 재고 관리 처리<br>",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-06 ~ 2022-11",
      per: 100,
      link: "",
    },
    {
      name: "ABYS 집하장",
      img: "images/works/abys_jipha.png",
      text: "ABYS 업무관리 홈페이지, <br>- 실시간 재고에따른 재고 관리 <br>- 엑셀 업로드,다운 기능 <br>- 업무량에 따른 정산 기능  ",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2022-01 ~ 2022-10",
      per: 100,
      link: "",
    },
    {
      name: "현대캐피탈 차량패키지",
      img: "images/works/hy_capital.png",
      text: "현대캐피탈 앱내 차량패키지 소개 및 구매 페이지 <br>- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업 <br>- 각종 카테고리에 따른 물품 소개  <br>- 물품 구매에 따른 각종 처리 작업 <br>- 비즈뿌리오를 사용한 각종 알림톡 기능",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , MYSQL, NODE.JS",
      date: "2022-11 ~ 2022-12",
      per: 100,
      link: "",
    },
    {
      name: "ABYS 홈페이지",
      img: "images/works/ABYS2.png",
      text: "ABYS홈페이지 <br>- 이니시스모듈을 사용 상품 구매,환불,취소 기능 구현 <br>- 실시간 주문처리 상태 기능 구현 <br>- 상품 업로드및 회원 관리 등등 작업",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL, REACT",
      date: "2022-11 ~ 2023-01",
      per: 70,
      link: "https://abys-service.co.kr/",
    },
    {
      name: "차량 장비 개조 관리 시스템",
      img: "images/works/hansung.jpg",
      text: "차량 장비별 개조 관리 <br>- 차량장비 신청 기능 작업(웹앱) <br>- 장비에 따른 비용 산정 및 계산 <br>- 신청 장비에 따라 견적서 화면 개발, 비용 계산 <br>- 각 회원이 신청한 장비 리스트 관리자화면 개발, 통계화면 개발",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, NODE.JS, AJAX, MYSQL",
      date: "2023-01 ~ 2023-02",
      per: 60,
      link: "https://hansungtruck-service.com/salesAdmin",
    },
    {
      name: "쇼핑몰 리닷",
      img: "images/works/lidot_2.png",
      text: "욕실용품 쇼핑몰 홈페이지 <br>- 아임포트, 이니시스모듈을 사용하여 구매,환불,취소기능을 구현. <br>- 실시간 택배 배송 조회 모듈 사용 실시간 배송조회 기능 구현. <br>- sns로그인 라이브러리 사용하여 kakao, naver 로그인 구현 <br>- 주문목록, 장바구니 DB 테이블 작업 <br>- ajax 통신 활용하여 장바구니, 주문목록 DB 테이블 과 API 연동 및  MySql 작성 <br>- 상품등록, 관리, 재고관리등 관리자페이지 기능 구현 <br>-각종 알림톡 기능",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX",
      date: "2023-01 ~ 2023-10",
      per: 100,
      link: "https://lidot.co.kr/",
    },
    {
      name: "감동투어",
      img: "images/works/gamdongTour.png",
      text: "여행사 예약 및 홍보 홈페이지 <br>- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업  <br>- 실시간 예약 기능 <br>- 각종 카테고리에 따른 여행상품 소개  <br>- 네이버 톡톡 문의 등 각종 api 사용",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , WORDPRESS",
      date: "2023-06 ~ 2023-07",
      per: 100,
      link: "https://gohongdo.com/",
    },
    {
      name: "훈훈푸드",
      img: "images/works/hunhun.png",
      text: "각종 식품 판매 홈페이지 <br>- 전체적인 화면 레이아웃 설계, 퍼블리싱 작업 <br>- 각종 카테고리에 따른 물품 소개  <br>- 물품 구매에 따른 각종 처리 작업",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , MYSQL, NODE.JS",
      date: "2023-08 ~ 2023-09",
      per: 100,
      link: "https://hunhunfood.com/",
    },
    {
      name: "슈퍼카라운지앱 관리자 페이지",
      img: "images/works/supercar.png",
      text: "슈퍼카 라운지 앱 관리자 페이지 <br>- 구글 otp 사용 로그인 기능 개발 <br>- 각종 회원 관리 기능 (신규회원,탈퇴회원,회원승인처리) <br>- 유저 권한에 따른 기능 처리 접속 가능 ip 기능 구현<br>- 각종 게시판 관리 <br>- 정산 기능 구현",
      stack: "HTML, CSS, JS, JQUERY, BOOTSTRAP, AJAX , MYSQL, NODE.JS",
      date: "2022-07 ~ 2023-05",
      per: 100,
      link: "https://www.supercarlounge.com/suramaster",
    },
  ];

  $.each(projects, function (i, v) {
    let linkTd = ``;
    if (v.link) {
      linkTd = `<tr>
                  <th>링크</th>
                  <td><a href="${v.link}" target="_blank">${v.link}</a></td>
                </tr>`;
    }
    let str = `<div class="">
                <div class="p-2 d-flex justify-content-center cont-wrap align-items-center">
                  <img src="${v.img}" alt="" class="me-md-4" />
                  <table class="table text-center">
                    <tr>
                      <th>프로젝트 명</th>
                      <td>${v.name}</td>
                    </tr>              
                    <tr>
                      <th>설명</th>
                      <td>${v.text}</td>
                    </tr>
                    <tr>
                      <th>기술스택</th>
                      <td>${v.stack}</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>${v.date}</td>
                    </tr>
                    <tr>
                      <th>기여도</th>
                      <td>${v.per}%</td>
                    </tr>
                    ${linkTd}
                  </table>
                </div>
              </div>`;
    $("#works-slider-contents").append(str);

    let nav_str = `<div class="p-1 p-md-3">
                        <div
                          class="bg_setting"
                          style="background-image: url('${v.img}')"
                        ></div>
                      </div>`;
    $("#works-slider-nav").append(nav_str);
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    infinite: false,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: false,
    focusOnSelect: true,
    responsive: [
      // 반응형 웹 구현 옵션
      {
        breakpoint: 765, //화면 사이즈 960px
        settings: {
          //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
          slidesToShow: 2,
        },
      },
    ],
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: true,
    centerMode: true,
    focusOnSelect: true,
  });
});
7;
