<script lang="ts">
    import type { User } from "@prisma/client";
    import { enhance } from "$app/forms";
    import {
        Table,
        TableBody,
        TableBodyCell,
        TableBodyRow,
        TableHead,
        TableHeadCell,
    } from "flowbite-svelte";

    let { title = "User Table", users = [] }: { title: string; users: User[] } =
        $props();
</script>

<div>
    <h1 class="text-3xl font-bold text-black dark:text-white text-center">
        {title}
    </h1>
    <div class="mx-50">
        <Table striped={true} hoverable={true}>
            <TableHead>
        <TableHeadCell class="p-3 text-start font-medium">
                    Last Name
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    First Name
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    Email
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    Employed
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    Date
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    Active
                </TableHeadCell>
                <TableHeadCell class="p-3 text-start font-medium">
                    Actions
                </TableHeadCell>
            </TableHead>
            <TableBody>
                {#each users as user}
                    <TableBodyRow>
                        <TableBodyCell>{user.lastName}</TableBodyCell>
                        <TableBodyCell>{user.firstName}</TableBodyCell>
                        <TableBodyCell>{user.email}</TableBodyCell>
                        <TableBodyCell>{user.employed}</TableBodyCell>
                        <TableBodyCell>{user.createdAt.toLocaleDateString()}</TableBodyCell>
                        <TableBodyCell>
                            <span
                                class="transition-colors duration-1000 {user.active
                                    ? 'text-green-500'
                                    : 'text-red-500'}"
                            >
                                {user.active ? "Yes" : "No"}
                            </span>
                        </TableBodyCell>
                        <TableBodyCell>
                            <form
                                method="POST"
                                action="?/switchState"
                                use:enhance>
                                <input
                                    type="hidden"
                                    name="id"
                                    value={user.id}
                                />
                                <button
                                    type="submit">
                                    &#128259; active
                                </button>
                            </form>
                        </TableBodyCell>
                    </TableBodyRow>
                {/each}
            </TableBody>
        </Table>
    </div>
</div>
