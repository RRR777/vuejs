<template>
  <span :title="humanFriendlyData(timestamp)">
    {{ diffForHumans(timestamp) }}
  </span>
</template>

<script>
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import localazedData from 'dayjs/plugin/localizedFormat'
dayjs.extend(relativeTime)
dayjs.extend(localazedData)

export default {
  name: "AppDate",
  props: {
    timestamp: {
      required: true,
      type: Number
    }
  },
  methods: {
    diffForHumans () {
      return dayjs.unix(this.timestamp).fromNow()
    },
    humanFriendlyData () {
      return dayjs.unix(this.timestamp).format('llll')
    }
  }
}
</script>

<style scoped>

</style>