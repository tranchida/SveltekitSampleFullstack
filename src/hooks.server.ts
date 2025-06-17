import 'reflect-metadata';
import TypeOrm from '$lib/server/database';
import type { Handle } from '@sveltejs/kit';

// Initialiser la connexion à la base de données
await TypeOrm.getDb();

export const handle: Handle = async ({ event, resolve }) => {
    return await resolve(event);
};