<template>
  <div class="imprint-container">
    <h2>Impressum</h2>
    <section>
      <p>Angaben gemäß § 5 TMG:</p>
      <address>
        Hair++ GmbH<br />
        Musterstraße 123<br />
        12345 Musterstadt<br />
        Deutschland
      </address>
    </section>

    <section>
      <p>Vertreten durch:</p>
      <p>Geschäftsführer: Max Mustermann</p>
    </section>

    <section>
      <p>Kontakt:</p>
      <address>
        Telefon: +49 123 456789<br />
        E-Mail: <a href="mailto:info@hairplusplus.com">info@hairplusplus.com</a>
      </address>
    </section>

    <section>
      <h2>Umsatzsteuer-ID:</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:
        DE123456789
      </p>
    </section>

    <section>
      <h2>Registereintrag:</h2>
      <p>
        Eintragung im Handelsregister.<br />
        Registergericht: Amtsgericht Musterstadt<br />
        Registernummer: HRB 98765
      </p>
    </section>

    <section>
      <h2>Haftung für Inhalte:</h2>
      <p>
        Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
        Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
        jedoch keine Gewähr übernehmen.
      </p>
    </section>

    <section>
      <h2>Haftung für Links:</h2>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen.
      </p>
    </section>

    <section>
      <h2>Urheberrecht:</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht.
      </p>
    </section>

    <section>
      <p>
        Quelle:
        <a href="https://www.e-recht24.de" target="_blank">e-recht24.de</a>
      </p>
    </section>
  </div>
</template>

<style scoped>
.imprint-container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #e6e6e6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  font-family: "Courier New", Courier, monospace;
  background-color: #fff;
}

h2 {
  font-family: "Aboreto", display;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
  margin-bottom: 20px;
}

section {
  margin-bottom: 30px;
}

address {
  font-style: normal;
  font-size: 20px;
}

a {
  color: #007bff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  font-size: 18px;
  line-height: 1.5;
}
</style>
