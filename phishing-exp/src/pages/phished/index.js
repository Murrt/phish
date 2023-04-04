import { forwardRef } from "react"
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion"
import styles from "@/styles/Home.module.css"

const AccordionItem = forwardRef((props, ref) => (
  <Item
    className="cord"
    {...props}
    ref={ref}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ className: styles.itemPanel }}
  />
))

AccordionItem.displayName = "MyAccordionItem"

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex-wrap w-max sm:w-10/12">
        <div className="text-center">
          <h1 > Which phishing email did you fall for? </h1>
          <h2> Feel free to check out the others aswell!</h2>
        </div>
        <div className="">
          <Accordion mountOnEnter transition transitionTimeout={300}>
            <AccordionItem header="Diner">
              <img src="diner.png" alt="diner mail" className="phish_img" />
            </AccordionItem>

            <AccordionItem header="Teams">

            </AccordionItem>

            <AccordionItem header="Enquete">

            </AccordionItem>

            <AccordionItem header="Prize">

            </AccordionItem>
          </Accordion>
          <div className="w-6/12">
            <h1> Hoe herken ik een phishing mail</h1>
            <div>


              Phishing (afgeleid van het Engelse fishing voor ‘vissen’) draait om e-mails die op het eerste gezicht heel normaal lijken. In zo’n bericht staat meestal een verzonnen reden om jou zover te krijgen dat je persoonlijke gegevens invoert of een schadelijk programma installeert. Een phishing-mail bevat hiertoe bijvoorbeeld een link naar een vervalste inlogpagina van een bank of probeert je ertoe te verleiden een attachment te openen.

              Het spamfilter van NHL Stenden Hogeschool houdt de meeste spam- en phishingberichten al tegen. Maar internetcriminelen worden steeds slimmer en dus belanden phishingmails soms tóch in je postvak. Als dat gebeurt, moet je zo’n bericht direct verwijderen.

              Hoe herken je phishing? Er is geen perfecte manier. Maar je kunt jezelf op diverse manieren beschermen. Onderstaande vind je 10 tips waarmee je phishing kunt herkennen.

              Mocht je toch geklikt hebben op een link en/of gegevens ingevoerd hebben, in het bijzonder je gebruikersnaam en wachtwoord, meld dit dan ALTIJD via het e-mailadres phishing@nhlstenden.com of telefonisch bij het serviceplein via 058-251 2552.
              <tr />
              <h4><b>1. Ken je de afzender?</b></h4>
              <tr />
              Vraagt een onbekende afzender je om een attachment te openen (bijvoorbeeld een factuur), een link aan te klikken of persoonlijke gegevens te controleren (zoals inloggegevens, bankgegevens of creditcardgegevens)? Doe het niet en verwijder de mail meteen!

              <tr />
              <h4><b>2. Bedriegers met nepadres</b></h4>
              <tr />

              Veel afzenders doen alsof ze van een bekend bedrijf zijn. Bijvoorbeeld de ‘eBay factuurservice’. Soms herken je deze bedriegers meteen omdat ze een dubieus e-mailadres gebruiken, zoals ebayfacturen@gmail.com. Maar ook betrouwbaar ogende adressen zijn soms nep. Vertrouw dus niet blind op een correct e-mailadres.


              <tr />
              <h4><b>3. “Geachte klant”</b></h4>
              <tr />


              Echte e-mails van bedrijven gebruiken meestal je naam in de aanhef. Phishingmails hebben meestal een algemene aanhef, zoals ‘Beste klant’. Maar soms hebben internetcriminelen tóch je naam en spreken je daarmee aan. Dus ook hier geldt: let goed op.
              <tr />
              <h4><b> 4. Laat je niet onder druk zetten</b></h4>
              <tr />


              ‘Alleen vandaag geldig!’ – ‘Controleer zo snel mogelijk uw gegevens, anders wordt uw creditcard geblokkeerd!’ – ‘Laatste herinnering!’ Phishingmails proberen je vaak onder druk te zetten. Maar laat dat nooit toe, want een serieuze afzender gaat heus niet op deze manier te werk. Controleer zo’n e-mailbericht dus extra goed voor je besluit te reageren. En let op: in Nederland vragen creditcardmaatschappijen en banken nooit per e-mail om je persoonlijke gegevens te controleren of in te voeren.
              <tr />
              <h4><b>5. Spelvouten vindne</b></h4>
              <tr />


              Phishingmails kun je vaak herkennen aan spelfouten, een lay-out die niet helemaal klopt, vreemde vertalingen of rare tekens. Toch zijn de e-mails van internetcriminelen steeds moeilijker van echt te onderscheiden. Volg dus voor de zekerheid ook de onderstaande stappen.
              <tr />
              <h4><b>6. De beruchte link</b></h4>
              <tr />


              Vraagt de e-mail je om op een link te klikken? Controleer die link dan uiterst nauwkeurig. Een Nederlandse bank of creditcardmaatschappij stuurt bijvoorbeeld nooit een e-mail met daarin een link die je moet aanklikken om persoonsgegevens te controleren.

              Let dus op: de weergegeven link hoeft niet per definitie gelijk te zijn aan de technische link. Dus als de link www.jouwbank.nl heet, kan er een heel ander adres onder verstopt zitten. Check dit dus altijd en neem geen risico.
              <tr />
              <h4><b>7. Het foute adres</b></h4>
              <tr />


              En wat als een link wél betrouwbaar overkomt? Schijn bedriegt vaak. Nemen we eBay en ABNAMRO als voorbeeld: de échte adressen zijn www.ebay.com en www.abnamro.nl. Foute adressen wijken hier altijd een beetje van af of hebben een rare extensie. Bijvoorbeeld: www.ebay.to, www.ebey.com, abnam.ro/login, www.abnamro-inloggen.com.
              <tr />
              <h4><b>8. Attachments #1</b></h4>
              <tr />


              Phishingberichten bevatten vaak attachments, waarvan de inhoud onduidelijk is of die lijken op een factuur. Zulke bestanden kunnen gevaarlijk zijn, omdat er virussen of andere schadelijke software in verstopt kan zitten.

              Open nooit attachments die eindigen op .bat, .exe, .com, .cmd, .vbs. Een bestand dat factuur.exe heet, bevat zeer waarschijnlijk schadelijke software. En als er een zip-bestand wordt meegestuurd, is dit zeer waarschijnlijk ook bedrog.
              <tr />
              <h4><b>9. Attachments #2</b></h4>
              <tr />


              Wees ook voorzichtig met attachments die een .doc, .docx, .ppt of .xls bestand bevatten. Dit lijken weliswaar onschuldige Office-documenten, maar ze kunnen gevaarlijke scripts bevatten. Open deze documenten dus alleen als de afzender bekend is (bijvoorbeeld een collega). En wees ook dan op je hoede. In Office-toepassingen als Word en Excel en in je besturingssysteem kun je bepaalde scripts uitschakelen. Controleer dit voordat je een onbekend bestand opent.
              <tr />
              <h4><b>10. Attachments #3</b></h4>
              <tr />


              Tot slot: sommige besturingssystemen verbergen de extensie (zoals .exe, .txt, etc.). Een potentieel schadelijk bestand als ‘factuur.txt.exe’ is dan te zien als relatief onschuldig ‘factuur.txt’ bestand.

              Bij twijfel geldt altijd: e-mail verwijderen!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home