(function (wx) {

    var isWx = function () {
        return navigator.userAgent.match(/MicroMessenger/i) === 'micromessenger' ? true : false;
    }

    var wxshare = function () {
        if ('wx' in window) {

            var info = JSON.parse(document.getElementById('info').innerHTML);
            // setTimeout(() => {
            //     wx.config({
            //         debug: false,
            //         appId: 'wxb7289add5eeccd94',
            //         timestamp: info.timestamp,
            //         nonceStr: info.nonceStr,
            //         signature: info.signature,
            //         jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
            //     });

            //     // 分享内容自定义
               
            // }, 5000);
            wx.config({
                debug: false,
                appId: 'wxa3b2c9317c0b65d6',
                timestamp: info.timestamp,
                nonceStr: info.nonceStr,
                signature: info.signature,
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
            });
            var shareInfo = {
                title: '川航美食研究所',
                desc: '川航美食研究所，不一样的飞机餐，快来测下你的美食偏好吧',
                link: 'http://hi.sichuanair.com',
                imgUrl: 'http://hi.sichuanair.com/link.png',
            };
            wx.ready(function () {
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: shareInfo.title,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function () {

                    },
                    cancel: function () {

                    }
                });
                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function () {
                        // alert('11111');

                    },
                    cancel: function () {
                        // alert('2222222');

                    }
                });
                //分享到QQ
                wx.onMenuShareQQ({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function () {
                        // alert('qqqqqqqqq11111');

                    },
                    cancel: function () {
                        // alert('qqqqqqqqq12222');
                    }
                });
                //分享到腾讯微博
                wx.onMenuShareWeibo({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function () {

                    },
                    cancel: function () {

                    }
                });
                //分享到QQ空间
                wx.onMenuShareQZone({
                    title: shareInfo.title,
                    desc: shareInfo.desc,
                    link: shareInfo.link,
                    imgUrl: shareInfo.imgUrl,
                    success: function () {

                    },
                    cancel: function () {

                    }
                });
            });

        } else {
            console.error('请在微信客户端中打开')
        }
    }


    isWx() && wxshare();
    wxshare();
})(wx || jWeixin)