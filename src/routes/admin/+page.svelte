<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";
    import type { User } from "@prisma/client";
    import type { PageData } from "./$types";
    let { data }: { data: PageData } = $props();

    let managers = $derived(data.users.filter((user: User) => user.employed === "Manager"));
    let developers = $derived(data.users.filter((user: User) => user.employed === "Developer"));
</script>

<div class="pt-[64px]">
<UsersTable title="Managers" users={managers} />
<UsersTable title="Developers" users={developers} />
</div>
