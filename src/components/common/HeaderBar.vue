<template>
    <div class="header">
        <h1>{{headerTitle}}</h1>
    </div>
</template>

<script>
export default {
    name: 'headerBar',
    props: {
        headerTitle: {
            type: String,
            default: '정보 조회 중'
        }
    },
    data() {
        return {
            // headerTitle: '헤더입니다',
        };
    },
    created() {
        console.log('HeaderBar headerTitle', this.headerTitle);
    },
}
</script>>