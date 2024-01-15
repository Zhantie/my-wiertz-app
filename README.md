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

Dit component heb ik ontwikkeld om te kijken wat de mogelijkheden waren binnen de Monorepo van Tamagui.

### Twee benaderingen

#### Platform specifieke code

```typescript
const isWeb = Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos';
const isNative = Platform.OS === 'ios' || Platform.OS === 'android';
```

```typescript
{/* kijkt of het Native app is zo ja heb je een like functie, zo niet geen heart icon */}
        {isNative ? (
          <Button
            borderRadius={0}
            backgroundColor=""
            width={50}
            height={50}
            style={{
              zIndex: 1,
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            icon={<Heart size={25} color="#EB7002" />}
          ></Button>
        ) : null}
```
Als voorbeeld heb ik een heart Icon voor het liken van Jobs. Deze like functie word alleen weergeven in een native applicatie door `isNative` te gebruiken. Dit kan in grote projecten je geschreven code onduidelijk maken. Bovendien is het niet handig wanneer je wijzigingen moet aanbrengen. Ook kan de snelheid van je applicatie worden beïnvloed, aangezien je geschreven code nog steeds wordt gelezen door beide platformen. Dit kan in grote projecten bijvoorbeeld de laadtijd beïnvloeden

#### Creëren van `Types`

```typescript
// type demoCardProps is een eigen props kan combineren met de CardProps en itemProps van Tamagui
type DemoCardProps = {
  isChosenCard?: boolean
  isJobCardInfo?: boolean
  isLikeButton?: boolean
} & CardProps```
```

```typescript
<DemoCard isChosenCard={true} isJobCardInfo={true} isLikeButton={true}  />
```
Creëren van verschillende componenten is dat het ontleden van je component een makkelijkere onderhoud geeft wanneer een verandering plaatsvind. In het geval van dit component kun je zien dat ik mijn eigen types creëer 
```typescript 
 isChosenCard?: boolean
 isJobCardInfo?: boolean
 isLikeButton?: boolean
```
Terugkomend op het creëren van verschillende componenten: ik geef deze types (eigenschappen) mee wanneer mijn component in de app of web wordt weergegeven. Als ik bijvoorbeeld het type `isChosenCard?` niet in de app wil laten verschijnen, kan ik eenvoudig dit type verwijderen binnen het Expo-bestand. Door deze benadering blijft je code overzichtelijk en gemakkelijk overdraagbaar. Bovendien is het handig voor kleine aanpassingen op beide platforms. Stel dat je de like-functie ook binnen de webversie wilt hebben, dan is het eenvoudig te realiseren door het type `isLikeButton` mee te geven.

## Resultaat

![Web-component](https://github.com/Zhantie/my-wiertz-app/assets/74553048/ca7b5b60-2902-472f-ae1b-7a796f7b77c5)

https://github.com/Zhantie/my-wiertz-app/assets/74553048/a07067df-22bc-4773-af62-83c077ed0778





















































