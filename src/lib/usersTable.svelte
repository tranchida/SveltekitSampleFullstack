<script lang="ts">
    import { enhance } from "$app/forms";
    import type { Users } from "@prisma/client";

    export let title = "User Table";
    export let users: Users[] = [];
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
                        <td class="p-3">{user.lastname}</td>
                        <td class="p-3">{user.firstname}</td>
                        <td class="p-3">{user.employed}</td>
                        <td class="p-3">{user.date}</td>
                        <td class="p-3">{user.active ? "Yes" : "No"}</td>
                        <td class="p-3">
                            <form method="POST" action="?/switchState" use:enhance>
                                <input type="hidden" name="id" value={user.id} />
                                <button type="submit"
                                class="bg-black text-white px-4 py-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer"
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
