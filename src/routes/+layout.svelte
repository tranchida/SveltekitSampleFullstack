<script lang="ts">
	import { page } from "$app/state";
	import "../app.css";
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavHamburger,
		NavUl,
		NavLi,
		Footer,
		FooterCopyright,
		FooterLinkGroup,
		FooterLink,
	} from "flowbite-svelte";

	let { children } = $props();
	let activeUrl = $derived(page.url.pathname);
</script>

<svelte:head>
  <title>Admin</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
	<div
		class="fixed start-0 top-0 z-20 w-full bg-white px-2 py-2.5 sm:px-4 dark:bg-gray-800"
	>
		<Navbar>
			<NavBrand href="/">
				<img src="/svelte.svg" alt="logo" class="w-10 h-10" />
				<span class="text-white text-2xl font-bold">Svelte Sample</span>
			</NavBrand>
			<NavHamburger />
			<NavUl {activeUrl}>
				<NavLi href="/">Home</NavLi>
				<NavLi href="/admin">Admin</NavLi>
				<NavLi href="/about">About</NavLi>
				<DarkMode />
			</NavUl>
		</Navbar>
	</div>
	<main class="flex-1 pt-[64px] pb-[64px] px-8">
		{@render children()}
	</main>
	<div class="fixed end-0 bottom-0 w-full bg-gray-100 dark:bg-gray-900">
		<Footer>
			<FooterCopyright
				by="SveltekitSampleFullstack"
				year={new Date().getFullYear()}
			/>
			<FooterLinkGroup
				class="mt-3 flex flex-wrap items-center text-sm text-gray-500 sm:mt-0 dark:text-gray-400"
			>
				<FooterLink href="https://x.com/gtranchida" target="_blank">
					<svg
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 300 271"
					>
						<path
							fill-rule="evenodd"
							d="m236 0h46l-101 115 118 156h-92.6l-72.5-94.8-83 94.8h-46l107-123-113-148h94.9l65.5 86.6zm-16.1 244h25.5l-165-218h-27.4z"
							clip-rule="evenodd"
						/>
					</svg>
				</FooterLink>
				<FooterLink
					href="https://github.com/tranchida/nuxttest"
					target="_blank"
				>
					<svg
						class="h-6 w-6"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							fill-rule="evenodd"
							d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
							clip-rule="evenodd"
						/>
					</svg>
				</FooterLink>
			</FooterLinkGroup>
		</Footer>
	</div>
</div>
