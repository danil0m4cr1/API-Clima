# API Clima
<h2>Rotas Acessíveis</h2>
<ol>
  <li>/weather</li>
  <li>/multiple</li>
  <li>/alert</li>
</ol>

<p>
  <b>1)</b> É possível passar querys, para puxar informações climáticas de UMA determinada cidade e país<br>
  <code>http://localhost:3000/weather?city=cidade&country=país</code>
  <h3>Exemplo de Teste:</h3>
    Clima de Lisboa, Portugal: <br>
<code>
{
    "temperature": 17.99,
    "humidity": 77,
    "windSpeed": 0,
    "rainChance": 0,
    "weatherCondition": "nuvens dispersas"
}
</code>
</p>
<p>
  <b>2)</b> É possível passar query, para puxar informações climáticas de uma ou mais cidades<br>
  <code>http://localhost:3000/multiple?cities=cidade1,cidade2</code>
  <h3>Exemplo de teste:</h3>
  Climas de Campinas, Valinhos e Indaiatuba: <br>
<code>
[
    {
    "city": "Campinas",
    "temperature": 19.89,
    "weather": "céu limpo"
    },
    {
    "city": "Valinhos",
    "temperature": 19.87,
    "weather": "céu limpo"
    },
    {
    "city": "Indaiatuba",
    "temperature": 20.3,
    "weather": "céu limpo"
    }
]
</code>
</p>
<p>
  <b>3)</b> É possível passar query, para verificar como o clima está, de UMA cidade<br>
  <code>http://localhost:3000/alert?city=cidade&country=país</code>
  <h3>Exemplo de Teste:</h3>
  Alerta da cidade de Sydney: <br>
<code>
{
"city": "Sydney",
"temperature": 17.88,
"alert": "Agradável"
}
</code>
</p>

<h2>Como acessar?</h2>
<p>Para acessar minha API você pode instalar o repositório ou clonar o mesmo com:<br>
  <code>git clone https://github.com/danil0m4cr1/API-Clima.git</code>
</p>
