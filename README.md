# Adventure Point

Klikkbar demo av **Adventure Point**, en app for å finne aktiviteter i nærområdet, booke dem og samle poeng du kan bruke hos partnerbedrifter. Idéen kommer fra et studentprosjekt i faget BED-2015 Kommersialisering ved UiT, våren 2022.

**Åpne demoen:** https://cioldo.github.io/adventure-point/

## Hva er ekte og hva er demo

- **Ekte:** Stedene i Tromsø, adressene, prisene og åpningstidene. De ble hentet fra visittromso.no og andre kilder i november 2026, og hvert sted lenker til kilden sin.
- **Oppdiktet:** Testkontoen «Thomas Testesen», demo-kronene, poengene, partnernivåene og konkurransen. Ingen av bedriftene er partnere, og ingen booking blir sendt.
- **Lagring:** Alt du gjør lagres bare i nettleseren din.

## Rolige tider og bedriftskonto

- **Rolige tider:** Når et sted har få besøkende, koster det færre poeng å booke (opptil 40 % rabatt som standard). Belegget er et beregnet anslag i demoen.
- **Bedriftskonto:** Under Profil → Innstillinger → «Bytt til bedriftskonto» logger du inn som den oppdiktede testbedriften **Nordlys Padling AS**. Der finner du oversikt, bookinger, innsjekk med kode og innstillinger for hvor stor rabatten i rolige tider skal være. Innstillingene gjelder turen deres i kundeappen med en gang.

## Bilder

Alle bildene kommer fra Wikimedia Commons og brukes etter lisensen som er oppgitt. Fotograf, lisens og kilde står i appen under Profil → Bildekreditering. Bilder merket «illustrasjon» er ikke tatt hos stedet de vises ved.

## Bygging

`index.html` bygges fra `../adventure-point.html` med `bash build-web.sh`.
