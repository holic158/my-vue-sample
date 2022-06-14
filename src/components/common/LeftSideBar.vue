<template>
<aside class="sidebar">
    <nav class="nav-links nav">
    </nav>
    <ul class="sidebar-links">
        <li class="sidebar-link">
            <a class="sidebar-link-item" href="/introduction.html">Introduction</a>
        </li>
        <li class="sidebar-link">
            <a class="sidebar-link-item" href="/installation.html">Installation</a>
        </li>
        <li class="sidebar-link">
            <p class="sidebar-link-item">Essentials</p>
            <ul class="sidebar-links">
                <li class="sidebar-link">
                    <a class="sidebar-link-item active" href="/guide/">Getting Started</a>
                    <ul class="sidebar-links">
                        <li class="sidebar-link">
                            <a class="sidebar-link-item" href="#html">HTML</a>
                                <ul class="sidebar-links">
                                    <li class="sidebar-link"><a class="sidebar-link-item" href="#router-link">router-link</a><!---->
                                    </li>
                                    <li class="sidebar-link"><a class="sidebar-link-item" href="#router-view">router-view</a><!---->
                                    </li>
                                </ul>
                        </li>
                        <li class="sidebar-link">
                            <a class="sidebar-link-item" href="#javascript">JavaScript</a><!---->
                        </li>
                    </ul>
                </li>
                <li class="sidebar-link">
                    <a class="sidebar-link-item" href="/guide/essentials/dynamic-matching.html">Dynamic Route Matching</a>
                </li>
                <li class="sidebar-link">
                    <a class="sidebar-link-item" href="/guide/essentials/route-matching-syntax.html">Routes' Matching Syntax</a>
                </li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/nested-routes.html">Nested Routes</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/navigation.html">Programmatic Navigation</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/named-routes.html">Named Routes</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/named-views.html">Named Views</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/redirect-and-alias.html">Redirect and Alias</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/passing-props.html">Passing Props to Route Components</a><!----></li>
                <li class="sidebar-link"><a class="sidebar-link-item" href="/guide/essentials/history-mode.html">Different History modes</a><!----></li>
            </ul>
        </li>        
    </ul>
</aside>
</template>

<script>
export default {
    name: 'leftSideBar',
    props: {
    },
    data() {
        return {
        };
    },
    created() {
    },
}
</script>>