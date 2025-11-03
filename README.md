# 🚀 Strapi 5 + plugin rest cache + custom field

This repo cretated to demonstrate a bug when use plugin rest cache with any strapi custom field in schema.

## What's inside

- new blank strapi 5 project
- plugin rest cache with redis (https://strapi-community.github.io/plugin-rest-cache/guide/installation.html)
- @strapi/plugin-color-picker plugin to show bug with custom field in schema

I created simple collection type named `Category`.

`Category` has 2 fields:

    - title, string
    - color, custom field to select color (based on @strapi/plugin-color-picker)

With this data structure strapi fails after `yarn dev` with error: `Error: Could not find Custom Field: plugin::color-picker.color`
