<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";
  import { Label, Input, Select, Button, P } from "flowbite-svelte";

  let { form }: { form: ActionData } = $props();

  let employedOptions: { value: string; name: string }[] = [
    { value: "Developer", name: "Développeur" },
    { value: "Manager", name: "Manager" },
  ];
</script>

<svelte:head>
  <title>Ajouter un utilisateur</title>
</svelte:head>

<div class="pt-[64px]">
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div
      class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
    >
      <P size="3xl">Ajouter un utilisateur</P>

      {#if form?.error}
        <div
          class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded"
        >
          {form.error}
        </div>
      {/if}

      <form method="post" use:enhance>
        <div class="mb-3">
          <Label for="firstName">Prénom</Label>
          <Input type="text" name="firstName" required />
        </div>
        <div class="mb-3">
          <Label for="lastName">Nom de famille</Label>
          <Input type="text" name="lastName" required />
        </div>
        <div class="mb-3">
          <Label for="email">Email</Label>
          <Input type="email" name="email" required />
        </div>
        <div class="mb-3">
          <Label for="password">Mot de passe</Label>
          <Input type="password" name="password" required />
        </div>
        <div class="mb-3">
          <Label for="employed">Poste</Label>
          <Select
            id="employed"
            name="employed"
              required
            items={employedOptions}
            placeholder="Sélectionnez un poste"
          />
        </div>

        <div class="mt-6 flex space-x-4">
          <Button type="submit" color="blue">Ajouter l'utilisateur</Button>

          <Button type="button" color="gray" href="/about">Annuler</Button>
        </div>
      </form>
    </div>
  </div>
</div>
