<script lang="ts">
	import { userRune } from '$lib/runes/user-rune.svelte';
</script>

<h1>Le Büq Klöb</h1>

{#if userRune.user.isActive}
	<p>You are logged in as {userRune.user.name}</p>
{:else}
	<h2>Login</h2>
	<form>
		<input type="text" name="email" placeholder="Email" />
		<input type="password" name="password" placeholder="Password" />
		<button type="submit">Login</button>
	</form>
{/if}
