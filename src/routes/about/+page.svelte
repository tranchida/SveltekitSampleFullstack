<script lang="ts">
    import Userstable from "$lib/userstable.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<Userstable users={data.users} />
