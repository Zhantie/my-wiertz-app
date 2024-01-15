# My Wiertz app
De My Wiertz app is een app voor werkgevers en werknemers waarbij tijdelijke banen aangeboden worden.

## Doel
Het doel van deze app was om te kijken wat de mogelijkheden waren omtrend component ontwikkeling binnen deze monorepo, aangezien dit een belangrijke vraag was vanuit de developers van Freshheads. Mijn doel was dus om een component te ontwikkelen waarbij je maar eenmalig de ontwikkeling ervan moet doen zodat het meteen voor zowel web als app gebruikt kon worden. Daarbij ook kijken wat voor beste ontwikkeling mogelijkheden je kunt toepassen bij het componet.

## Folderstructuur 
- .vscode
- .yarn
- apps
  - expo
  - next
- packages
  - app
    - components
      - JobCard
        - MyCard.tsx
        - MyCardBottom.tsx
        - MyLikeButtom.tsx
    - features
    - provider
- .gitignore
- index.ts
- package.json
- tamagui.config.ts
- ui
  - .gitignore
  - .prettierrc
  - .watchmanconfig
  - .yarnrc.yml
- README.md
- package.json
- tsconfig.base.json

Zoals te zien is in de folderstructuur van deze Monorepo, zijn er twee configuratiebestanden beschikbaar vanuit Tamagui, namelijk een `- Expo` en een `- Next` bestand. Dit betekent dat je binnen een repository (Monorepo) zowel een mobiele applicatie als een website (PWA) kunt ontwikkelen. Echter, het gebruik van alleen een Monorepo geeft geen antwoord op de hoofdvraag vanuit Freshheads. Hiervoor komt Tamagui in beeld. In eerdere uitleg heb ik al gesproken over Tamagui. Kort gezegd is Tamagui een UI-library waarbij de componenten gedeeld kunnen worden voor zowel native apps als websites.

In de map `JobCard` heb ik mijn component oorspronkelijk ontwikkeld. In deze map kun je zien dat ik dit component heb opgesplitst in drie verschillende componenten. `-  MyCard.tsx` ,`- MyCardBottom.tsx`, `MyLikeButton.tsx`. Waarom ik dit heb gedaan, zal ik later in dit document uitleggen.

## Component
![Group 63](https://github.com/Zhantie/my-wiertz-app/assets/74553048/3ba45b80-abea-4974-9f69-b44e4f82f5e0)





























































