<template>
    <div class="nav-bar">
        <a class="nav-bar-title">{{headerTitle}}</a>
        <div class="flex_glow"></div>
        <div class="nav">
            <nav class="nav-links">
                <div class="item">
                    <div class="nav-link">
                        <a class="item">Guide</a>
                    </div>
                </div>
                <div class="item">
                    <div class="nav-link">
                        <a class="item">API Reference</a>
                    </div>
                </div>
                <div class="item">
                    <div class="nav-link">
                        <a class="item">Release Notes</a>
                    </div>
                </div>
                <div class="item">
                    <div class="nav-link">
                        <a class="item">v4.x</a>
                    </div>
                </div>
                <div class="item">
                    <div class="nav-link">
                        <a class="item">Languages</a>
                    </div>
                </div>
                <div class="item">
                    <div class="nav-link">
                        <a class="item">GitHub</a>
                    </div>
                </div>                
            </nav>
        </div>
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