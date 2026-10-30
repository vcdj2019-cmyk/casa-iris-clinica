/* Personalize os dados abaixo antes de publicar. Use o WhatsApp com DDI e DDD, apenas números. */
const CLINIC = {
  name: 'Casa Íris',
  whatsapp: '', // Exemplo: 5511999999999
  phone: '',
  email: '',
  instagram: '', // Exemplo: https://instagram.com/sua_clinica
  address: '',
  hours: '',
  mapsQuery: ''
};
const suggestedMessage = 'Olá! Gostaria de conhecer os serviços da clínica e obter informações sobre os atendimentos e horários disponíveis.';
const setText = (selector, value, fallback) => document.querySelectorAll(selector).forEach(el => { el.textContent = value || fallback; });
setText('[data-config="address"]', CLINIC.address, '[Endereço da clínica, cidade – UF]');
setText('[data-config="hours"]', CLINIC.hours, '[Dias e horários de funcionamento]');
setText('[data-config="phoneLink"]', CLINIC.phone || (CLINIC.whatsapp ? `+${CLINIC.whatsapp}` : ''), '[Telefone / WhatsApp]');
setText('[data-config="emailLink"]', CLINIC.email, '[E-mail da clínica]');
setText('[data-config="instagramLink"]', CLINIC.instagram ? 'Instagram ↗' : 'Instagram (adicionar link)', CLINIC.instagram ? 'Instagram ↗' : 'Instagram (adicionar link)');
document.querySelectorAll('[data-config="phoneLink"]').forEach(el => {el.href=CLINIC.phone ? `tel:${CLINIC.phone.replace(/\D/g,'')}` : (CLINIC.whatsapp ? `https://wa.me/${CLINIC.whatsapp}` : '#contato');});
document.querySelectorAll('[data-config="emailLink"]').forEach(el => el.href=CLINIC.email ? `mailto:${CLINIC.email}` : '#contato');
document.querySelectorAll('[data-config="instagramLink"]').forEach(el => {el.href=CLINIC.instagram || '#contato'; if(!CLINIC.instagram) el.removeAttribute('target');});
const mapsQuery = CLINIC.mapsQuery || CLINIC.address;
const mapsUrl = mapsQuery ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}` : 'https://www.google.com/maps';
document.querySelectorAll('[data-maps]').forEach(el => {el.href=mapsUrl;el.target='_blank';el.rel='noreferrer';});
const map=document.querySelector('[data-map]'); if(mapsQuery) map.src=`https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
function waUrl(message){return CLINIC.whatsapp ? `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}` : null;}
document.querySelectorAll('[data-whatsapp]').forEach(el => {const url=waUrl(suggestedMessage); if(url){el.href=url;el.target='_blank';el.rel='noreferrer';}else{el.href='#contato';el.addEventListener('click',e=>{e.preventDefault();document.querySelector('#formStatus').textContent='Adicione o número da clínica em script.js para ativar o agendamento pelo WhatsApp.';document.querySelector('#contato').scrollIntoView({behavior:'smooth'});});}});
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));
const lightbox=document.querySelector('.lightbox');
document.querySelectorAll('.gallery-item').forEach(item=>item.addEventListener('click',()=>{lightbox.querySelector('img').src=item.dataset.full;lightbox.querySelector('img').alt=item.querySelector('img').alt;lightbox.showModal();}));
lightbox.querySelector('.lightbox-close').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close();});
document.querySelector('#contactForm').addEventListener('submit',e=>{e.preventDefault();const form=e.currentTarget;if(!form.reportValidity())return;const data=new FormData(form);const message=`Olá! Meu nome é ${data.get('name')}.\nE-mail: ${data.get('email')}\nTelefone: ${data.get('phone')}\n\n${data.get('message')}`;const url=waUrl(message);if(url){window.open(url,'_blank','noopener,noreferrer');document.querySelector('#formStatus').textContent='Sua mensagem foi preparada no WhatsApp. Revise e envie por lá.';}else{document.querySelector('#formStatus').textContent='O formulário está validado. Para enviar, adicione o número da clínica em script.js.';}});
const legal=document.querySelector('.legal-dialog');document.querySelectorAll('[data-legal]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();const title=a.dataset.legal;legal.querySelector('.legal-content').innerHTML=`<div class="eyebrow">CASA ÍRIS · SAÚDE & MOVIMENTO</div><h2>${title}</h2><p>Este espaço deve conter o texto aprovado pela clínica para ${title.toLowerCase()}, incluindo as informações aplicáveis ao seu atendimento e ao uso deste site.</p><p>Antes de publicar, substitua este texto demonstrativo pelo conteúdo revisado e adequado à operação da clínica.</p>`;legal.showModal();}));legal.querySelector('.lightbox-close').addEventListener('click',()=>legal.close());legal.addEventListener('click',e=>{if(e.target===legal)legal.close();});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.section-heading,.service-card,.intro-main,.intro-photo,.values,.gallery-item,.team-card,.testimonial,.contact-form,.contact-block').forEach(el=>{el.classList.add('reveal');observer.observe(el);});

