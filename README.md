# Projeto — Site Spotify Student

## Integrantes

* **João Pedro Lantelme** | Matrícula: 1139790
* **Laura Portella de Souza** | Matrícula: 1139306

## Site de referência

[Spotify Premium para Estudantes](https://www.spotify.com/br-pt/student/)

---

# Referência escolhida

A referência escolhida foi a página **Spotify Premium para Estudantes**.

Escolhemos essa página por apresentar um layout moderno, organizado e visualmente simples de reproduzir. A página possui diferentes seções, como apresentação, benefícios, perguntas frequentes e rodapé, permitindo aplicar os conhecimentos de **HTML semântico, CSS, Flexbox, Grid e responsividade** estudados na disciplina.

---

# Parte 1 — Página HTML e CSS

## 1.1 Estrutura HTML semântica e acessível

### Checklist

* [x] Utilização de `header`
* [x] Utilização de `nav`
* [x] Utilização de `main`
* [x] Utilização de `section`
* [x] Utilização de `article`
* [x] Utilização de `footer`
* [x] Imagens com atributo `alt` descritivo
* [x] Formulário funcional
* [x] `label` associado aos campos do formulário
* [x] Campo de e-mail utilizando `type="email"`

### Justificativa

A estrutura HTML foi organizada utilizando elementos semânticos para representar as diferentes partes da página. O `header` será utilizado para o cabeçalho e a navegação, o `main` para o conteúdo principal, as `section` para dividir os blocos da página, os `article` para representar conteúdos individuais e o `footer` para o rodapé.

O formulário será estruturado com `label` associado aos campos por meio dos atributos `for` e `id`. Também será utilizado `type="email"` no campo de e-mail para permitir uma validação básica do navegador.

---

## 1.2 Fidelidade visual à referência

### Checklist

* [ ] Cabeçalho semelhante ao site original
* [ ] Cores semelhantes à referência
* [ ] Tipografia semelhante
* [ ] Espaçamentos semelhantes
* [ ] Chamada principal em destaque
* [ ] Seção de benefícios
* [ ] Área de perguntas frequentes
* [ ] Botões semelhantes à referência
* [ ] Rodapé organizado de forma semelhante
* [ ] Organização geral semelhante à página original

### Justificativa

A página foi desenvolvida observando a organização visual do site de referência, sem copiar o código-fonte original.

Foram utilizados como base elementos visuais presentes na página do Spotify, como o cabeçalho, a chamada principal, os benefícios, as perguntas frequentes, os botões e a organização do rodapé.

Pequenas diferenças poderão existir para adaptar o conteúdo e o desenvolvimento às necessidades do projeto.

---

## Comparação visual

### Site original

![Site original](./img/SiteOriginal1.png)

### Site desenvolvido

![Site desenvolvido](./img/SiteResultado1.png)

---

## Comparação lado a lado

| Site original                             | Site desenvolvido                              |
| ----------------------------------------- | ---------------------------------------------- |
| ![Site original](./img/SiteOriginal1.png) | ![Site desenvolvido](./img/SiteResultado1.png) |

---

# 1.3 CSS: seletores, box model e variáveis

### Checklist

* [ ] Seletores por classe
* [ ] Seletores descendentes
* [ ] Pseudo-classes
* [ ] `:hover`
* [ ] `:focus`
* [ ] Box Model
* [ ] `margin`
* [ ] `padding`
* [ ] `border`
* [ ] `width`
* [ ] `height`
* [ ] Variáveis CSS
* [ ] Unidades relativas e absolutas

### Justificativa

Foram utilizadas classes para organizar e estilizar os componentes da página. Também serão utilizados seletores descendentes para aplicar estilos em elementos dentro de determinadas partes do site.

Pseudo-classes como `:hover` e `:focus` serão utilizadas para representar diferentes estados de interação dos elementos.

O Box Model será aplicado através de propriedades como `margin`, `padding`, `border`, `width` e `height`.

As principais cores e valores reutilizados serão organizados através de variáveis CSS dentro de `:root`, facilitando a manutenção e a organização do código.

---

# 1.4 Responsividade: Flexbox, Grid e Mobile First

### Checklist

* [ ] Desenvolvimento utilizando Mobile First
* [ ] Flexbox
* [ ] CSS Grid
* [ ] Media query com `min-width`
* [ ] Layout adaptado para celular
* [ ] Layout adaptado para desktop
* [ ] Teste em diferentes tamanhos de tela

### Justificativa

O desenvolvimento do CSS será realizado utilizando a abordagem **Mobile First**, começando pela organização dos elementos para telas menores.

O **Flexbox** será utilizado para organizar elementos como o cabeçalho, a navegação e outros componentes da página.

O **CSS Grid** será utilizado principalmente na organização dos blocos de benefícios e outras áreas que necessitem de uma estrutura em colunas.

Para telas maiores, será utilizada uma media query com `min-width`, permitindo reorganizar e distribuir melhor os elementos no desktop.

---

# 1.5 Personalização e originalidade

### Checklist

* [ ] Adição de elemento próprio que não existe no site original
* [ ] Personalização de algum componente da página

### Justificativa

Será adicionada uma pequena personalização ao projeto para atender ao requisito de originalidade solicitado na atividade.

A personalização será integrada ao layout sem prejudicar a identidade visual do Spotify e servirá para diferenciar o projeto da página original.

---

# Parte 2 — Processo e Git

## Histórico de desenvolvimento

O desenvolvimento do projeto será registrado utilizando Git, com commits realizados durante as diferentes etapas da construção da página.

### Checklist

* [ ] Pelo menos 8 commits
* [ ] Commits realizados em pelo menos 3 dias diferentes
* [ ] Commits descrevendo as alterações realizadas
* [ ] `index.html` na raiz do repositório
* [ ] `style.css` na raiz do repositório
* [ ] `README.md` na raiz do repositório

---

## Estrutura do projeto

```text
ProjetoSpotifyStudent/
│
├── index.html
├── style.css
├── README.md
│
└── img/
    ├── SiteOriginal1.png
    └── SiteResultado1.png
```

---

# Site original

A página utilizada como referência pode ser acessada pelo link:

[Spotify Premium para Estudantes](https://www.spotify.com/br-pt/student/)

---

# Observação

Este projeto é uma reprodução acadêmica da página **Spotify Premium para Estudantes**, utilizada como referência para o desenvolvimento do site. O projeto busca reproduzir sua estrutura e seus principais elementos visuais utilizando HTML e CSS.
