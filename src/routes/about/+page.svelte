<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";

    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<UsersTable title="All users" users={data.users} />
