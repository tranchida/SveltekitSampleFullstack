<script lang="ts">
    import type { User } from "@prisma/client";
    import { enhance } from "$app/forms";
    let { title = "User Table", users = [] }: { title: string, users: User[] } = $props();

</script>

<div>
    <h1 class="text-3xl font-bold text-black dark:text-white text-center">
        {title}
    </h1>
    <div class="w-1/2 mx-auto">
        <table class="w-full table-auto">
            <thead
                class="border-b border-slate-200 bg-slate-100 text-sm font-medium text-slate-600 dark:bg-slate-100"
            >
                <tr>
                    <th class="p-3 text-start font-medium"> ID </th>
                    <th class="p-3 text-start font-medium"> Last Name </th>
                    <th class="p-3 text-start font-medium"> First Name </th>
                    <th class="p-3 text-start font-medium"> Employed </th>
                    <th class="p-3 text-start font-medium"> Date </th>
                    <th class="p-3 text-start font-medium"> Active </th>
                    <th class="p-3 text-start font-medium"> Actions </th>
                </tr>
            </thead>
            <tbody class=" text-slate-800 dark:text-white">
                {#each users as user}
                    <tr class="border-b border-slate-200 last:border-0">
                        <td class="p-3">{user.id}</td>
                        <td class="p-3">{user.lastName}</td>
                        <td class="p-3">{user.firstName}</td>
                        <td class="p-3">{user.employed}</td>
                        <td class="p-3">{user.createdAt.toLocaleDateString()}</td>
                        <td class="p-3">
                            <span class="transition-colors duration-1000 {user.active ? 'text-green-500' : 'text-red-500'}">
                                {user.active ? "Yes" : "No"}
                            </span>
                        </td>
                        <td class="p-3">
                            <form method="POST" action="?/switchState" use:enhance>
                                <input type="hidden" name="id" value={user.id} />
                                <button type="submit"
                                class="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer transition-colors duration-300"
                            >
                                &#128259; active
                            </button>
                            </form>
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
