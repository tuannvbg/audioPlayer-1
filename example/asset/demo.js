(function() {
    var audioIns = new AudioPlayer({
        data: [{
            title: '曾经的你',
            author: '许巍',
            src: 'https://zhangchen2397.github.io/audioPlayer/example/asset/music/once.mp3',
            cover: 'https://zhangchen2397.github.io/audioPlayer/example/asset/image/cover_once.jpeg?ver=1'
        }, {
            title: 'You\'re Beautiful',
            author: 'James Blunt',
            src: 'https://zhangchen2397.github.io/audioPlayer/example/asset/music/you_are_beautiful.mp4',
            cover: 'https://zhangchen2397.github.io/audioPlayer/example/asset/image/cover_yab.jpg?ver=1'
        }, {
            title: 'I\'m Yours',
            author: 'Jason Mraz',
            src: 'https://zhangchen2397.github.io/audioPlayer/example/asset/music/i_am_yours.mp4',
            cover: 'https://zhangchen2397.github.io/audioPlayer/example/asset/image/cover_iay.jpg?ver=1'
        }, {
            title: 'Mỹ Nhân',
            author: 'Đinh Đại Vũ',
            src: 'https://archive.org/download/dinh.-dai.-vu-my.-nhan/Dinh.Dai.Vu-My.Nhan.mp3',
            cover: 'https://avatar-nct.nixcdn.com/singer/avatar/2018/03/27/3/f/5/f/1522142059144.jpg'
        }
              ]
    });

    $.bind(audioIns, 'play', function(event) {
        //console.log(event);
    });
})();
