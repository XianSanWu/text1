var josn = {
    items: [
        {
            PictureURL: "img/Backstage.jpg",
            Parsing: "DotrA後台",
            WorkURL: "https://dotrabackend.azurewebsites.net/LogIn/LogIn?ReturnUrl=%2f"
        },
        {
            PictureURL: "img/Frontdesk.jpg",
            Parsing: "DotrA前台",
            WorkURL: "https://dotrawebsite.azurewebsites.net/"
        },
        {
            PictureURL: "img/LandingPage.jpg",
            Parsing: "LandingPage",
            WorkURL: "https://lab1111.azurewebsites.net/LandingPage/LandingPage.html"
        },
        {
            PictureURL: "img/1A2B.jpg",
            Parsing: "1A2B",
            WorkURL: "https://lab1111.azurewebsites.net/js%E8%A3%9C%E5%85%85/GuessNumber/guess-number.html"
        },
        {
            PictureURL: "img/goolgemap.jpg",
            Parsing: "goolgemap",
            WorkURL: "https://lab1111.azurewebsites.net/MAPPPP/goolgemap.html"
        },
        {
            PictureURL: "img/poke.jpg",
            Parsing: "猜牌",
            WorkURL: "https://lab1111.azurewebsites.net/POKE/poke.html"
        },
        {
            PictureURL: "img/puzzle.jpg",
            Parsing: "亂數拼圖",
            WorkURL: "https://lab1111.azurewebsites.net/%E9%BB%91%E5%85%8B%E6%9D%BE/%E6%96%B0%E5%A2%9E%E8%B3%87%E6%96%99%E5%A4%BE/puzzle/%E4%BB%BF%E7%85%A7%E4%BB%96%E4%BA%BA.html"
        },
        {
            PictureURL: "img/Calendar.jpg",
            Parsing: "月曆",
            WorkURL: "https://lab1111.azurewebsites.net/%E9%BB%91%E5%85%8B%E6%9D%BE/%E6%9C%88%E6%9B%86%E7%B7%B4%E7%BF%92.html"
        },
        {
            PictureURL: "img/Blog.jpg",
            Parsing: "Blog",
            WorkURL: "https://lab1111.azurewebsites.net/Blog/blog.html"
        },
        {
            PictureURL: "img/OOXX.jpg",
            Parsing: "OOXX",
            WorkURL: "https://lab1111.azurewebsites.net/OOXX/OOXX.html"
        },
        {
            PictureURL: "img/SP.jpg",
            Parsing: "訪蝦皮",
            WorkURL: "https://lab1111.azurewebsites.net/SPSCSSlab/sp.html"
        },
        {
            PictureURL: "img/From.jpg",
            Parsing: "Bootstrap表單",
            WorkURL: "https://lab1111.azurewebsites.net/twolist/twolist.html"
        },
        {
            PictureURL: "img/BS.jpg",
            Parsing: "BuildSchool",
            WorkURL: "https://lab1111.azurewebsites.net/BS-bootstart/BS.html"
        },
        {
            PictureURL: "img/CIEEEE.jpg",
            Parsing: "信義房屋首頁",
            WorkURL: "https://lab1111.azurewebsites.net/CIEEEEEE/CIEEEE.html"
        },
        {
            PictureURL: "img/Googletranslation.jpg",
            Parsing: "Google翻譯",
            WorkURL: "https://lab1111.azurewebsites.net/AJAX/ajax.html"
        }
    ]

};

function Binding() {
    new Vue({
        el: '#main',
        data: josn
    });
}
$(document).ready(function () {
    Binding();
});