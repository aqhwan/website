<script>
  import A from '$lib/components/A.svelte'

  const NPM_PACKAGES_BASE_URL = 'https://www.npmjs.com/package/'
  const getPackageJson = () => import('../../../package.json')
</script>

<h2>Licenses</h2>
<p>You can find the packages licenses on their home page — click a package name to open it.</p>

{#await getPackageJson()}
  <p>Loading...</p>
{:then projectFile}
  <h3>Dependencies:</h3>
    {#each Object.keys(projectFile.default.dependencies) as dep}
      <li>
        <A href={NPM_PACKAGES_BASE_URL + dep}>{dep}</A>
      </li>
    {/each}
  <h3>Dev Dependencies:</h3>
    {#each Object.keys(projectFile.default.devDependencies) as dep}
      <li>
        <A href={NPM_PACKAGES_BASE_URL + dep}>{dep}</A>
      </li>
    {/each}
{:catch error}
  <p>Failed to load: {error.message}</p>
{/await}
