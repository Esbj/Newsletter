Endpoints Backend


user.js
POST Ny användare
GET Användare för att logga in
PUT för att uppdatera val av brev

admin.js
GET alla användare
GET mailadresser i en sträng med comman


VG Krav
Admin sidan ska ha login
Hårdkodad Admin test 1234 
Kryptera användarnamn och lösenord 
Reflektion


FRONTEND
Logga in => Ändra premunations status 
Registrera ny användare som ska sparas i JSON fil på servern


scrpit.js
LogIn();
  UpdateSubscribtionStatus();
  //skriv ut verifiering på att det är ändrat.
Register();

fetch.js
//hanterar alla POST och GET kommandon

Frontend = localhost:1337
Backend = localhost:3000


Frågor:
Admin login?
Vart ska man verifiera användarnamn och lösenord
Hur indexerar man nya användare
Vart skrivs Welcome To Express in