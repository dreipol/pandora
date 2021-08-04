<template>
  <h1
    class="foo-bar-incredible-long-classname"
    data-longattribute-id="extremely-long-string"
  >
    {title}
  </h1>
</template>

<script>
  interface Data {
    title: string
  }

  export default {
    data(): Data {
      return {
        title: 'Hello World',
      }
    },
  }
</script>
