<script>
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'

  let lang = $page.url.searchParams.get('lang') || 'en'
</script>

<select
  bind:value={lang}
  on:change={e => {
    $page.url.searchParams.set('lang', e.currentTarget.value)
    goto(`?${$page.url.searchParams}`)
  }}
>
  <option value="en">🇦🇺 English</option>
  <option value="it">🇮🇹 Italiano</option>
</select>

<slot />
