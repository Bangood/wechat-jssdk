(function (wx) {

    var isWx = function () {
        return navigator.userAgent.match(/MicroMessenger/i) === 'micromessenger' ? true : false;
    }

    var wxshare = function () {
        if ('wx' in window) {

            // var info = JSON.parse(document.getElementById('info').innerHTML);
            setTimeout(() => {
                wx.config({
                    debug: false,
                    appId: window.pure.appid,
                    timestamp: window.pure.sign.timestamp,
                    nonceStr: window.pure.sign.nonceStr,
                    signature: window.pure.sign.signature,
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
                });

                // 分享内容自定义
                var shareInfo = {
                    title: '川航美食研究所',
                    desc: '描述',
                    link: 'http://rs2.mgapp.com.cn/091702/web-mobile/index.html',
                    imgUrl: 'https://avatars3.githubusercontent.com/u/5388012?v=3&u=0981ddbccf0ffbb794cddd65ea12c212a9d5e93b&s=140',
                };
            }, 5000);


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