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
        - cardJobInfo.tsx
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






























































