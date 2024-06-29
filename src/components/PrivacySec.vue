<script setup>
defineProps({
    privacyTitle: {
        type: String,
        required: true
    },
    privacyPara: {
        type: String,
        required: true
    }
})
</script>

<template>
    <h2 class="privacyTitle">{{privacyTitle}}</h2>
    <p class="privacyPara">{{privacyPara}}</p>
</template>

<style scoped>
.privacyTitle {
    font-size: 28px;
    margin-bottom: 5px;
    text-align: start;
}
.privacyPara {
    font-size: 16px;
    margin-bottom: 5px;
    text-align: start;
}
</style>