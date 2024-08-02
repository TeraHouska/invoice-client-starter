# Účetnictví - evidence faktur (frontend)
> Projekt byl vytvořen za pomoci kurzů ITnetwork.

Celý projekt zahrnuje dvouserverovou webovou aplikaci na evidenci faktur a osob. Backend [invoice-server-starter](https://github.com/TeraHouska/invoice-server-starter) je vytvořen v Javě ve frameworku SpringBoot. Frontend je implementován v tomto projektu v JS s využitím knihovny React. Frontend komunikuje s backendem pomocí REST API.

## Technologie
- **JavaScript**
  - React
  - React Router
- **HTML/CSS**
  - Bootstrap

## Funkcionality
Aplikace implementuje veškeré CRUD operace s fakturami a s osobami, umí filtrovat faktury a vypsat souhrnné statistiky osob a faktur.

- **Osoby**
  - Přidání nové osoby
  - Detail osoby
  - Úprava osoby
  - Smazání osoby
  - Výpis seznamu osob
- **Faktury**
  - Přidání nové faktury
  - Detail faktury
  - Úprava faktury
  - Smazání faktury
  - Výpis seznamu faktur
    - Filtrace faktur
- **Statistiky**
  - Souhrn faktur
  - Souhrn faktur podle osoby
    

## Ukázky výstupů webové aplikace
### Výpis seznamu osob
![seznam osob](https://github.com/user-attachments/assets/2f5163d1-2ab9-4689-bd5b-695648a788f0)
### Výpis seznamu faktur
![seznam faktur](https://github.com/user-attachments/assets/748a894b-d1a1-442d-b5b9-a84adbac1eec)
### Výpis seznamu faktur - filtrovaný (produkt: web, maximální cena: 1250)
![seznam faktur - filtrovaný](https://github.com/user-attachments/assets/22fa3df9-ce15-4225-b84f-d308372b3868)
### Výpis statistik
![statistiky](https://github.com/user-attachments/assets/b74d42e8-d3f0-40b7-90f7-de3a5784adfe)
### Přidání nové osoby
![formulář pro přidání osoby](https://github.com/user-attachments/assets/f4a9bac6-8e77-4672-85ea-285024e8c1e3)

