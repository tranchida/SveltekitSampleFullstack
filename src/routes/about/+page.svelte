<script lang="ts">
    import UsersTable from "$lib/usersTable.svelte";

    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
</script>

<div class="pt-[64px]">
    <a
        href="/add-user"
        class="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 inline-block font-medium"
    >
        ➕ Ajouter un utilisateur
    </a>

    <UsersTable title="Tous les utilisateurs" users={data.users} />
</div>
