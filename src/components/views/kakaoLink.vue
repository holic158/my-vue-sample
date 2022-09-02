<template>
<head>
</head>    
    <div>
        <button @click="openKakaoLink">카카오링크</button>
    </div>
</template>
<script>
export default ({
    name: 'kakaoLink',
    data () {
    return {
    }
    },
    created () {
        document.getElementsByClassName('sidebar')[0].style="display:none";
    },
    methods: {
        openKakaoLink() {
            // eslint-disable-next-line
            Kakao.init("b2912053f2950925f9571f025ed1e10f");
            // eslint-disable-next-line
            Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '딸기 치즈 케익',
                description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
                imageUrl:
                'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                link: {
                mobileWebUrl: 'https://developers.kakao.com',
                webUrl: 'https://developers.kakao.com',
                },
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845,
            },
            buttons: [
                {
                title: '유투브 보기',
                link: {
                    mobileWebUrl: 'https://www.youtube.com/watch?v=muHOPqE0HO0',
                    webUrl: 'https://www.youtube.com/watch?v=muHOPqE0HO0',
                },
                },
                {
                title: '앱으로 보기',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
                },
            ],
            });
        }
    }
})
</script>
