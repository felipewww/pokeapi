<template>
  <div class="home h-100">
    <Finder></Finder>

    <SearchResult></SearchResult>

    <SearchHistory></SearchHistory>
  </div>
</template>

<script>
import SearchResult from '../components/Home/SearchResult'
import SearchHistory from '../components/Home/SearchHistory'
import Finder from '../components/Home/Finder'

export default {
  name: 'home',
  components: { Finder, SearchHistory, SearchResult }
}
</script>

<style lang="scss" scoped>

</style>
