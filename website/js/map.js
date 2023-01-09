

var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
	mapOption = {
		center: new kakao.maps.LatLng(35.9473428, 126.681225), // 지도의 중심좌표
		level: 5 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
 
var positions4 = [
    {  
      content : "은파관광지",
      latlng:new kakao.maps.LatLng(35.95536227,126.6890748)
    }
 ,
    {
      content : "금강호관광지",
      latlng:new kakao.maps.LatLng(36.01987856,126.7653058)
    }
 ,
    {
      content : "대둔산도립공원",
      latlng:new kakao.maps.LatLng(36.11708032,127.3328815)
    }
 ,
    {
      content : "모악산도립공원",
      latlng:new kakao.maps.LatLng(35.72946608,127.1098589)
    }
 ,
    {
      content : "고산자연휴양림",
      latlng:new kakao.maps.LatLng(35.96224205,127.2328719)
    }
 ,
    {
      content : "상관 공기마을 편백숲",
      latlng:new kakao.maps.LatLng(35.737491,127.2023884)
    }
 ,
    {
      content : "대아수목원&대아호",
      latlng:new kakao.maps.LatLng(35.97623865,127.3003851)
    }
 ,
    {
      content : "비비정",
      latlng:new kakao.maps.LatLng(35.90154901,127.071693)
    }
 ,
    {
      content : "비비정예술열차",
      latlng:new kakao.maps.LatLng(35.89880244,127.0676418)
    }
 ,
    {
      content : "삼례문화예술촌",
      latlng:new kakao.maps.LatLng(35.90623513,127.0658535)
    }
 ,
    {
      content : "삼례책마을",
      latlng:new kakao.maps.LatLng(35.90745719,127.065756)
    }
 ,
    {
      content : "그림책미술관",
      latlng:new kakao.maps.LatLng(35.90832046,127.068059)
    }
 ,
    {
      content : "대한민국술테마박물관",
      latlng:new kakao.maps.LatLng(35.726048,127.1361627)
    }
 ,
    {
      content : "완주전통문화체험장",
      latlng:new kakao.maps.LatLng(35.98879491,127.261342)
    }
 ,
    {
      content : "청소년전통문화체험관",
      latlng:new kakao.maps.LatLng(35.98879491,127.261342)
    }
 ,
    {
      content : "놀토피아",
      latlng:new kakao.maps.LatLng(35.98879491,127.261342)
    }
 ,
    {
      content : "오성한옥마을",
      latlng:new kakao.maps.LatLng(35.90695186,127.2367573)
    }
 ,
    {
      content : "무궁화오토캠핑장",
      latlng:new kakao.maps.LatLng(35.97398132,127.2315513)
    }
 ,
    {
      content : "송광사&벚꽃길",
      latlng:new kakao.maps.LatLng(35.885763,127.2417509)
    }
 ,
    {
      content : "위봉사&위봉폭포&위봉산성",
      latlng:new kakao.maps.LatLng(35.9105769,127.2572831)
    }
 ,
    {
      content : "화암사",
      latlng:new kakao.maps.LatLng(36.06629938,127.2872339)
    }
 ,
    {
      content : "춘향테마파크",
      latlng:new kakao.maps.LatLng(35.401464,127.386902)
    }
 ,
    {
      content : "남원항공우주천문대",
      latlng:new kakao.maps.LatLng(35.399194,127.387388)
    }
 ,
    {
      content : "남원시립김병종미술관",
      latlng:new kakao.maps.LatLng(35.398706,127.389555)
    }
 ,
    {
      content : "혼불문학관",
      latlng:new kakao.maps.LatLng(35.481096,127.319992)
    }
 ,
    {
      content : "국악의 성지",
      latlng:new kakao.maps.LatLng(35.459997,127.569101)
    }
 ,
    {
      content : "지리산허브밸리",
      latlng:new kakao.maps.LatLng(35.435092,127.548617)
    }
 ,
    {
      content : "남원백두대간생태교육장전시관",
      latlng:new kakao.maps.LatLng(35.397328,127.5079302)
    }
 ,
    {
      content : "만인의총",
      latlng:new kakao.maps.LatLng(35.420404,127.377325)
    }
 ,
    {
      content : "아담원",
      latlng:new kakao.maps.LatLng(35.440571,127.476826)
    }
 ,
    {
      content : "남원관광지",
      latlng:new kakao.maps.LatLng(35.402481,127.386137)
    }
 ,
    {
      content : "오수의견관광지",
      latlng:new kakao.maps.LatLng(35.54520338,127.3326779)
    }
 ,
    {
      content : "사선대관광지",
      latlng:new kakao.maps.LatLng(35.672357,127.2746265)
    }
 ,
    {
      content : "무주 덕유산 리조트",
      latlng:new kakao.maps.LatLng(35.889797,127.731389)
    }
 ,
    {
      content : "방화동가족휴가촌",
      latlng:new kakao.maps.LatLng(35.59064179,127.5268761)
    }
 ,
    {
      content : "금마관광지",
      latlng:new kakao.maps.LatLng(36.0015063,127.0570781)
    }
 ,
    {
      content : "미륵사지관광지",
      latlng:new kakao.maps.LatLng(36.01154232,127.0287139)
    }
 ,
    {
      content : "왕궁보석테마 관광지",
      latlng:new kakao.maps.LatLng(35.99061279,127.1025486)
    }
 ,
    {
      content : "웅포관광지",
      latlng:new kakao.maps.LatLng(36.06581391,126.8754193)
    }
 ,
    {
      content : "운일암반일암",
      latlng:new kakao.maps.LatLng(35.979875,127.396028)
    }
 ,
    {
      content : "마이산도립공원 일원",
      latlng:new kakao.maps.LatLng(35.757066,127.393795)
    }
 ,
    {
      content : "용담호및주변시설",
      latlng:new kakao.maps.LatLng(35.946973,127.525991)
    }
 ,
    {
      content : "운장산자연휴양림",
      latlng:new kakao.maps.LatLng(35.895328,127.425691)
    }
 ,
    {
      content : "데미샘자연휴양림",
      latlng:new kakao.maps.LatLng(35.651308,127.464888)
    }
 ,
    {
      content : "진안고원치유의숲",
      latlng:new kakao.maps.LatLng(35.885974,127.403479)
    }
 ,
    {
      content : "가위박물관",
      latlng:new kakao.maps.LatLng(35.766161,127.414949)
    }
 ,
    {
      content : "산청전통한방휴양관광지",
      latlng:new kakao.maps.LatLng(35.44106575,127.8293609)
    }
 ,
    {
      content : "변산해수욕장",
      latlng:new kakao.maps.LatLng(35.67999179,126.5309105)
    }
 ,
    {
      content : "위도해수욕장",
      latlng:new kakao.maps.LatLng(35.60583098,126.2853294)
    }
 ,
    {
      content : "모항해수욕장",
      latlng:new kakao.maps.LatLng(35.5831428,126.5082098)
    }
 ,
    {
      content : "석정온천관광지",
      latlng:new kakao.maps.LatLng(35.43111098,126.7405968)
    }
	,
	  {
      content : "심우장",
      latlng:new kakao.maps.LatLng(37.5936268,126.9916662)
 
    },
    {
      content : "길상사",
      latlng:new kakao.maps.LatLng(37.59910942,126.9946522)
 
    },
    {
      content : "한국가구박물관",
      latlng:new kakao.maps.LatLng(37.60037831,126.9934492)
 
    },
    {
      content : "용마폭포공원",
      latlng:new kakao.maps.LatLng(37.57335201,127.0891138)
 
    },
    {
      content : "망우리공원",
      latlng:new kakao.maps.LatLng(37.59835362,127.1148164)
 
    },
    {
      content : "중랑캠핑숲",
      latlng:new kakao.maps.LatLng(37.606893,127.1106972)
 
    },
    {
      content : "옹기테마공원",
      latlng:new kakao.maps.LatLng(37.61265372,127.0885194)
 
    },
    {
      content : "허준근린공원",
      latlng:new kakao.maps.LatLng(37.56759867,126.8537291)
 
    },
    {
      content : "양천향교",
      latlng:new kakao.maps.LatLng(37.572863,126.839905)
 
    },
    {
      content : "약사사",
      latlng:new kakao.maps.LatLng(37.58312625,126.8050072)
 
    },
    {
      content : "양천고성지",
      latlng:new kakao.maps.LatLng(37.57425363,126.8413319)
 
    },
    {
      content : "궁산땅굴역사전시관",
      latlng:new kakao.maps.LatLng(37.57266746,126.8383649)
 
    },
    {
      content : "허가바위",
      latlng:new kakao.maps.LatLng(37.56983571,126.8500301)
 
    },
    {
      content : "미당서정주의 집",
      latlng:new kakao.maps.LatLng(37.4734032,126.973367)
 
    },
    {
      content : "예술의전당",
      latlng:new kakao.maps.LatLng(37.4802402,127.0142152)
 
    },
    {
      content : "국립국악원",
      latlng:new kakao.maps.LatLng(37.47771881,127.0098185)
 
    },
    {
      content : "헌인릉",
      latlng:new kakao.maps.LatLng(37.46537744,127.0837156)
 
    },
    {
      content : "매헌 윤봉길의사 기념관",
      latlng:new kakao.maps.LatLng(37.4730498,127.0369771)
 
    },
    {
      content : "고투몰",
      latlng:new kakao.maps.LatLng(37.50622031,127.0050517)
 
    },
    {
      content : "세빛섬, 반포대교 달빛무지개분수",
      latlng:new kakao.maps.LatLng(37.5124362,126.9959623)
 
    },
    {
      content : "삼성딜라이트",
      latlng:new kakao.maps.LatLng(37.4966085,127.0269023)
 
    },
    {
      content : "강감찬전시관",
      latlng:new kakao.maps.LatLng(37.47197208,126.959371)
 
    },
    {
      content : "은평역사한옥박물관",
      latlng:new kakao.maps.LatLng(37.64033246,126.9380102)
 
    },
    {
      content : "금성당",
      latlng:new kakao.maps.LatLng(37.63513547,126.92538)
 
    },
	{
		content : "심우장",
		latlng:new kakao.maps.LatLng(37.5936268,126.9916662)
   
	  },
	  {
		content : "길상사",
		latlng:new kakao.maps.LatLng(37.59910942,126.9946522)
   
	  },
	  {
		content : "한국가구박물관",
		latlng:new kakao.maps.LatLng(37.60037831,126.9934492)
   
	  },
	  {
		content : "용마폭포공원",
		latlng:new kakao.maps.LatLng(37.57335201,127.0891138)
   
	  },
	  {
		content : "망우리공원",
		latlng:new kakao.maps.LatLng(37.59835362,127.1148164)
   
	  },
	  {
		content : "중랑캠핑숲",
		latlng:new kakao.maps.LatLng(37.606893,127.1106972)
   
	  },
	  {
		content : "옹기테마공원",
		latlng:new kakao.maps.LatLng(37.61265372,127.0885194)
   
	  },
	  {
		content : "허준근린공원",
		latlng:new kakao.maps.LatLng(37.56759867,126.8537291)
   
	  },
	  {
		content : "양천향교",
		latlng:new kakao.maps.LatLng(37.572863,126.839905)
   
	  },
	  {
		content : "약사사",
		latlng:new kakao.maps.LatLng(37.58312625,126.8050072)
   
	  },
	  {
		content : "양천고성지",
		latlng:new kakao.maps.LatLng(37.57425363,126.8413319)
   
	  },
	  {
		content : "궁산땅굴역사전시관",
		latlng:new kakao.maps.LatLng(37.57266746,126.8383649)
   
	  },
	  {
		content : "허가바위",
		latlng:new kakao.maps.LatLng(37.56983571,126.8500301)
   
	  },
	  {
		content : "미당서정주의 집",
		latlng:new kakao.maps.LatLng(37.4734032,126.973367)
   
	  },
	  {
		content : "예술의전당",
		latlng:new kakao.maps.LatLng(37.4802402,127.0142152)
   
	  },
	  {
		content : "국립국악원",
		latlng:new kakao.maps.LatLng(37.47771881,127.0098185)
   
	  },
	  {
		content : "헌인릉",
		latlng:new kakao.maps.LatLng(37.46537744,127.0837156)
   
	  },
	  {
		content : "매헌 윤봉길의사 기념관",
		latlng:new kakao.maps.LatLng(37.4730498,127.0369771)
   
	  },
	  {
		content : "고투몰",
		latlng:new kakao.maps.LatLng(37.50622031,127.0050517)
   
	  },
	  {
		content : "세빛섬, 반포대교 달빛무지개분수",
		latlng:new kakao.maps.LatLng(37.5124362,126.9959623)
   
	  },
	  {
		content : "삼성딜라이트",
		latlng:new kakao.maps.LatLng(37.4966085,127.0269023)
   
	  },
	  {
		content : "강감찬전시관",
		latlng:new kakao.maps.LatLng(37.47197208,126.959371)
   
	  },
	  {
		content : "은평역사한옥박물관",
		latlng:new kakao.maps.LatLng(37.64033246,126.9380102)
   
	  },
	  {
		content : "금성당",
		latlng:new kakao.maps.LatLng(37.63513547,126.92538)
   
	  }
 ];


var positions3 = [
	{
		content : "금암기적비",
		latlng:new kakao.maps.LatLng(37.644,126.918)
	  },
	  {
		content : "금성당",
		latlng:new kakao.maps.LatLng(37.635,126.925)
	  },
	  {
		content : "인조별서유기비",
		latlng:new kakao.maps.LatLng(37.608,126.916)
	  },
	  {
		content : "서울호암산성",
		latlng:new kakao.maps.LatLng(37.446,126.922)
	  },
	  {
		content : "순흥안씨양도공파묘군",
		latlng:new kakao.maps.LatLng(37.458,126.909)
	  },
	  {
		content : "서울암사동유적",
		latlng:new kakao.maps.LatLng(37.559,127.13)
	  },
	  {
		content : "광주이씨광릉부원군파묘역",
		latlng:new kakao.maps.LatLng(37.56,127.13)
	  },
	  {
		content : "문희공유창묘역",
		latlng:new kakao.maps.LatLng(37.546,127.169)
	  },
	  {
		content : "판소리(수궁가)",
		latlng:new kakao.maps.LatLng(37.516,127.022)
	  },
	  {
		content : "봉화산 도당굿",
		latlng:new kakao.maps.LatLng(37.501,127.057)
	  },
	  {
		content : "봉산탈춤",
		latlng:new kakao.maps.LatLng(37.51,127.044)
	  },
	  {
		content : "선소리산타령",
		latlng:new kakao.maps.LatLng(37.51,127.044)
	  },
	  {
		content : "가야금산조및병창",
		latlng:new kakao.maps.LatLng(37.526,127.024)
	  },
	  {
		content : "가야금산조및병창",
		latlng:new kakao.maps.LatLng(37.469,127.107)
	  },
	  {
		content : "승무",
		latlng:new kakao.maps.LatLng(37.474,127.095)
	  },
	  {
		content : "강령탈춤",
		latlng:new kakao.maps.LatLng(37.508,127.043)
	  },
	  {
		content : "대목장",
		latlng:new kakao.maps.LatLng(37.485,127.054)
	  },
	  {
		content : "입사장",
		latlng:new kakao.maps.LatLng(37.514,127.056)
	  },
	  {
		content : "서울새남굿",
		latlng:new kakao.maps.LatLng(37.51,127.044)
	  },
	  {
		content : "전주이씨 광평대군파 묘역",
		latlng:new kakao.maps.LatLng(37.486,127.092)
	  },
	  {
		content : "봉은사 선불당",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "홍무25년장흥사명동종",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사판전현판",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "대방광불화엄경수소연의초목판",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사목사천왕상",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사목삼불상(석가불,아미타불,약사불)",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "인천해관문서",
		latlng:new kakao.maps.LatLng(37.518,127.033)
	  },
	  {
		content : "완남부원군 이후원 묘역",
		latlng:new kakao.maps.LatLng(37.475,127.096)
	  },
	  {
		content : "봉은사목삼존불상(석가불,가섭존자,아난존자)",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사 목십육나한상",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사대웅전신중도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사판전신중도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사괘불도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사비로자나불도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사칠성도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사삼세불도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사삼장보살도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사감로도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사영산회상도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "봉은사십육나한도",
		latlng:new kakao.maps.LatLng(37.515,127.057)
	  },
	  {
		content : "삼강행실도",
		latlng:new kakao.maps.LatLng(37.499,127.034)
	  },
	  {
		content : "선종유심결등합철",
		latlng:new kakao.maps.LatLng(37.531,127.035)
	  },
	  {
		content : "우암송시열 초구 일령",
		latlng:new kakao.maps.LatLng(37.529,127.038)
	  },
	  {
		content : "삼해주약주",
		latlng:new kakao.maps.LatLng(37.532,127.025)
	  },
	  {
		content : "운봉수향낭",
		latlng:new kakao.maps.LatLng(37.515,127.033)
	  },
	  {
		content : "일월수다라니주머니",
		latlng:new kakao.maps.LatLng(37.515,127.033)
	  },
	  {
		content : "오조룡왕비보",
		latlng:new kakao.maps.LatLng(37.515,127.033)
	  },
	  {
		content : "남사당놀이",
		latlng:new kakao.maps.LatLng(37.51,127.044)
	  },
	  {
		content : "북청사자놀음",
		latlng:new kakao.maps.LatLng(37.51,127.044)
	  },
	  {
		content : "아기씨당",
		latlng:new kakao.maps.LatLng(37.557,127.037)
	  },
	  {
		content : "안정사터 마애불 명문 약사불",
		latlng:new kakao.maps.LatLng(37.56,127.026)
	  },
	  {
		content : "낙성대 삼층석탑",
		latlng:new kakao.maps.LatLng(37.471,126.959)
	  },
	  {
		content : "정정공 강사상 묘역",
		latlng:new kakao.maps.LatLng(37.466,126.918)
	  },
	  {
		content : "효민공 이경직 묘역",
		latlng:new kakao.maps.LatLng(37.47,126.974)
	  },
	  {
		content : "봉천동 마애미륵불 좌상",
		latlng:new kakao.maps.LatLng(37.463,126.966)
	  },
	  {
		content : "강감찬 생가 터",
		latlng:new kakao.maps.LatLng(37.475,126.96)
	  },
	  {
		content : "서울 연산군묘",
		latlng:new kakao.maps.LatLng(37.661,127.022)
	  },
	  {
		content : "서울 초안산분묘군",
		latlng:new kakao.maps.LatLng(37.637,127.045)
	  },
	  {
		content : "서울 방학동 전형필 가옥",
		latlng:new kakao.maps.LatLng(37.664,127.028)
	  },
	  {
		content : "도봉사 치성광여래삼존도",
		latlng:new kakao.maps.LatLng(37.685,127.03)
	  },
	  {
		content : "석굴암 천룡도",
		latlng:new kakao.maps.LatLng(37.696,127.017)
	  },
	  {
		content : "천축사 목조불단",
		latlng:new kakao.maps.LatLng(37.694,127.019)
	  },
	  {
		content : "천축사 마애사리탑",
		latlng:new kakao.maps.LatLng(37.694,127.019)
	  },
	  {
		content : "방학동 은행나무",
		latlng:new kakao.maps.LatLng(37.661,127.023)
	  },
	  {
		content : "양효공 안맹담과 정의공주 묘역",
		latlng:new kakao.maps.LatLng(37.662,127.023)
	  },
	  {
		content : "전주 이씨 영해군파 묘역",
		latlng:new kakao.maps.LatLng(37.678,127.029)
	  },
	  {
		content : "충정공 목서흠 묘역",
		latlng:new kakao.maps.LatLng(37.662,127.024)
	  },
	  {
		content : "도봉서원과 각석군",
		latlng:new kakao.maps.LatLng(37.688,127.029)
	  },
	  {
		content : "만월암석불좌상",
		latlng:new kakao.maps.LatLng(37.685,127.03)
	  },
	  {
		content : "천축사 목조석가삼존불",
		latlng:new kakao.maps.LatLng(37.694,127.019)
	  },
	  {
		content : "천축사비로자나삼신불도",
		latlng:new kakao.maps.LatLng(37.694,127.019)
	  },
	  {
		content : "천축사비로자나삼괘불도",
		latlng:new kakao.maps.LatLng(37.694,127.019)
	  },
	  {
		content : "한일섭제 박종선류 아쟁산조",
		latlng:new kakao.maps.LatLng(37.666,127.033)
	  },
	  {
		content : "율창 유의호 송서",
		latlng:new kakao.maps.LatLng(37.648,127.043)
	  },
	  {
		content : "호안공 이등과 의령옹주 묘역",
		latlng:new kakao.maps.LatLng(37.678,127.022)
	  }
	  ,

	{
	   content : "옥정암지 마애석불 좌상",
	   latlng:new kakao.maps.LatLng(35.544,127.279)
  
	 }
  ,
	{
	   content : "천도교 임실교당",
	   latlng:new kakao.maps.LatLng(35.611,127.275)
  
	 }
  ,
	{
	   content : "의견비",
	   latlng:new kakao.maps.LatLng(35.537,127.329)
  
	 }
  ,
	{
	   content : "이웅재고가",
	   latlng:new kakao.maps.LatLng(35.504,127.316)
  
	 }
  ,
	{
	   content : "사곡리남근석",
	   latlng:new kakao.maps.LatLng(35.516,127.177)
  
	 }
  ,
	{
	   content : "학정리석불",
	   latlng:new kakao.maps.LatLng(35.505,127.23)
  
	 }
  ,
	{
	   content : "영천서원",
	   latlng:new kakao.maps.LatLng(35.575,127.374)
  
	 }
  ,
	{
	   content : "주암서원",
	   latlng:new kakao.maps.LatLng(35.565,127.354)
  
	 }
  ,
	{
	   content : "신안서원",
	   latlng:new kakao.maps.LatLng(35.599,127.238)
  
	 }
  ,
	{
	   content : "해월암",
	   latlng:new kakao.maps.LatLng(35.537,127.322)
  
	 }
  ,
	{
	   content : "죽림암",
	   latlng:new kakao.maps.LatLng(35.616,127.269)
  
	 }
  ,
	{
	   content : "임실향교대성전",
	   latlng:new kakao.maps.LatLng(35.617,127.278)
  
	 }
  ,
	{
	   content : "노동환가옥",
	   latlng:new kakao.maps.LatLng(35.484,127.266)
  
	 }
  ,
	{
	   content : "상이암부도",
	   latlng:new kakao.maps.LatLng(35.635,127.425)
  
	 }
  ,
	{
	   content : "광제정",
	   latlng:new kakao.maps.LatLng(35.493,127.244)
  
	 }
  ,
	{
	   content : "오괴정",
	   latlng:new kakao.maps.LatLng(35.51,127.302)
  
	 }
  ,
	{
	   content : "이상형묘비",
	   latlng:new kakao.maps.LatLng(35.611,127.116)
  
	 }
  ,
	{
	   content : "삼청동비",
	   latlng:new kakao.maps.LatLng(35.635,127.415)
  
	 }
  ,
	{
	   content : "삼계석문",
	   latlng:new kakao.maps.LatLng(35.498,127.313)
  
	 }
  ,
	{
	   content : "단구대",
	   latlng:new kakao.maps.LatLng(35.498,127.313)
  
	 }
  ,
	{
	   content : "임실현읍총병풍",
	   latlng:new kakao.maps.LatLng(35.655,127.222)
  
	 }
  ,
	{
	   content : "양요정",
	   latlng:new kakao.maps.LatLng(35.63,127.155)
  
	 }
  ,
	{
	   content : "수운정",
	   latlng:new kakao.maps.LatLng(35.669,127.208)
  
	 }
  ,
	{
	   content : "삼계강사계안",
	   latlng:new kakao.maps.LatLng(35.504,127.318)
  
	 }
  ,
	{
	   content : "관곡서원소장전적및고문서",
	   latlng:new kakao.maps.LatLng(35.597,127.36)
  
	 }
  ,
	{
	   content : "이석용생가",
	   latlng:new kakao.maps.LatLng(35.647,127.348)
  
	 }
  ,
	{
	   content : "임실성미산성",
	   latlng:new kakao.maps.LatLng(35.683,127.283)
  
	 }
  ,
	{
	   content : "임실상가윷판형암각화유적",
	   latlng:new kakao.maps.LatLng(35.645,127.242)
  
	 }
  ,
	{
	   content : "청산진성",
	   latlng:new kakao.maps.LatLng(34.389,126.773)
  
	 }
  ,
	{
	   content : "임실진구사지석등",
	   latlng:new kakao.maps.LatLng(35.634,127.211)
  
	 }
  ,
	{
	   content : "임실덕천리가침박달군락",
	   latlng:new kakao.maps.LatLng(35.671,127.295)
  
	 }
  ,
	{
	   content : "임식덕천리산개나리군락",
	   latlng:new kakao.maps.LatLng(35.67,127.295)
  
	 }
  ,
	{
	   content : "임실필봉농악",
	   latlng:new kakao.maps.LatLng(35.536,127.154)
  
	 }
  ,
	{
	   content : "한지장 홍춘수",
	   latlng:new kakao.maps.LatLng(35.569,127.203)
  
	 }
  ,
	{
	   content : "임실오수망루",
	   latlng:new kakao.maps.LatLng(35.538,127.328)
  
	 }
  ,
	{
	   content : "임실회문망루",
	   latlng:new kakao.maps.LatLng(35.509,127.156)
  
	 }
  ,
	{
	   content : "임실운암망루",
	   latlng:new kakao.maps.LatLng(35.594,127.119)
  
	 }
  ,
	{
	   content : "임실용암리사지석조비로자나불상",
	   latlng:new kakao.maps.LatLng(35.635,127.21)
  
	 }
  ,
	{
	   content : "오수리석불",
	   latlng:new kakao.maps.LatLng(35.534,127.325)
  
	 }
  ,
	{
	   content : "만취정",
	   latlng:new kakao.maps.LatLng(35.479,127.278)
  
	 }
  ,
	{
	   content : "신흥사대웅전",
	   latlng:new kakao.maps.LatLng(35.754,127.259)
  
	 }
  ,
	{
	   content : "운서정",
	   latlng:new kakao.maps.LatLng(35.67,127.276)
  
	 }
  ,
	{
	   content : "김복규,김기종효자정려비및정판",
	   latlng:new kakao.maps.LatLng(35.594,127.263)
  
	 }
  ,
	{
	   content : "임실이도리미륵불상",
	   latlng:new kakao.maps.LatLng(35.617,127.285)
  
	 }
  ,
	{
	   content : "상이암부도",
	   latlng:new kakao.maps.LatLng(35.635,127.425)
  
	 }
  ,
	{
	   content : "만경대 암각서",
	   latlng:new kakao.maps.LatLng(35.804,127.156)
  
	 }
  ,
	{
	   content : "남고진 사적비",
	   latlng:new kakao.maps.LatLng(35.803,127.152)
  
	 }
  ,
	{
	   content : "덕진공원 삼층석탑",
	   latlng:new kakao.maps.LatLng(35.846,127.121)
  
	 }
  ,
	{
	   content : "전북대 석불입상",
	   latlng:new kakao.maps.LatLng(35.841,127.131)
  
	 }
  ,
	{
	   content : "박진 효자비",
	   latlng:new kakao.maps.LatLng(35.812,127.157)
  
	 }
  ,
	{
	   content : "스트로마톨라이트",
	   latlng:new kakao.maps.LatLng(37.256,128.433)
  
	 }
  ,
	{
	   content : "전주류씨 시사재",
	   latlng:new kakao.maps.LatLng(35.84,127.157)
  
	 }
  ,
	{
	   content : "혜봉원목조보살입상",
	   latlng:new kakao.maps.LatLng(35.944,126.936)
  
	 }
  ,
	{
	   content : "영등동유적",
	   latlng:new kakao.maps.LatLng(35.962,126.977)
  
	 }
  ,
	{
	   content : "자명사대웅전 목조여래좌상",
	   latlng:new kakao.maps.LatLng(36.13,126.953)
  
	 }
  ,
	{
	   content : "아 석 정",
	   latlng:new kakao.maps.LatLng(35.996,127.048)
  
	 }
  ,
	{
	   content : "수 덕 정",
	   latlng:new kakao.maps.LatLng(36.07,127.099)
  
	 }
  ,
	{
	   content : "학현산성",
	   latlng:new kakao.maps.LatLng(36.002,127.117)
  
	 }
  ,
	{
	   content : "여산척화비",
	   latlng:new kakao.maps.LatLng(36.059,127.085)
  
	 }
  ,
	{
	   content : "용화산성",
	   latlng:new kakao.maps.LatLng(36.016,127.063)
  
	 }
  ,
	{
	   content : "문수사 목조여래좌상",
	   latlng:new kakao.maps.LatLng(36.042,127.117)
  
	 }
  ,
	{
	   content : "김육불망비",
	   latlng:new kakao.maps.LatLng(36.061,126.91)
  
	 }
  ,
	{
	   content : "남중동오층석탑",
	   latlng:new kakao.maps.LatLng(35.944,126.951)
  
	 }
  ,
	{
	   content : "간재선생유적",
	   latlng:new kakao.maps.LatLng(36.028,127.021)
  
	 }
  ,
	{
	   content : "화암서원",
	   latlng:new kakao.maps.LatLng(36.019,127.031)
  
	 }
  ,
	{
	   content : "최여겸 순교지 ",
	   latlng:new kakao.maps.LatLng(35.386,126.504)
  
	 }
  ,
	{
	   content : "도산서당 ",
	   latlng:new kakao.maps.LatLng(35.439,126.66)
  
	 }
  ,
	{
	   content : "도동사 ",
	   latlng:new kakao.maps.LatLng(35.477,126.741)
  
	 }
  ,
	{
	   content : "남당회맹단 ",
	   latlng:new kakao.maps.LatLng(35.574,126.708)
  
	 }
  ,
	{
	   content : "화동서원 ",
	   latlng:new kakao.maps.LatLng(35.344,126.586)
  
	 }
  ,
	{
	   content : "석탄정 ",
	   latlng:new kakao.maps.LatLng(35.441,126.678)
  
	 }
  ,
	{
	   content : "도암서원 ",
	   latlng:new kakao.maps.LatLng(35.377,126.506)
  
	 }
  ,
	{
	   content : "양혜공 김빈길의 묘역 ",
	   latlng:new kakao.maps.LatLng(35.401,126.675)
  
	 }
  ,
	{
	   content : "남극관 ",
	   latlng:new kakao.maps.LatLng(35.417,126.558)
  
	 }
  ,
	{
	   content : "두암초당  ",
	   latlng:new kakao.maps.LatLng(35.484,126.606)
  
	 }
  ,
	{
	   content : "칠암리 고분  ",
	   latlng:new kakao.maps.LatLng(35.23,126.305)
  
	 }
  ,
	{
	   content : "남산리 옹기가마 ",
	   latlng:new kakao.maps.LatLng(35.402,126.668)
  
	 }
  ,
	{
	   content : "소태산 연화삼매지 ",
	   latlng:new kakao.maps.LatLng(35.304,126.332)
  
	 }
  ,
	{
	   content : "완제시조창-정재선 ",
	   latlng:new kakao.maps.LatLng(35.34,126.596)
  
	 }
  ,
	{
	   content : "한정",
	   latlng:new kakao.maps.LatLng(35.603,126.985)
  
	 }
  ,
	{
	   content : "필양사",
	   latlng:new kakao.maps.LatLng(35.603,126.985)
  
	 }
  ,
	{
	   content : "모충사",
	   latlng:new kakao.maps.LatLng(35.62,126.967)
  
	 }
  ,
	{
	   content : "보화리 고택",
	   latlng:new kakao.maps.LatLng(35.552,126.774)
  
	 }
  ,
	{
	   content : "용계서원",
	   latlng:new kakao.maps.LatLng(35.601,126.988)
  
	 }
  ,
	{
	   content : "사발통문 작성터",
	   latlng:new kakao.maps.LatLng(35.6,126.75)
  
	 }
  ,
	{
	   content : "동학혁명 모의탑",
	   latlng:new kakao.maps.LatLng(35.599,126.752)
  
	 }
  ,
	{
	   content : "만석보혁파선정비",
	   latlng:new kakao.maps.LatLng(35.671,126.85)
  
	 }
  ,
	{
	   content : "동의기념비",
	   latlng:new kakao.maps.LatLng(35.621,127.024)
  
	 }
  ,
	{
	   content : "일재 이항선생 유허비",
	   latlng:new kakao.maps.LatLng(35.629,126.923)
  
	 }
  ,
	{
	   content : "태산사",
	   latlng:new kakao.maps.LatLng(35.646,126.793)
  
	 }
  ,
	{
	   content : "전봉준 단비",
	   latlng:new kakao.maps.LatLng(35.663,126.822)
  
	 }
  ,
	{
	   content : "태인 김부곤가옥",
	   latlng:new kakao.maps.LatLng(35.65,126.946)
  
	 }
  ,
	{
	   content : "추모재",
	   latlng:new kakao.maps.LatLng(35.913,126.688)
  
	 }
  ,
	{
	   content : "삼인보검",
	   latlng:new kakao.maps.LatLng(35.99,126.711)
  
	 }
  ,
	{
	   content : "옥산원",
	   latlng:new kakao.maps.LatLng(35.93,126.707)
  
	 }
  ,
	{
	   content : "염의서원",
	   latlng:new kakao.maps.LatLng(35.94,126.713)
  
	 }
  ,
	{
	   content : "화봉재",
	   latlng:new kakao.maps.LatLng(35.915,126.688)
  
	 }
  ,
	{
	   content : "영묘제",
	   latlng:new kakao.maps.LatLng(35.915,126.753)
  
	 }
  ,
	{
	   content : "영모당",
	   latlng:new kakao.maps.LatLng(35.99,126.798)
  
	 }
  ,
	{
	   content : "어청도 봉수대",
	   latlng:new kakao.maps.LatLng(36.118,125.98)
  
	 }
  ,
	{
	   content : "두세준 효열비",
	   latlng:new kakao.maps.LatLng(35.906,126.759)
  
	 }
  ,
	{
	   content : "보천사 취계당 대사 부도",
	   latlng:new kakao.maps.LatLng(36.012,126.853)
  
	 }
  ,
	{
	   content : "일광사 소불좌상",
	   latlng:new kakao.maps.LatLng(36.012,126.787)
  
	 }
  ,
	{
	   content : "일광사 독성상",
	   latlng:new kakao.maps.LatLng(36.012,126.787)
  
	 }
  ,
	{
	   content : "어청도 치동묘",
	   latlng:new kakao.maps.LatLng(36.12,125.98)
  
	 }
  ,
	{
	   content : "이종훈 가옥",
	   latlng:new kakao.maps.LatLng(35.969,126.783)
  
	 }
  ,
	{
	   content : "불이농촌",
	   latlng:new kakao.maps.LatLng(35.955,126.653)
  
	 }
  ,
	{
	   content : "이극견 가계 석물군",
	   latlng:new kakao.maps.LatLng(35.997,126.853)
  
	 }
  ,
	{
	   content : "선유도 오룡묘",
	   latlng:new kakao.maps.LatLng(35.823,126.413)
  
	 }
  ,
	{
	   content : "민살풀이춤",
	   latlng:new kakao.maps.LatLng(35.967,126.736)
  
	 }
  ,
	{
	   content : "두사순 묘",
	   latlng:new kakao.maps.LatLng(35.905,126.682)
  
	 }
  ,
	{
	   content : "근수루",
	   latlng:new kakao.maps.LatLng(35.675,127.593)
  
	 }
  ,
	{
	   content : "성은정사",
	   latlng:new kakao.maps.LatLng(35.546,127.385)
  
	 }
  ,
	{
	   content : "송현수부조묘",
	   latlng:new kakao.maps.LatLng(35.575,127.436)
  
	 }
  ,
	{
	   content : "어필각",
	   latlng:new kakao.maps.LatLng(35.577,127.434)
  
	 }
  ,
	{
	   content : "용암사",
	   latlng:new kakao.maps.LatLng(35.736,127.555)
  
	 }
  ,
	{
	   content : "최윤덕부조묘",
	   latlng:new kakao.maps.LatLng(35.574,127.43)
  
	 }
  ,
	{
	   content : "양성지별묘",
	   latlng:new kakao.maps.LatLng(35.604,127.425)
  
	 }
  ,
	{
	   content : "열녀 남평문씨 정려각",
	   latlng:new kakao.maps.LatLng(35.585,127.387)
  
	 }
  ,
	{
	   content : "열녀 숙인진주소씨 정려각",
	   latlng:new kakao.maps.LatLng(35.564,127.392)
  
	 }
  ,
	{
	   content : "유계영당",
	   latlng:new kakao.maps.LatLng(35.559,127.401)
  
	 }
  ,
	{
	   content : "지금당",
	   latlng:new kakao.maps.LatLng(35.564,127.392)
  
	 }
  ,
	{
	   content : "효자박귀천정려각",
	   latlng:new kakao.maps.LatLng(35.7,127.519)
  
	 }
  ,
	{
	   content : "효자임옥산정려각",
	   latlng:new kakao.maps.LatLng(35.589,127.383)
  
	 }
  ,
	{
	   content : "만취정",
	   latlng:new kakao.maps.LatLng(35.542,127.517)
  
	 }
  ,
	{
	   content : "벽계정",
	   latlng:new kakao.maps.LatLng(35.72,127.612)
  
	 }
  ,
	{
	   content : "절부전주원씨정려각",
	   latlng:new kakao.maps.LatLng(35.598,127.419)
  
	 }
  ,
	{
	   content : "효자 육호진 정려각",
	   latlng:new kakao.maps.LatLng(35.583,127.419)
  
	 }
  ,
	{
	   content : "계남향약",
	   latlng:new kakao.maps.LatLng(35.704,127.578)
  
	 }
  ,
	{
	   content : "깃절놀이",
	   latlng:new kakao.maps.LatLng(35.647,127.521)
  
	 }
  ,
	{
	   content : "이숙번 묘",
	   latlng:new kakao.maps.LatLng(37.378,126.83)
  
	 }
  ,
	{
	   content : "김성만가옥",
	   latlng:new kakao.maps.LatLng(35.563,127.376)
  
	 }
  ,
	{
	   content : "대적골제철유적",
	   latlng:new kakao.maps.LatLng(35.747,127.651)
  
	 }
  ,
	{
	   content : "영취산봉수",
	   latlng:new kakao.maps.LatLng(35.653,127.622)
  
	 }
  ,
	{
	   content : "삼천서원 묘정비",
	   latlng:new kakao.maps.LatLng(35.943,127.489)
  
	 }
  ,
	{
	   content : "용담향교 공적비",
	   latlng:new kakao.maps.LatLng(35.842,127.576)
  
	 }
  ,
	{
	   content : "박리풍 석정려",
	   latlng:new kakao.maps.LatLng(35.669,127.399)
  
	 }
  ,
	{
	   content : "최학부 묘비",
	   latlng:new kakao.maps.LatLng(35.796,127.326)
  
	 }
  ,
	{
	   content : "삼계석문 암각서",
	   latlng:new kakao.maps.LatLng(35.738,127.355)
  
	 }
  ,
	{
	   content : "마이산 용암일대 암각서군",
	   latlng:new kakao.maps.LatLng(35.753,127.396)
  
	 }
  ,
	{
	   content : "고무정",
	   latlng:new kakao.maps.LatLng(35.795,127.575)
  
	 }
  ,
	{
	   content : "학남정",
	   latlng:new kakao.maps.LatLng(35.67,127.402)
  
	 }
  ,
	{
	   content : "쌍벽루",
	   latlng:new kakao.maps.LatLng(35.738,127.355)
  
	 }
  ,
	{
	   content : "쌍계정",
	   latlng:new kakao.maps.LatLng(35.721,127.385)
  
	 }
  ,
	{
	   content : "한들공소",
	   latlng:new kakao.maps.LatLng(35.769,127.366)
  
	 }
  ,
	{
	   content : "두원공소",
	   latlng:new kakao.maps.LatLng(35.663,127.402)
  
	 }
  ,
	{
	   content : "화산서원",
	   latlng:new kakao.maps.LatLng(35.903,127.56)
  
	 }
  ,
	{
	   content : "학륜당",
	   latlng:new kakao.maps.LatLng(35.904,127.558)
  
	 }
  ,
	{
	   content : "완월루",
	   latlng:new kakao.maps.LatLng(35.739,127.363)
  
	 }
  ,
	{
	   content : "도장각",
	   latlng:new kakao.maps.LatLng(35.715,127.375)
  
	 }
  ,
	{
	   content : "어서각",
	   latlng:new kakao.maps.LatLng(35.84,127.567)
  
	 }
  ,
	{
	   content : "고지집",
	   latlng:new kakao.maps.LatLng(35.717,127.452)
  
	 }
  ,
	{
	   content : "김대거 종법사 생가",
	   latlng:new kakao.maps.LatLng(35.74,127.314)
  
	 }
  ,
	{
	   content : "화양산 황단",
	   latlng:new kakao.maps.LatLng(35.959,127.369)
  
	 }
  ,
	{
	   content : "천황사 대웅전 석가여래삼존불상 및 대좌 수미단",
	   latlng:new kakao.maps.LatLng(35.905,127.432)
  
	 }
  ,
	{
	   content : "금척무",
	   latlng:new kakao.maps.LatLng(35.788,127.429)
  
	 }
  ,
	{
	   content : "중평농악",
	   latlng:new kakao.maps.LatLng(35.788,127.429)
  
	 }
  ,
	{
	   content : "웅치전적지",
	   latlng:new kakao.maps.LatLng(35.808,127.297)
  
	 }
  ,
	{
	   content : "우화산 일원 유적군",
	   latlng:new kakao.maps.LatLng(35.785,127.434)
  
	 }
  ,
	{
	   content : "담락당 하립·삼의당 김씨 부부유지",
	   latlng:new kakao.maps.LatLng(35.756,127.402)
  
	 }
  ,
	{
	   content : "성뫼산성",
	   latlng:new kakao.maps.LatLng(35.786,127.426)
  
	 }
  ,
	{
	   content : "가막리산성 ",
	   latlng:new kakao.maps.LatLng(35.812,127.519)
  
	 }
  ,
	{
	   content : "합미산성",
	   latlng:new kakao.maps.LatLng(35.742,127.355)
  
	 }
  ,
	{
	   content : "환미산성",
	   latlng:new kakao.maps.LatLng(35.879,127.382)
  
	 }
  ,
	{
	   content : "삼우당터",
	   latlng:new kakao.maps.LatLng(35.731,127.322)
  
	 }
  ,
	{
	   content : "솥내옹기요",
	   latlng:new kakao.maps.LatLng(35.721,127.402)
  
	 }
  ,
	{
	   content : "무주 금강벼룻길",
	   latlng:new kakao.maps.LatLng(35.979,127.57)
  
	 }
  ,
	{
	   content : "서창 소나무",
	   latlng:new kakao.maps.LatLng(35.948,127.672)
  
	 }
  ,
	{
	   content : "무주 사천리 지석묘 ",
	   latlng:new kakao.maps.LatLng(35.948,127.66)
  
	 }
  ,
	{
	   content : "무주 소천리 지석묘",
	   latlng:new kakao.maps.LatLng(36.009,127.79)
  
	 }
  ];


var positions2 = [    
	
    {
       content : "한옥마을사랑가득펜션", 
       latlng: new kakao.maps.LatLng(35.8124089,127.157993)
    }
	 ,    
    {
       content : "뜰안채팬션",
       latlng: new kakao.maps.LatLng(35.8171244,127.149349)
    }
	 ,    
    {
       content : "정가한옥 펜션",
       latlng: new kakao.maps.LatLng(35.8163331,127.155124)
    }
	 ,    
    {
       content : "천년의아침한옥펜션",
       latlng: new kakao.maps.LatLng(35.8156402,127.154304)
    }
	 ,    
    {
       content : "돼지꿈한옥펜션",
       latlng: new kakao.maps.LatLng(35.8168870,127.151805)
    }
	 ,    
    {
       content : "한옥마을사랑나무한옥펜션",
       latlng: new kakao.maps.LatLng(35.8114333,127.152736)
    }
	 ,    
    {
       content : "보리수자수이야기한옥펜션",
       latlng: new kakao.maps.LatLng(35.8115947,127.153389)
    }
	 ,    
    {
       content : "꽃무릇펜션",
       latlng: new kakao.maps.LatLng(35.8124258,127.158845)
    }
	 ,    
    {
       content : "오늘도묘한밤펜션",
       latlng: new kakao.maps.LatLng(35.8115825,127.155900)
    }
	 ,    
    {
       content : "소담소담펜션",
       latlng: new kakao.maps.LatLng(35.7944372,127.171752)
    }
	 ,    
    {
       content : "경기전별당채펜션",
       latlng: new kakao.maps.LatLng(35.8164172,127.152767)
    }
	 ,    
    {
       content : "감영루 한옥호텔",
       latlng: new kakao.maps.LatLng(35.8146862,127.145915)
    }
	 ,    
    {
       content : "한옥마을삼락헌한옥펜션",
       latlng: new kakao.maps.LatLng(35.8156512,127.152732)
    }
	 ,    
    {
       content : "별자리한옥스테이펜션",
       latlng: new kakao.maps.LatLng(35.8165362,127.151274)
    }
	 ,    
    {
       content : "한옥홍시펜션",
       latlng: new kakao.maps.LatLng(35.8152813,127.152997)
    }
	 ,    
    {
       content : "한옥마을마당예쁜집펜션",
       latlng: new kakao.maps.LatLng(35.812288,127.153899)
    }
	 ,    
    {
       content : "대명여관펜션",
       latlng: new kakao.maps.LatLng(35.8148315,127.144985)
    }
	 ,    
    {
       content : "한옥마을너울가지펜션",
       latlng: new kakao.maps.LatLng(35.8140555,127.145747)
    }
	 ,    
    {
       content : "한옥마을풍남주택펜션",
       latlng: new kakao.maps.LatLng(35.8166269,127.150809)
    }
	 ,    
    {
       content : "호텔 라임",
       latlng: new kakao.maps.LatLng(35.8301507,127.173998)
    }
	 ,    
    {
       content : "호텔 믹스",
       latlng: new kakao.maps.LatLng(35.8303304,127.174397)
    }
	 ,    
    {
       content : "칼튼힐호텔",
       latlng: new kakao.maps.LatLng(35.8347162,127.134496)
    }
	 ,    
    {
       content : "브라운도트",
       latlng: new kakao.maps.LatLng(35.8131601,127.124313)
    }
	 ,    
    {
       content : "호텔 스마일",
       latlng: new kakao.maps.LatLng(35.847566,127.11923)
    }
	 ,    
    {
       content : "카마호텔",
       latlng: new kakao.maps.LatLng(35.8128181,127.123760)
    }
	 ,    
    {
       content : "호텔 에이플러스",
       latlng: new kakao.maps.LatLng(35.8382403,127.170208)
    }
	 ,    
    {
       content : "자이 무인호텔",
       latlng: new kakao.maps.LatLng(35.8460226,127.121508)
    }
	 ,    
    {
       content : "넘버25",
       latlng: new kakao.maps.LatLng(35.8376902,127.170483)
    }
	 ,    
    {
       content : "YAJA",
       latlng: new kakao.maps.LatLng(35.8359539,127.131753)
    }
	 ,    
    {
       content : "베스트웨스턴플러스",
       latlng: new kakao.maps.LatLng(35.8224356,127.147024)
    }
	 ,    
    {
       content : "라마다",
       latlng: new kakao.maps.LatLng(35.8223389,127.145021)
    }
	 ,    
    {
       content : "라베호텔",
       latlng: new kakao.maps.LatLng(35.8131334,127.123970)
    }
	 ,    
    {
       content : "다온호텔",
       latlng: new kakao.maps.LatLng(35.8103386,127.155986)
    }
	 ,    
    {
       content : "한빛호텔",
       latlng: new kakao.maps.LatLng(35.8185412,127.155073)
    }
	 ,    
    {
       content : "라한호텔",
       latlng: new kakao.maps.LatLng(35.8171094,127.154118)
    }
	 ,    
    {
       content : "바라한호텔",
       latlng: new kakao.maps.LatLng(35.8359084,127.132184)
    }
	 ,    
    {
       content : "비지트호텔",
       latlng: new kakao.maps.LatLng(35.830117,127.1723820)
    }
	,
	{
		content : "다나호텔",
		latlng: new kakao.maps.LatLng(37.569215,126.990154),
	  }
	 ,
	  {
		content : "호텔더블루",
		latlng: new kakao.maps.LatLng(37.5395084,127.124828),
	  }
	 ,
	  {
		content : "Hwagok Theme",
		latlng: new kakao.maps.LatLng(37.5411136,126.841523),
	  }
	 ,
	  {
		content : "호텔팝3",
		latlng: new kakao.maps.LatLng(37.5710711,126.989882),
	  }
	 ,
	  {
		content : "영등포 호텔 YOLO",
		latlng: new kakao.maps.LatLng(37.5217652,126.904064),
	  }
	 ,
	  {
		content : "역삼 아마레",
		latlng: new kakao.maps.LatLng(37.4946157,127.040215),
	  }
	 ,
	  {
		content : "동부모텔",
		latlng: new kakao.maps.LatLng(37.583966,127.04419),
	  }
	 ,
	  {
		content : "힙호텔",
		latlng: new kakao.maps.LatLng(37.5568657,126.941298),
	  }
	 ,
	  {
		content : "호텔DM",
		latlng: new kakao.maps.LatLng(37.5732596,127.019404),
	  }
	 ,
	  {
		content : "부띠크 호텔 SB 여의도",
		latlng: new kakao.maps.LatLng(37.5180851,126.910347),
	  }
	 ,
	  {
		content : "라트리호텔",
		latlng: new kakao.maps.LatLng(37.5668098,127.006408),
	  }
	 ,
	  {
		content : "WO호텔 용산역",
		latlng: new kakao.maps.LatLng(37.5241594,126.962332),
	  }
	 ,
	  {
		content : "라비앙",
		latlng: new kakao.maps.LatLng(37.5110558,127.082174),
	  }
	 ,
	  {
		content : "54번가 호텔",
		latlng: new kakao.maps.LatLng(37.4806727,126.950562),
	  }
	 ,
	  {
		content : "호텔8아워즈",
		latlng: new kakao.maps.LatLng(37.5620684,126.977988),
	  }
	 ,
	  {
		content : "호텔 아하바",
		latlng: new kakao.maps.LatLng(37.5185956,126.906421),
	  }
	 ,
	  {
		content : "Junggok Pine Hill",
		latlng: new kakao.maps.LatLng(37.5707076,127.086404),
	  }
	 ,
	  {
		content : "타워모텔",
		latlng: new kakao.maps.LatLng(37.5378367,127.137475),
	  }
	 ,
	  {
		content : "선릉베드스테이션",
		latlng: new kakao.maps.LatLng(37.5063423,127.051926),
	  }
	 ,
	  {
		content : "뉴월드호텔",
		latlng: new kakao.maps.LatLng(37.5442728,126.973501),
	  }
	 ,
	  {
		content : "헬로인호텔",
		latlng: new kakao.maps.LatLng(37.5717828,126.989599),
	  }
	 ,
	  {
		content : "캘리포니아호텔",
		latlng: new kakao.maps.LatLng(37.5066309,127.051418),
	  }
	 ,
	  {
		content : "R호텔",
		latlng: new kakao.maps.LatLng(37.5939106,127.017088),
	  }
	 ,
	  {
		content : "Sincheon Plus",
		latlng: new kakao.maps.LatLng(37.5111984,127.084357),
	  }
	 ,
	  {
		content : "줌모텔",
		latlng: new kakao.maps.LatLng(37.5054586,127.096882),
	  }
	 ,
	  {
		content : "호텔케이월드",
		latlng: new kakao.maps.LatLng(37.5405477,127.063457),
	  }
	 ,
	  {
		content : "와우모텔",
		latlng: new kakao.maps.LatLng(37.5147206,127.107786),
	  }
	 ,
	  {
		content : "윈모텔",
		latlng: new kakao.maps.LatLng(37.537638,127.137848),
	  }
	 ,
	  {
		content : "샤인 호텔",
		latlng: new kakao.maps.LatLng(37.6246159,127.019179),
	  }
	 ,
	  {
		content : "Sinchon MAC",
		latlng: new kakao.maps.LatLng(37.5563692,126.939363),
	  }
	 ,
	  {
		content : "호텔컬리넌종로",
		latlng: new kakao.maps.LatLng(37.571981,126.989372),
	  }
	 ,
	  {
		content : "수 호텔",
		latlng: new kakao.maps.LatLng(37.588926,127.055062),
	  }
	 ,
	  {
		content : "와모텔 종로점",
		latlng: new kakao.maps.LatLng(37.5725943,127.004201),
	  }
	 ,
	  {
		content : "Eungam Raffles",
		latlng: new kakao.maps.LatLng(37.5895467,126.915525),
	  }
	 ,
	  {
		content : "보보스모텔",
		latlng: new kakao.maps.LatLng(37.5221128,126.910579),
	  }
	 ,
	  {
		content : "행복한눈물",
		latlng: new kakao.maps.LatLng(37.5695382,127.069582),
	  }
	 ,
	  {
		content : "까사",
		latlng: new kakao.maps.LatLng(37.5162307,127.111634),
	  }
	 ,
	  {
		content : "시티모텔",
		latlng: new kakao.maps.LatLng(37.5119922,126.933948),
	  }
	 ,
	  {
		content : "야자호텔 강서구청점",
		latlng: new kakao.maps.LatLng(37.5471385,126.846274),
	  }
	 ,
	  {
		content : "WO Motel Seoul Station",
		latlng: new kakao.maps.LatLng(37.5486506,126.969493),
	  }
	 ,
	  {
		content : "호텔스타",
		latlng: new kakao.maps.LatLng(37.5715216,126.990052),
	  }
	 
	 ];
 
	  

// 전북 축제 마커를 표시할 위치와 내용을 가지고 있는 객체 배열입니다 
var positions = [
	{
		content : "구로G페스티벌",
		latlng:new kakao.maps.LatLng(37.49551123,126.8882891)
		
	 }
	 ,
	 {
		content : "강동선사문화축제",
		latlng:new kakao.maps.LatLng(37.55985381,127.1308316)
		
	 }
	 ,
	 {
		content : "2022 소원 희망의 빛 거리",
		latlng:new kakao.maps.LatLng(37.552144,127.099944)
		
	 }
	 ,
	 {
		content : "2022 종로한복축제",
		latlng:new kakao.maps.LatLng(37.570671,126.9723944)
		
	 }
	 ,
	 {
		content : "단기4355년 어천절 대제전",
		latlng:new kakao.maps.LatLng(37.5758942,126.9658016)
		
	 }
	 ,
	 {
		content : "두모포 페스티벌",
		latlng:new kakao.maps.LatLng(37.54061648,127.0183982)
		
	 }
	 ,
	 {
		content : "서울장미축제",
		latlng:new kakao.maps.LatLng(37.6148099,127.073526)
		
	 }
	 ,
	 {
		content : "용마폭포 문화예술축제",
		latlng:new kakao.maps.LatLng(37.573335,127.089125)
		
	 }
	 ,
	 {
		content : "2022 동작복지나눔축제",
		latlng:new kakao.maps.LatLng(37.4964296,126.9551598)
		
	 }
	 ,
	 {
		content : "동작구 도서관 축제",
		latlng:new kakao.maps.LatLng(37.51272028,126.9340267)
		
	 }
	 ,
	 {
		content : "동작가족한마음축제",
		latlng:new kakao.maps.LatLng(37.49538106,126.9189142)
		
	 }
	 ,
	 {
		content : "제7회 도심 속 바다축제",
		latlng:new kakao.maps.LatLng(37.51482396,126.9379739)
		
	 }
	 ,
	 {
		content : "봉래산발복기원제",
		latlng:new kakao.maps.LatLng(35.08646003,129.0590783)
		
	 }
	 ,
	 {
		content : "봉황각 3.1독립운동 재현행사",
		latlng:new kakao.maps.LatLng(37.66019851,127.0060603)
		
	 }
	 ,
	 {
		content : "4.19혁명 국민문화제 2022",
		latlng:new kakao.maps.LatLng(37.63918553,127.0254518)
		
	 }
	 ,
	 {
		content : "종교연합바자회",
		latlng:new kakao.maps.LatLng(37.6350142,127.0129382)
		
	 }
	 ,
	 {
		content : "금천하모니축제 2022",
		latlng:new kakao.maps.LatLng(37.45706565,126.8960369)
		
	 }
	 ,
	 {
		content : "제14회 서울영등포국제초단편영화제",
		latlng:new kakao.maps.LatLng(37.52596316,126.8963671)
		
	 }
	 ,
	 {
		content : "2022 관악강감찬축제",
		latlng:new kakao.maps.LatLng(37.48239144,126.9290234)
		
	 }
	 ,
	 {
		content : "세계거리춤축제",
		latlng:new kakao.maps.LatLng(37.56201359,127.0641794)
		
	 }
	 ,
	 {
		content : "청룡문화제",
		latlng:new kakao.maps.LatLng(37.57325834,127.0385968)
		
	 }
	 ,
	 {
		content : "정월대보름 행사",
		latlng:new kakao.maps.LatLng(37.516601,126.863871)
		
	 }
	 ,
	 {
		content : "방아다리벚꽃축제",
		latlng:new kakao.maps.LatLng(37.51357078,126.8333718)
		
	 }
	 ,
	 {
		content : "2022해우리문화축제",
		latlng:new kakao.maps.LatLng(37.6550769,126.949503)
		
	 }
	 ,
	 {
		content : "서대문독립민주축제",
		latlng:new kakao.maps.LatLng(37.57460851,126.9556118)
		
	 }
	 ,
	 {
		content : "석촌호수벚꽃축제",
		latlng:new kakao.maps.LatLng(37.5066934,127.0989034)
		
	 }
	 ,
	 {
		content : "한성백제문화제",
		latlng:new kakao.maps.LatLng(37.52034114,127.1155184)
		
	 }
	 ,
	 {
		content : "2022 영양고추 H.O.T Festival",
		latlng:new kakao.maps.LatLng(37.56631769,126.9778284)
		
	 }
	 ,
	 {
		content : "정의공주와 함께 하는 도봉 한글잔치",
		latlng:new kakao.maps.LatLng(37.66667,127.03375)
		
	 }
	 ,
	 {
		content : "정월대보름 큰잔치",
		latlng:new kakao.maps.LatLng(37.6707774,127.0483768)
		
	 }
	 ,
	 {
		content : "도봉서원 춘·추향제",
		latlng:new kakao.maps.LatLng(37.6853826,127.0325089)
		
	 }
	 ,
	 {
		content : "도봉산 산사축제",
		latlng:new kakao.maps.LatLng(37.6864694,127.033968)
		
	 }
	 ,
	 {
		content : "도봉구민 건강축제",
		latlng:new kakao.maps.LatLng(37.6686287,127.0470496)
		
	 }
	 ,
	 {
		content : "도봉 과학축전",
		latlng:new kakao.maps.LatLng(37.6686287,127.0470496)
		
	 }
	 ,
	 {
		content : "도봉구 등축제",
		latlng:new kakao.maps.LatLng(37.6617028,127.0382005)
		
	 }
	 ,
	 {
		content : "정의공주와 함께 하는 도봉 한글잔치",
		latlng:new kakao.maps.LatLng(37.66667,127.03375)
		
	 }
	 ,
	 {
		content : "정월대보름 큰잔치",
		latlng:new kakao.maps.LatLng(37.6707774,127.0483768)
		
	 }
	 ,
	 {
		content : "도봉서원 춘·추향제",
		latlng:new kakao.maps.LatLng(37.6853826,127.0325089)
		
	 }
	 ,
	{
		content : "제55회 황토현동학농민혁명기념제",
		          
		latlng: new kakao.maps.LatLng(35.63370584,126.8301188)
	 },
	 
	{
		content : "제33회 정읍사문화제",
		latlng: new kakao.maps.LatLng(35.55073195,126.8615755)
	 },
	 
	{
		content : "제15회 정읍 구절초꽃축제",
		latlng: new kakao.maps.LatLng(35.55427272,127.0188952)
	 },
	 
	{
		content : "필봉마을굿축제",
		latlng: new kakao.maps.LatLng(35.53639442,127.1544452)
	 },
	 
	{
		content : "임실N치즈축제",
		latlng: new kakao.maps.LatLng(35.63310329,127.3012599)
	 },
	 
	{
		content : "산타축제",
		latlng: new kakao.maps.LatLng(35.63310329,127.3012599)
	 },
	 
	{
		content : "의견문화제",
		latlng: new kakao.maps.LatLng(35.54520247,127.3326779)
	 },
	 
	{
		content : "2022 군산시간여행축제",
		latlng: new kakao.maps.LatLng(35.98772627,126.711725)
	 },
	 
	{
		content : "지리산 바래봉 눈꽃축제",
		latlng: new kakao.maps.LatLng(35.43509151,127.5486169)
	 },
	 
	{
		content : "지리산 뱀사골 고로쇠 약수제",
		latlng: new kakao.maps.LatLng(35.3769935,127.581604)
	 },
	 
	{
		content : "제92회 춘향제",
		latlng: new kakao.maps.LatLng(35.40413057,127.380504)
	 },
	 
	{
		content : "지리산 바래봉 철쭉제",
		latlng: new kakao.maps.LatLng(35.43509151,127.5486169)
	 },
	 
	{
		content : "봉화산 철쭉제",
		latlng: new kakao.maps.LatLng(35.52409108,127.576659)
	 },
	 
	{
		content : "흥부제",
		latlng: new kakao.maps.LatLng(35.40248095,127.3861268)
	 },
	 
	{
		content : "지리산 뱀사골 단풍제",
		latlng: new kakao.maps.LatLng(35.37179767,127.5791353)
	 },
	 
	{
		content : "한여름밤의 남원 막걸리 축제",
		latlng: new kakao.maps.LatLng(35.40248095,127.3861268)
	 },
	 
	{
		content : "순창장류축제",
		latlng: new kakao.maps.LatLng(35.36859967,127.1099773)
	 },
	 
	{
		content : "전주국제영화제",
		latlng: new kakao.maps.LatLng(35.82088479,127.1437421)
	 },
	 
	{
		content : "전주한지문화축제",
		latlng: new kakao.maps.LatLng(35.8205657,127.1482307)
	 },
	 
	{
		content : "전주대사습놀이",
		latlng: new kakao.maps.LatLng(35.84915665,127.1196082)
	 },
	 
	{
		content : "전주문화재야행",
		latlng: new kakao.maps.LatLng(35.81961325,127.1517715)
	 },
	 
	{
		content : "전주세계소리축제",
		latlng: new kakao.maps.LatLng(35.85477195,127.1393284)
	 },
	 
	{
		content : "전주독서대전",
		latlng: new kakao.maps.LatLng(35.81224642,127.1590306)
	 },
	 
	{
		content : "제26회 무주반딧불축제",
		latlng: new kakao.maps.LatLng(36.00262216,127.6614905)
	 },
	 
	{
		content : "장수 한우랑 사과랑 축제",
		latlng: new kakao.maps.LatLng(35.6411154,127.5181094)
	 },
	 
	{
		content : "천만송이 국화축제",
		latlng: new kakao.maps.LatLng(35.94972951,126.9861274)
	 },
	 
	{
		content : "완주와일드&로컬푸드축제",
		latlng: new kakao.maps.LatLng(35.97398096,127.2315514)
	 },
	 
	{
		content : "오성한옥마을오픈가든축제",
		latlng: new kakao.maps.LatLng(35.97398096,127.2315514)
	 },
	 
	{
		content : "부안마실축제",
		latlng: new kakao.maps.LatLng(35.71882124,126.7286953)
	 },
	 
	{
		content : "부안 노을 아트페스티벌",
		latlng: new kakao.maps.LatLng(35.6750912,126.5271383)
	 },
	 
	{
		content : "고창모양성제",
		latlng: new kakao.maps.LatLng(35.43534518,126.7066502)
	 },
	 
	{
		content : "고창청보리밭축제",
		latlng: new kakao.maps.LatLng(35.37610584,126.543619)
	 },
	 
	{
		content : "동학농민혁명 무장기포기념제",
		latlng: new kakao.maps.LatLng(35.4037328,126.4955322)
	 },
	 
	{
		content : "고창복분자와수박축제",
		latlng: new kakao.maps.LatLng(35.49769748,126.5795174)
	 },
	 
	{
		content : "고창갯벌축제",
		latlng: new kakao.maps.LatLng(35.53007446,126.5150432)
	 },
	 
	{
		content : "무장읍성축제",
		latlng: new kakao.maps.LatLng(35.41841778,126.5573463)
	 },
	 
	{
		content : "고창해풍고추축제",
		latlng: new kakao.maps.LatLng(35.46113146,126.5378146)
	 }
 ];
var imageSrc = "images/festival.png";

var imageSrc2 = "images/hotel.png";

var imageSrc3 = "images/heirtage.png"

var imageSrc4 = "images/tour.png"


// 축제
for (var i = 0; i < positions.length; i++) {
	 

	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(40, 46);

	// 마커 이미지를 생성합니다    
	var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);


	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: positions[i].latlng, // 마커의 위치
		image: markerImage
	});

	// 마커에 표시할 인포윈도우를 생성합니다 
	var infowindow = new kakao.maps.InfoWindow({
		content: positions[i].content // 인포윈도우에 표시할 내용
	});
	kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
	kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
// 숙박
for (var i = 0; i < positions2.length; i++) {
	 
	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(40, 46);

	// 마커 이미지를 생성합니다    
	var markerImage = new kakao.maps.MarkerImage(imageSrc2, imageSize);


	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: positions2[i].latlng, // 마커의 위치
		image: markerImage
	});

	// 마커에 표시할 인포윈도우를 생성합니다 
	var infowindow = new kakao.maps.InfoWindow({
		content: positions2[i].content // 인포윈도우에 표시할 내용
	});
	kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
	kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}
// 문화재
for (var i = 0; i < positions3.length; i++) {
	 
	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(40, 46);

	// 마커 이미지를 생성합니다    
	var markerImage = new kakao.maps.MarkerImage(imageSrc3, imageSize);


	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: positions3[i].latlng, // 마커의 위치
		image: markerImage
	});

	// 마커에 표시할 인포윈도우를 생성합니다 
	var infowindow = new kakao.maps.InfoWindow({
		content: positions3[i].content // 인포윈도우에 표시할 내용
	});
	kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
	kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

//관광지
for (var i = 0; i < positions4.length; i++) {
	 

	// 마커 이미지의 이미지 크기 입니다
	var imageSize = new kakao.maps.Size(40, 40);

	// 마커 이미지를 생성합니다    
	var markerImage = new kakao.maps.MarkerImage(imageSrc4, imageSize);


	// 마커를 생성합니다
	var marker = new kakao.maps.Marker({
		map: map, // 마커를 표시할 지도
		position: positions4[i].latlng, // 마커의 위치
		image: markerImage
	});

	// 마커에 표시할 인포윈도우를 생성합니다 
	var infowindow = new kakao.maps.InfoWindow({
		content: positions4[i].content // 인포윈도우에 표시할 내용
	});
    kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

// 인포윈도우를 표시하는 클로저를 만드는 함수입니다 
function makeOverListener(map, marker, infowindow) {
	return function () {
		infowindow.open(map, marker);
	};
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다 
function makeOutListener(infowindow) {
	return function () {
		infowindow.close();
	};
}

if (navigator.geolocation) {
    
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function(position) {
        
        var lat = position.coords.latitude, // 위도
            lon = position.coords.longitude; // 경도
        
        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = '<div style="padding:5px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
            
      });
    
} else { // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
    
    var locPosition = new kakao.maps.LatLng(35.9473428, 126.681225),    
        message = 'geolocation을 사용할수 없어요..'
        
    displayMarker(locPosition, message);
}

// 지도에 마커와 인포윈도우를 표시하는 함수입니다
function displayMarker(locPosition, message) {

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({  
        map: map, 
        position: locPosition
    }); 
    
    var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content : iwContent,
        removable : iwRemoveable
    });
    
    // 인포윈도우를 마커위에 표시합니다 
    infowindow.open(map, marker);
    
    // 지도 중심좌표를 접속위치로 변경합니다
    map.setCenter(locPosition);      
}    