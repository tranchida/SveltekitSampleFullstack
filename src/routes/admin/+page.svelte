<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";
    import type { PageData } from "./$types";
    import type { Users } from "@prisma/client";
    export let data: PageData;

    $: managers = data.users.filter((user: Users) => user.employed === "Manager");
    $: developers = data.users.filter((user: Users) => user.employed === "Developer");
</script>

<UsersTable title="Managers" users={managers} />
<UsersTable title="Developers" users={developers} />
