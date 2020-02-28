export default [(group, country)=>`

<h1>Aufgabenbeschreibung</h1>
<p>Liebe Teilnehmerin, <br/>lieber Teilnehmer,</p>

<p>heute kaufen Sie Lebensmittel in einem Online-Supermarkt ein. </p><p>

Wir bitten Sie, ihren <b>wöchentlichen Lebensmitteleinkauf</b> in dem Online-Supermarkt durchzuführen, also Lebensmittel einzukaufen, die Sie <b>für sich selbst für den Zeitraum von einer Woche einkaufen</b> würden. Dazu steht Ihnen ein <b>Budget von insgesamt ${country == 'de' ? '€55':'CHF 100,-'}</b> zur Verfügung. Gehen Sie bitte davon aus, dass Sie einen <b>gewöhnlichen Einkauf durchführen</b>. Außergewöhnliche Ereignisse, die in der kommenden Woche anstehen könnten (z.B. ein geplantes gemeinsames Essen mit Freunden), bitten wir Sie, nicht in ihren Einkauf einzubeziehen.
</p>`,(group, country)=>`

<p>Wenn Sie ein Produkt kaufen möchten, geht das <b>via Klick auf „Auf die Einkaufsliste“</b> oder <b>durch einen Klick auf das kleine „Plus“ in der Produktübersicht</b>(siehe unten). In die Detailansicht wechseln Sie, indem Sie auf das Bild des Produktes oder seinen Namen klicken. </p>
<img src="${chrome.runtime.getURL('task-1.png')}"/>

<p>Die Detailansicht liefert folgende Informationen zu dem Produkt:</p>
<li style="padding-left:20px">Menge des Produktes</li>
<li style="padding-left:20px">Detaillierte Abbildung</li>
<li style="padding-left:20px">Preis</li>
<li style="padding-left:20px">Nährwerte (100g und eine Portion)</li>
<li style="padding-left:20px">Allgemeine Produktinformationen (Kühlung, Verpackungsart, Herkunft etc.) </li>
${group == 'A' || group == 'B' ? '<li style="padding-left:20px">Nutri-Score (fünfstufige Farb- und Buchstabenskala, die einen Überblick über die Nährwertqualität eines Produktes liefert (A-E); bezieht Energiegehalt, Zucker, gesättigte Fettsäuren, Natrium, Proteine, Ballaststoffe und Obst-, Gemüse- bzw. Nussanteil mit ein)</li>':''}
<li style="padding-left:20px">Zutaten des Produktes</li>

<p>Die Artikel, die sich aktuell in ihrem Warenkorb befinden, können Sie jederzeit durch einen Klick auf das Einkaufswagen-Symbol am oberen linken Rand einsehen. Dort können Sie auch bereits gewählte Produkte wieder entfernen.
Über das „i“-Symbol können Sie diese Aufgabenbeschreibung jederzeit erneut aufrufen. </p>

<p>Sie haben sehr viel Zeit für die Aufgabe, sodass Sie sich in Ruhe alle Produkte und Kategorien ansehen können. Wenn Sie ein Produkt kaufen möchten, fügen Sie es Ihrem Warenkorb hinzu. Sobald Sie alle gewünschten Produkte hinzugefügt haben, klicken Sie auf das Einkaufswagen-Symbol am oberen linken Rand und wählen unten „Zur Kasse“.<img src="${chrome.runtime.getURL("task-2.png")}" width="100px"/></p>
`, (group, country) => country == 'ch' ? '<p><b>Als zusätzliche Vergütung für die Teilnahme an der Studie werden unter allen Teilnehmenden drei Personen ausgelost, die ihren zusammengestellten Warenkorb zugeschickt bekommen.</b> Geben Sie dazu bitte am Ende der Umfrage Ihre E-Mail-Adresse an, damit wir Sie im Gewinnfall kontaktieren können. Die E-Mail-Adresse dient nur zur Benachrichtigung, wird getrennt von Ihren Antworten gespeichert und nach der Studie gelöscht. </p>' : '<p><b>Als zusätzliche Vergütung für die Teilnahme an der Studie werden unter allen Teilnehmenden drei Personen ausgelost, die ihren zusammengestellten Warenkorb zugeschickt bekommen.</b> Sollte ein Produkt nicht verfügbar sein, wird es durch ein Alternativprodukt ersetzt, das dem ursprünglichen mindestens gleichwertig ist. Um Ihren Gewinn erhalten zu können, geben Sie bitte am Ende der Umfrage Ihre E-Mail-Adresse an, damit wir Sie im Falle eines Gewinns kontaktieren können. Die E-Mail-Adresse dient nur zur Benachrichtigung, wird getrennt von Ihren Antworten gespeichert und nach der Studie gelöscht.</p>']