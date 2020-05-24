<template>

    <footer id="main-footer" class="container-bg">
        <div class="container-content"> 
            <span>
                <small>
                    ©2016-{{ new Date().getFullYear() }} | TODOS OS DIREITOS RESERVADOS.<br>DESENVOLVIDO POR <a href="https://www.linkedin.com/in/caio-henrique-388183170/" target="_blank">CAIO HENRIQUE</a>
                </small>
            </span>
        </div>
    </footer>

</template>

<script>
export default {
    name: "main-footer",
}
</script>

<style scoped lang="scss">

    @import "../assets/styles/variables.scss";

    .container-bg {
        height: $footer-size;     
        background-color: #18100ddc;
        margin: 0;
    }

    .container-content {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    
</style>
