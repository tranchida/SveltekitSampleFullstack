<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";
    import type { PageData } from "./$types";
    import type { Users } from "@prisma/client";
    let { data }: { data: PageData } = $props();

    let managers = $derived(data.users.filter((user: Users) => user.employed === "Manager"));
    let developers = $derived(data.users.filter((user: Users) => user.employed === "Developer"));
</script>

<UsersTable title="Managers" users={managers} />
<UsersTable title="Developers" users={developers} />
