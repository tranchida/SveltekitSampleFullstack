<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionData } from "./$types";

  let { form }: { form: ActionData } = $props();
</script>

<svelte:head>
  <title>Ajouter un utilisateur</title>
</svelte:head>

<div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
  <div class="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
    <h1 class="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
      Ajouter un utilisateur
    </h1>

    {#if form?.error}
      <div class="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
        {form.error}
      </div>
    {/if}

    <form method="POST" use:enhance>
      <div class="space-y-4">
        <div>
          <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Prénom
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form?.firstName || ""}
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Nom de famille
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={form?.lastName || ""}
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={form?.email || ""}
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label for="employed" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Employé
          </label>
          <input
            type="text"
            id="employed"
            name="employed"
            value={form?.employed || ""}
            required
            placeholder="Ex: Développeur, Designer, Manager..."
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      <div class="mt-6 flex space-x-4">
        <button
          type="submit"
          class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Ajouter l'utilisateur
        </button>
        
        <a
          href="/about"
          class="flex-1 bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 text-center"
        >
          Annuler
        </a>
      </div>
    </form>
  </div>
</div> 