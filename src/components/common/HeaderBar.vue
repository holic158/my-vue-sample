<template>
    <div class="nav-bar">
        <a class="nav-bar-title">{{headerTitle}}</a>
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
    },
}
</script>>