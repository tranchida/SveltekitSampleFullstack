<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";

    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<UsersTable title="All users" users={data.users} />
