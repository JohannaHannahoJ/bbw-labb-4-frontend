# Laboration 4 – Frontend (DT207G Backend-baserad webbutveckling)

**Genomförd av: joha2102**

## Projektbeskrivning

Detta projekt är del 2 av Laboration 4 i kursen *Backend-baserad webbutveckling*. Det är en frontend som är byggd för att kommunicera med en backend som hanterar databas, autentisering och API-routes.

Syftet är att skapa en webbtjänst som hanterar användarregistrering och inloggning med autentisering via JWT.

Jag har valt att bygga en enkel digital dagbok där inloggade användare kan skapa och läsa sina egna inlägg bakom inloggning.

Del 1 av uppgiften, backend, finns här:  
**länk kommer**

## Webbplatsen innehåller

- Registrering av användare
- Inloggning med JWT-autentisering
- Skyddad dashboard för inloggade användare som visar användarens inlägg
- Skapa nya dagboksinlägg
- Header och Footer som separata Angular-komponenter

## Tekniker

- Angular
- TypeScript
- HTML & CSS (global samt på komponent-nivå)
- Angular Router
- Angular Forms (ngModel)
- JWT-autentisierinf
- Git & GitHub


## Kör projektet lokalt

```bash
ng serve
```

Gå sedan till: http://localhost:4200

Sidan laddas om vid uppdateringar i koden.

## Bygg projektet

```bash
ng build
```
Detta kompilerar projektet och placerar de färdiga filerna i mappen `dist/`. 
Som standard optimeras applikationen för bästa möjliga prestanda och hastighet.

## Routing

Eftersom Angular är en Single Page Application (SPA) hanteras routing på klientsidan.  
För att direktlänkar och siduppdatering ska fungera korrekt i produktion krävs en `_redirects`-regel vid publicering på Netlify.

Filen ska innehålla följande rad: `/* /index.html 200`
(https://docs.netlify.com/manage/routing/redirects/rewrites-proxies/#history-pushstate-and-single-page-apps)
