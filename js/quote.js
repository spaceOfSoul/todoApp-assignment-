const quotes = [
    {
        quote :"탐욕은 일체를 얻고자 욕심내어서 도리어 모든 것을 잃어버린다.",
        author :"몬테뉴"
    },
    {
        quote :"질병은 입을 좇아 들어가고, 화근은 입을 좇아 나온다.",
        author :"태평어람"
    },
    {
        quote :"겉으로 보기에 무척 연약해 보이는 모든 것이 바로 힘이다.",
        author :"파스칼"
    },{
        quote :"오늘 할 수 있는 일에 전력을 다하라. 그러면 내일에는 한 걸음 더 진보한다.",
        author :"아이작 뉴턴"
    },{
        quote :"끝을 맺기를 처음과 같이 하면 실패가 없다.",
        author :"노자"
    },{
        quote :"작은 도끼라도 찍고 찍으면 큰 참나무도 넘어진다.",
        author :"셰익스피어"
    },{
        quote :"한때의 분한 감정일랑 참으라. 그러면 백일의 근심을 모면할 것이다.",
        author :"경함록"
    },{
        quote :"가르치는 것은 두 번 배우는 것이다.",
        author :"주배르"
    },{
        quote :"요구받기 전에 먼저 충고하지 말라",
        author :"에라스무스"
    },{
        quote :"남의 앞에 서는 것을 두려워 하지 말라",
        author :"엘마 윌러"
    },
];

const quote = document.querySelector("#quote span:first-child");
const quthorSpan = document.querySelector("#quote span:last-child");

const TodayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = TodayQuote.quote;
quthorSpan.innerText = TodayQuote.author;