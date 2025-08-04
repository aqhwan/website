import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import en from '$lib/local/en.json';
import ar from '$lib/local/ar.json';

addMessages('en', en);
addMessages('ar', ar);

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator()
});
