# My Wiertz app
De My Wiertz app is een app voor werkgevers en werknemers waarbij tijdelijke banen aangeboden worden.

## Doel
Het doel van deze app was om te kijken wat de mogelijkheden waren omtrend component ontwikkeling binnen deze monorepo, aangezien dit een belangrijke vraag was vanuit de developers van Freshheads. Mijn doel was dus om een component te ontwikkelen waarbij je maar eenmalig de ontwikkeling ervan moet doen zodat het meteen voor zowel web als app gebruikt kon worden. Daarbij ook kijken wat voor beste ontwikkeling mogelijkheden je kunt toepassen bij het componet.

## Folderstructuur 
De folder structuur van deze Monorepo is redelijk groot, door deze reden zal heb ik alleen de belangrijkste delen eruit gehaald. Net zoals bij mijn voorgaande repo's wordt de basis over de folder structuur al een beetje uitgeld zoals hoe de expo map ingedeeld is, wat expo routing doet, enzovoort.

































































# Tamagui + Solito + Next + Expo Monorepo

```sh
npm create tamagui
```

## 🔦 About

This monorepo is a starter for an Expo + Next.js + Tamagui + Solito app.

Many thanks to [@FernandoTheRojo](https://twitter.com/fernandotherojo) for the Solito starter monorepo which this was forked from. Check out his [talk about using expo + next together at Next.js Conf 2021](https://www.youtube.com/watch?v=0lnbdRweJtA).

## 📦 Included packages

- [Tamagui](https://tamagui.dev) 🪄
- [solito](https://solito.dev) for cross-platform navigation
- Expo SDK
- Next.js
- Expo Router

## 🗂 Folder layout

The main apps are:

- `expo` (native)
- `next` (web)

- `packages` shared packages across apps
  - `ui` includes your custom UI kit that will be optimized by Tamagui
  - `app` you'll be importing most files from `app/`
    - `features` (don't use a `screens` folder. organize by feature.)
    - `provider` (all the providers that wrap the app, and some no-ops for Web.)

You can add other folders inside of `packages/` if you know what you're doing and have a good reason to.

## 🏁 Start the app

- Install dependencies: `yarn`

- Next.js local dev: `yarn web`

To run with optimizer on in dev mode (just for testing, it's faster to leave it off): `yarn web:extract`. To build for production `yarn web:prod`.

To see debug output to verify the compiler, add `// debug` as a comment to the top of any file.

- Expo local dev: `yarn native`

## UI Kit

Note we're following the [design systems guide](https://tamagui.dev/docs/guides/design-systems) and creating our own package for components.

See `packages/ui` named `@my/ui` for how this works.

## 🆕 Add new dependencies

### Pure JS dependencies

If you're installing a JavaScript-only dependency that will be used across platforms, install it in `packages/app`:

```sh
cd packages/app
yarn add date-fns
cd ../..
yarn
```

### Native dependencies

If you're installing a library with any native code, you must install it in `expo`:

```sh
cd apps/expo
yarn add react-native-reanimated
cd ..
yarn
```

## Update new dependencies

### Pure JS dependencies

```sh
yarn upgrade-interactive
```

You can also install the native library inside of `packages/app` if you want to get autoimport for that package inside of the `app` folder. However, you need to be careful and install the _exact_ same version in both packages. If the versions mismatch at all, you'll potentially get terrible bugs. This is a classic monorepo issue. I use `lerna-update-wizard` to help with this (you don't need to use Lerna to use that lib).

You may potentially want to have the native module transpiled for the next app. If you get error messages with `Cannot use import statement outside a module`, you may need to use `transpilePackages` in your `next.config.js` and add the module to the array there.

## Deploying to Vercel

- Root: `apps/next`
- Install command to be `yarn set version stable && yarn install`
- Build command: leave default setting
- Output dir: leave default setting

### Troubleshooting Vercel Deployment
If after pushing to GitHub you're seeing that your automatic vercel deployment failed because of an error that looks like this:
```
➤ YN0028: │ The lockfile would have been modified by this install, which is explicitly forbidden.
➤ YN0000: └ Completed
➤ YN0000: Failed with errors in 0s 700ms
Error: Command "yarn set version stable && yarn install" exited with 1
```
Run `yarn vercel:install` locally and then commit and push the changes to GitHub.
