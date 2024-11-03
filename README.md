### Directus Sync

**To backup the data created from the Directus instance the [directus-sync](https://github.com/tractr/directus-sync) CLI is used.**

To get started add the following enviroment variables:

```
DIRECTUS_URL=https://example.com
DIRECTUS_EMAIL=hello@example.com
DIRECTUS_PASSWORD=example-password-123
```

Then to pull the data from the Directus instance run the following command:

```
npx directus-sync pull
```
