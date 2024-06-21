1. **Hämta menyn**
  - `http://localhost:8080/menu `
   
2. **Hämta kampanjer**
  - `GET http://localhost:8080/campaigns`
  - Returnerar kampanjer om det finns, annars visas ett felmeddelande.

### Admin 


1. **Logga in som admin**
 - `POST http://localhost:8080/login`
  -  Exempel på body:
     ```json
     {
       "username": "admin",
       "password": "admin123"
     }
     ```

2. **Lägga till produkt i meny**
  -  `POST http://localhost:8080/menu`
 -  Exempel på body:
     ```json
     {
       "title": "Arbic coffe",
       "desc": "Beskrivning ",
       "price": 69
     }
     ```

3. **Ta bort produkt från meny**
    - `DELETE http://localhost:8080/menu/:id`

4. **Ändra produkt**
  -  `PUT http://localhost:8080/menu/:id`
-   Exempel på body:
     ```json
     {
       "title": " produkt",
       "desc": "Beskrivning",
       "price": 69
     }
     ```

5. **Skapa ny kampanj**
  -  `POST http://localhost:8080/campaigns`
  -  Exempel på body:
     ```json
     {
       "products": ["Bryggkaffe", "Caffè Doppio"],
       "campaignPrice": 40
     }
     ```

6. **Ta bort kampanj**
    - `DELETE http://localhost:8080/campaigns/:id`

...............................................................................

 **Inloggning krävs för admin endpoints**
   - Du måste vara inloggad som admin för att använda ovanstående endpoints. Om du inte är inloggad kommer du få ett felmeddelande.

**Krav för att lägga till en ny produkt**
   - title, desc, och price är obligatoriska fält.
   - Försök att lägga till en produkt som inte uppfyller dessa krav kommer att stoppas.
   - Det går inte att lägga till en produkt med samma namn som en befintlig produkt.

 **Krav för att skapa en kampanj**
   - campaignPrice är ett obligatoriskt fält och måste vara ett nummer.
   - Identiska kampanjer får inte läggas till.
