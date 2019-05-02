<script lang="ts">
import axios from '~/plugins/axios'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  async asyncData(context) {
    await axios.delete('/auth/sign_out')
    context.store.$router.push('/sign_in')
  }
})
export default class SignOut extends Vue {}
</script>
