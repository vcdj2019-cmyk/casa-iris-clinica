# Casa Íris — site da clínica

Site institucional responsivo em HTML, CSS e JavaScript puro.

## Abrir

Abra `index.html` em um navegador. O site usa fotografias ilustrativas hospedadas no Unsplash e fontes do Google Fonts; para carregar esses recursos, é necessária conexão à internet.

## Personalizar os dados

No início de `script.js`, preencha o objeto `CLINIC`:

- `whatsapp`: número com DDI e DDD, apenas números (ex.: `5511999999999`). Ativa os botões de agendamento e o envio do formulário por WhatsApp.
- `phone`: telefone opcional em formato internacional. Se vazio, o telefone exibido usa o WhatsApp configurado.
- `email`: e-mail da clínica.
- `instagram`: endereço completo do perfil.
- `address`: endereço completo, mostrado no contato e usado como busca do mapa.
- `hours`: dias e horários de funcionamento.
- `mapsQuery`: opcional; use para ajustar a busca do Google Maps (por exemplo, nome e cidade).

Edite também o nome e as descrições diretamente em `index.html`. Os três cartões da equipe são campos demonstrativos: substitua nomes, especialidades, formação, apresentação e fotos por dados fornecidos pela clínica. Os cartões de depoimentos estão identificados como exemplos; substitua apenas por avaliações verdadeiras autorizadas. Troque o texto demonstrativo dos diálogos de Política de Privacidade e Termos de Uso pelo conteúdo aprovado para a clínica antes de publicar.

## Estrutura

- `index.html`: conteúdo e metadados básicos de SEO.
- `style.css`: identidade visual responsiva, animações e estados de interação.
- `script.js`: menu, galeria ampliada, formulário validado e configurações de contato.

