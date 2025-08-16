// Basic config
const OWNER_PHONE = "6389293604";
const WHATSAPP_NUMBER = "91" + (OWNER_PHONE.startsWith("0")? OWNER_PHONE.slice(1): OWNER_PHONE);
const OWNER_EMAIL = "rselectrician9283@gmail.com";
const SITE_NAME = "RS Electrician Hub";

// --- i18n content (English + Hindi) ---
const I18N = {
  en: {
    "nav.home":"Home","nav.services":"Services","nav.price":"Price List","nav.gallery":"Gallery","nav.feedback":"Feedback","nav.contact":"Contact","nav.book":"Book Service",
    "hero.badge":"Fast • Reliable • Expert","hero.title":"Trusted Electrician for Homes & Offices","hero.desc":"From wiring to lighting, repairs to installations — professional service with transparent pricing.","hero.book":"Book Service","hero.contact_small":"Call:",
    "about.title":"About RS-Electrician Hub","about.desc":"RS Electrician Hub provides skilled electrical services: home wiring, lighting upgrades, appliance repair, inverter & CCTV work — reliable, safe & affordable.",
    "services.title":"Our Services","testimonials.title":"Happy Customers",
    "contact.quick_title":"Quick Contact","contact.send_email":"Send Email",
    "footer.desc":"Professional electrician services in your city. Quick response, transparent pricing, and reliable work.",
    "footer.owner_lbl":"Owner:","footer.phone_lbl":"Phone:","footer.email_lbl":"Email:",
    "email.subject_quick":"Quick Contact from Website","email.subject_service":"Service Enquiry","email.subject_contact":"Contact Form",
    "form.name":"Your Name","form.phone":"Phone","form.city":"City","form.message":"How can we help?","form.location":"Address / Location","form.notes":"Any additional details...",
    // services translations available via service data
    "services.process":"Work Process","services.benefits":"Benefits","services.price":"Price List",
    "services.book":"Book Now","price.job":"Job","price.price":"Price","price.note":"*Final quote after site inspection. Taxes/materials extra if applicable.",
    "feedback.title":"Customer Feedback","feedback.give":"Give Your Rating (5-Star)","feedback.recent":"Recent Feedback","feedback.submit":"Submit Rating",
    "contact.title":"Contact Us","contact.get_in_touch":"Get in Touch","contact.map":"Find Us on Map","contact.map_note":"Replace the location in the iframe with your exact address.",
    "contact.whatsapp_lbl":"WhatsApp:","contact.phone_lbl":"Phone:","contact.email_lbl":"Email:"
  },
  hi: {
    "nav.home":"होम","nav.services":"सेवाएँ","nav.price":"प्राइस लिस्ट","nav.gallery":"गैलरी","nav.feedback":"फ़ीडबैक","nav.contact":"संपर्क","nav.book":"सर्विस बुक करें",
    "hero.badge":"तेज़ • भरोसेमंद • विशेषज्ञ","hero.title":"घरों और दफ़्तरों के लिए भरोसेमंद बिजली मिस्त्री","hero.desc":"वायरिंग से लेकर लाइटिंग, रिपेयर से इंस्टॉलेशन तक — पारदर्शी कीमतों के साथ पेशेवर सेवा।","hero.book":"सर्विस बुक करें","hero.contact_small":"फ़ोन करें:",
    "about.title":"आरएस-इलेक्ट्रीशियन हब के बारे में","about.desc":"आरएस इलेक्ट्रीशियन हब कुशल विद्युत सेवाएं प्रदान करता है: होम वायरिंग, लाइटिंग अपग्रेड, उपकरण मरम्मत, इन्वर्टर व सीसीटीवी — भरोसेमंद, सुरक्षित और किफायती।",
    "services.title":"हमारी सेवाएं","testimonials.title":"खुश ग्राहक",
    "contact.quick_title":"त्वरित संपर्क","contact.send_email":"ईमेल भेजें",
    "footer.desc":"आपके शहर में पेशेवर इलेक्ट्रिशियन सेवाएं। तेज़ प्रतिक्रिया, पारदर्शी मूल्य और भरोसेमंद काम।",
    "footer.owner_lbl":"मालिक:","footer.phone_lbl":"फोन:","footer.email_lbl":"ईमेल:",
    "email.subject_quick":"वेबसाइट से त्वरित संपर्क","email.subject_service":"सेवा पूछताछ","email.subject_contact":"संपर्क फ़ॉर्म",
    "form.name":"आपका नाम","form.phone":"फ़ोन","form.city":"शहर","form.message":"कैसे मदद करें?","form.location":"पता / स्थान","form.notes":"अन्य विवरण...",
    "services.process":"कार्य प्रक्रिया","services.benefits":"लाभ","services.price":"मूल्य सूची",
    "services.book":"अभी बुक करें","price.job":"काम","price.price":"कीमत","price.note":"*अंतिम कोटेशन साइट निरीक्षण के बाद। कर/सामग्री लागू होंगी।",
    "feedback.title":"ग्राहक फ़ीडबैक","feedback.give":"अपनी रेटिंग दें (5-स्टार)","feedback.recent":"हाल के फ़ीडबैक","feedback.submit":"सबमिट करें",
    "contact.title":"हमसे संपर्क करें","contact.get_in_touch":"संपर्क में रहें","contact.map":"नक्शे पर पाएं","contact.map_note":"आईफ्रेम में अपना सटीक पता डालें।",
    "contact.whatsapp_lbl":"व्हाट्सएप:","contact.phone_lbl":"फोन:","contact.email_lbl":"ईमेल:"
  }
};

// --- service data (single source used by services.html and services grid)
const SERVICES = [
  {
    id:"home-wiring-rewiring", title_en:"Home Wiring & Rewiring", title_hi:"होम वायरिंग व री-वाईरिंग",
    subtitle_en:"Reliable home wiring & safety upgrades", subtitle_hi:"भरोसेमंद घरेलू वायरिंग और सुरक्षा अपग्रेड",
    process_en:["Site visit & assessment","Load calculation & safety planning","High-quality copper wiring","Concealed/Surface wiring","MCB/RCBO safety upgrades"],
    process_hi:["साइट विज़िट व मूल्यांकन","लोड कैलकुलेशन व सुरक्षा योजना","उच्च गुणवत्ता ताम्र वायरिंग","छुपी/सतह वायरिंग","MCB/RCBO सुरक्षा अपग्रेड"],
    prices:[["Room point wiring","₹600 - ₹1,200"],["Full home rewiring","₹20,000 - ₹60,000"],["MCB/DB upgrade","₹1,500 - ₹4,000"]]
  },
  {
    id:"lighting-installation", title_en:"Lighting Installation", title_hi:"लाइटिंग इंस्टॉलेशन",
    subtitle_en:"LED, outdoor & smart lighting", subtitle_hi:"एलईडी, आउटडोर और स्मार्ट लाइटिंग",
    process_en:["LED panel, bulbs, chandeliers","Outdoor garden/parking lights","Smart/Dimmer solutions","Energy-efficient upgrades"],
    process_hi:["एलईडी पैनल, बल्ब, झूमर","बाहरी गार्डन/पार्किंग लाइट्स","स्मार्ट/डिमर समाधान","ऊर्जा-कुशल अपग्रेड"],
    prices:[["LED tube/panel","₹250 - ₹600 per unit"],["Chandelier install","₹1,500 - ₹4,000"],["Dimmer switch setup","₹400 - ₹900"]]
  },
  {
    id:"appliance-repair", title_en:"Appliance Repair", title_hi:"अप्लायंस मरम्मत",
    subtitle_en:"Geyser, microwave, RO repairs", subtitle_hi:"गीज़र, माइक्रोवेव, RO मरम्मत",
    process_en:["Geyser, oven, microwave, RO, etc.","Fault-finding & replacement","Original parts (on request)","Warranty on service"],
    process_hi:["गीज़र, ओवन, माइक्रोवेव, RO आदि","फ़ॉल्ट-फाइंडिंग और प्रतिस्थापन","मूल पुर्जे (अनुरोध पर)","सेवा पर वारंटी"],
    prices:[["Geyser installation/repair","₹500 - ₹1,200"],["Microwave inspection","₹300 - ₹700"],["RO installation","₹700 - ₹1,200"]]
  },
  {
    id:"fan-installation-repair", title_en:"Fan Installation & Repair", title_hi:"फ़ैन इंस्टॉलेशन व मरम्मत",
    subtitle_en:"Ceiling & exhaust fan work", subtitle_hi:"सीलिंग और एग्जॉस्ट फैन काम",
    process_en:["Ceiling/exhaust/fresh-air fans","Capacitor and bearing replacement","False-ceiling friendly mounts"],
    process_hi:["सीलिंग/एग्जॉस्ट/फ्रेश-एयर फैन","कैपेसिटर व बेयरिंग प्रतिस्थापन","फाल्स-सीलिंग मैत्री माउंट"],
    prices:[["Ceiling fan install","₹300 - ₹600"],["Exhaust fan install","₹300 - ₹700"],["Fan repair (capacitor)","₹200 - ₹450"]]
  },
  {
    id:"switchboard-installation-repair", title_en:"Switchboard Installation & Repair", title_hi:"स्विचबोर्ड इंस्टॉल व मरम्मत",
    subtitle_en:"New points, socket additions & fixes", subtitle_hi:"नए पॉइंट्स, सॉकेट जोड़ना व फिक्सेस",
    process_en:["New points, socket additions","Loose contact/short-circuit fix","Modular switch upgrades"],
    process_hi:["नए पॉइंट्स, सॉकेट जोड़ना","ढीला संपर्क / शॉर्ट-सर्किट समाधान","मॉड्यूलर स्विच अपग्रेड"],
    prices:[["Switchboard replacement","₹400 - ₹1,200"],["New socket point","₹300 - ₹700"],["Short-circuit fix","₹300 - ₹900"]]
  },
  {
    id:"inverter-battery", title_en:"Inverter & Battery Installation/Repair", title_hi:"इन्वर्टर व बैटरी इंस्टॉल/रिपेयर",
    subtitle_en:"Home UPS setup & battery work", subtitle_hi:"होम UPS सेटअप व बैटरी कार्य",
    process_en:["Home UPS setup","Battery replacement & testing","Safe earthing & cabling"],
    process_hi:["होम UPS सेटअप","बैटरी प्रतिस्थापन व परीक्षण","सुरक्षित अर्थिंग व केबलिंग"],
    prices:[["Inverter installation","₹1,000 - ₹2,500"],["Battery replacement","₹400 - ₹900"],["Annual maintenance","₹1,000 - ₹2,200"]]
  },
  {
    id:"cctv-installation", title_en:"CCTV Camera Installation", title_hi:"सीसीटीवी इंस्टॉलेशन",
    subtitle_en:"IP cameras, DVR/NVR & remote view", subtitle_hi:"IP कैमरा, DVR/NVR और रिमोट व्यू",
    process_en:["Dome/bullet IP cameras","DVR/NVR configuration","Remote mobile viewing"],
    process_hi:["डोम/बुलेट IP कैमरा","DVR/NVR कॉन्फ़िगरेशन","रिमोट मोबाइल व्यूइंग"],
    prices:[["Single camera setup","₹800 - ₹1,800"],["4-camera package (labour)","₹3,500 - ₹7,000"],["NVR configuration","₹800 - ₹1,500"]]
  },
  {
    id:"doorbell-intercom", title_en:"Door Bell & Intercom Installation", title_hi:"डोरबेल व इंटरकॉम इंस्टॉल",
    subtitle_en:"Wireless video doorbells & intercoms", subtitle_hi:"वायरलेस वीडियो डोरबेल व इंटरकॉम",
    process_en:["Wireless/video doorbells","Intercom handsets","Neat concealed wiring"],
    process_hi:["वायरलेस/वीडियो डोरबेल","इंटरकॉम हेंडसेट","साफ़ छुपी वायरिंग"],
    prices:[["Doorbell install","₹200 - ₹500"],["Video doorbell install","₹800 - ₹1,800"],["Intercom handset","₹600 - ₹1,300"]]
  },
  {
    id:"water-motor-pump", title_en:"Water Motor & Pump Wiring", title_hi:"वाटर मोटर व पम्प वायरिंग",
    subtitle_en:"Starter panels, timers & 3-phase", subtitle_hi:"स्टार्टर पैनल, टाइमर और 3-फेज़",
    process_en:["Starter panels & timers","Overload protection","3-phase expertise"],
    process_hi:["स्टार्टर पैनल व टाइमर","ओवरलोड प्रोटेक्शन","3-फेज विशेषज्ञता"],
    prices:[["Motor starter install","₹1,200 - ₹2,800"],["Timer/Float switch setup","₹900 - ₹2,200"],["Pump rewiring","₹1,200 - ₹3,500"]]
  },
  {
    id:"emergency-repair", title_en:"Emergency Electrical Repair", title_hi:"इमरजेंसी इलेक्ट्रिकल रिपेयर",
    subtitle_en:"24×7 fault repair & temporary restoration", subtitle_hi:"24×7 फ़ॉल्ट रिपेयर व अस्थायी बहाली",
    process_en:["24×7 fault repair","Short-circuit & tripping issues","Temporary restoration"],
    process_hi:["24×7 फ़ॉल्ट रिपेयर","शॉर्ट-सर्किट व ट्रिपिंग समस्याएँ","अस्थायी बहाली"],
    prices:[["Emergency visit (within 2 hrs)","₹700 - ₹1,500"],["Fault finding & fix","On inspection"],["Material extra","Actuals"]]
  }
];

// --- i18n helpers ---
function i18n(key){
  const lang = document.body.getAttribute('data-lang') || 'en';
  return (I18N[lang] && I18N[lang][key]) || (I18N['en'][key] || key);
}
function i18nService(key){
  // key like 'title' 'subtitle' etc for current service
  const lang = document.body.getAttribute('data-lang') || 'en';
  const s = window.CURRENT_SERVICE_DATA || SERVICES[0];
  if(!s) return "";
  if(key==='title') return (lang==='hi' && s.title_hi) ? s.title_hi : s.title_en;
  if(key==='subtitle') return (lang==='hi' && s.subtitle_hi) ? s.subtitle_hi : s.subtitle_en;
  return "";
}

// --- Render helpers ---
function applyI18nToPage(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    el.textContent = i18n(el.getAttribute('data-i18n'));
  });
  // placeholders
  document.querySelectorAll('[data-placeholder-i18n]').forEach(el=>{
    el.placeholder = i18n(el.getAttribute('data-placeholder-i18n'));
  });
}

// Language toggle
document.addEventListener('DOMContentLoaded',()=>{
  // set year
  document.querySelectorAll('.year').forEach(el=>el.textContent = new Date().getFullYear());
  // default language is English unless body data-lang changed
  const langToggle = document.getElementById('lang-toggle');
  if(langToggle){
    langToggle.addEventListener('click', ()=>{
      const cur = document.body.getAttribute('data-lang') || 'en';
      const next = (cur === 'en') ? 'hi' : 'en';
      document.body.setAttribute('data-lang', next);
      langToggle.textContent = (next==='en') ? 'हिंदी' : 'English';
      applyI18nToPage();
      renderServicesGrid(); // re-render cards
      renderServicePage(window.RS_CURRENT_SERVICE || null); // re-render service if on services page
    });
    // initialize button label
    const cur = document.body.getAttribute('data-lang') || 'en';
    langToggle.textContent = (cur === 'en') ? 'हिंदी' : 'English';
  }

  applyI18nToPage();
  renderServicesGrid();
  injectHomeTestimonials();
  initFeedback();
  initLightbox();
  initBooking();
  updateWhatsAppLinks();
  // hamburger toggle for mobile
  document.querySelectorAll('.hamburger').forEach(h=>{
    h.addEventListener('click', ()=>{
      document.querySelectorAll('.menu').forEach(m=>m.classList.toggle('open'));
    });
  });
});

// Services grid on index
function renderServicesGrid(){
  const grid = document.getElementById('services-grid');
  if(!grid) return;
  grid.innerHTML = "";
  const lang = document.body.getAttribute('data-lang') || 'en';
  SERVICES.forEach(s=>{
    const title = (lang==='hi' && s.title_hi) ? s.title_hi : s.title_en;
    const a = document.createElement('a');
    a.href = `services.html?service=${encodeURIComponent(s.id)}`;
    a.className = "service-card card";
    a.innerHTML = `<div class="badge">Popular</div><h3>${title}</h3><p>${(lang==='hi') ? 'क्लिक करके विवरण व कीमत देखें' : 'Click to view details & pricing.'}</p>`;
    grid.appendChild(a);
  });
}

// Render services page content
function renderServicePage(serviceId){
  if(!serviceId) return;
  const s = SERVICES.find(x=>x.id===serviceId) || SERVICES[0];
  window.CURRENT_SERVICE_DATA = s;
  window.RS_CURRENT_SERVICE = s.id;
  // fill fields if present
  const titleEl = document.getElementById('service-title');
  if(titleEl) titleEl.textContent = (document.body.getAttribute('data-lang')==='hi' && s.title_hi) ? s.title_hi : s.title_en;
  const subEl = document.getElementById('service-sub');
  if(subEl) subEl.textContent = (document.body.getAttribute('data-lang')==='hi' && s.subtitle_hi) ? s.subtitle_hi : s.subtitle_en;

  const processList = document.getElementById('process-list');
  if(processList){
    processList.innerHTML = "";
    const arr = (document.body.getAttribute('data-lang')==='hi') ? s.process_hi : s.process_en;
    arr.forEach(it=>{
      const li = document.createElement('li'); li.textContent = it; processList.appendChild(li);
    });
  }
  const pricesTbody = document.querySelector('#service-prices tbody');
  if(pricesTbody){
    pricesTbody.innerHTML = "";
    s.prices.forEach(row=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td>`;
      pricesTbody.appendChild(tr);
    });
  }
  applyI18nToPage();
  updateWhatsAppLinks(s);
}

// WhatsApp helpers
function waLink(text=''){
  const msg = encodeURIComponent(text || 'Hi, I want to book an electrical service.');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
}
function updateWhatsAppLinks(service){
  const text = service ? `${(document.body.getAttribute('data-lang')==='hi' && service.title_hi)?service.title_hi:service.title_en} - Inquiry` : 'Hi, I want to book an electrical service.';
  document.querySelectorAll('#wa-home, #wa-quick, #wa-footer, #wa-contact, #wa-service, #wa-chat-first, #floating-wa').forEach(el=>{
    if(!el) return;
    el.href = waLink(text);
    el.target = "_blank";
    el.textContent = (document.body.getAttribute('data-lang')==='hi') ? 'WhatsApp' : 'WhatsApp';
  });
  // set specific link text for footer/buttons if needed
  const waFooter = document.getElementById('wa-footer'); if(waFooter) waFooter.href = waLink(text);
}

// submit mailto (free method)
function submitMailto(form, subject){
  const data = new FormData(form);
  const entries = Array.from(data.entries()).map(([k,v])=>`${k}: ${v}`).join('%0D%0A');
  const mail = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(entries)}`;
  window.location.href = mail;
}

// --- Feedback localStorage logic ---
const store = {
  get(key, fallback){
    try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch(e){ return fallback; }
  },
  set(key, val){ localStorage.setItem(key, JSON.stringify(val)); }
};

function initFeedback(){
  const form = document.querySelector('#feedback-form');
  const list = document.querySelector('#feedback-list');
  if(!form || !list) {
    // ensure display on other pages
    renderFeedback(store.get('feedbacks', []), document.querySelectorAll('#home-testimonials, #feedback-list'));
    return;
  }
  let feedbacks = store.get('feedbacks', []);
  renderFeedback(feedbacks, document.querySelectorAll('#home-testimonials, #feedback-list'));
  const avgSpan = document.getElementById('rating-avg');
  const countSpan = document.getElementById('rating-count');
  if(countSpan) countSpan.textContent = feedbacks.length;
  if(avgSpan) avgSpan.textContent = feedbacks.length ? (feedbacks.reduce((a,b)=>a+b.stars,0)/feedbacks.length).toFixed(1) : '0.0';

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = form.name.value.trim() || 'Guest';
    const stars = parseInt(form.stars.value || '5',10);
    const message = form.message.value.trim();
    feedbacks.push({name, stars, message, date: new Date().toISOString()});
    store.set('feedbacks', feedbacks);
    form.reset();
    renderFeedback(feedbacks, document.querySelectorAll('#home-testimonials, #feedback-list'));
    if(countSpan) countSpan.textContent = feedbacks.length;
    if(avgSpan) avgSpan.textContent = feedbacks.length ? (feedbacks.reduce((a,b)=>a+b.stars,0)/feedbacks.length).toFixed(1) : '0.0';
    alert((document.body.getAttribute('data-lang')==='hi') ? 'धन्यवाद! आपका फ़ीडबैक रिकॉर्ड हो गया है।' : 'Thank you! Your feedback has been recorded.');
  });
}

function renderFeedback(items, nodes){
  if(!nodes) return;
  const arr = Array.isArray(nodes) ? nodes : [nodes];
  const html = items.length ? items.slice().reverse().map(f=>`<div class="testimonial"><div class="stars">${'★'.repeat(f.stars)+ '☆'.repeat(5-f.stars)}</div><p>${(f.message)?escapeHtml(f.message):''}</p><div style="color:#9ca3af;font-size:12px;">— ${escapeHtml(f.name)}</div></div>`).join('') : `<div class="testimonial"><p>${(document.body.getAttribute('data-lang')==='hi') ? 'अभी तक कोई फ़ीडबैक नहीं। पहला बनें!' : 'No feedback yet. Be the first!'}</p></div>`;
  arr.forEach(n=>{
    if(!n) return;
    if(n.length !== undefined) {
      // nodeList
      n.forEach(el=>el.innerHTML = html);
    } else {
      n.innerHTML = html;
    }
  });
}
function escapeHtml(s){ return String(s).replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
function injectHomeTestimonials(){
  const container = document.getElementById('home-testimonials');
  if(!container) return;
  const feedbacks = store.get('feedbacks', []);
  const last3 = feedbacks.slice(-3).reverse();
  container.innerHTML = last3.length ? last3.map(f=>`<div class="testimonial"><div class="stars">${'★'.repeat(f.stars)+ '☆'.repeat(5-f.stars)}</div><p>${escapeHtml(f.message || '')}</p><div style="color:#9ca3af;font-size:12px;">— ${escapeHtml(f.name)}</div></div>`).join('') : `<div class="testimonial"><p>${(document.body.getAttribute('data-lang')==='hi') ? 'अभी तक कोई फ़ीडबैक नहीं।' : 'No feedback yet.'}</p></div>`;
}

// --- Lightbox for gallery ---
function initLightbox(){
  const lb = document.getElementById('lightbox');
  if(!lb) return;
  document.querySelectorAll('.gallery-item img').forEach(img=>{
    img.addEventListener('click', ()=>{ lb.querySelector('img').src = img.src; lb.classList.add('show'); });
  });
  lb.addEventListener('click', ()=> lb.classList.remove('show'));
}

// --- Booking form ---
function initBooking(){
  const form = document.getElementById('booking-form');
  if(!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const bookings = store.get('bookings', []);
    data.date = new Date().toISOString();
    bookings.push(data);
    store.set('bookings', bookings);
    // open WhatsApp with details
    const msg = `Booking Request\nName: ${data.name}\nPhone: ${data.phone}\nService: ${data.service}\nPreferred Date: ${data.preferred_date}\nLocation: ${data.location}\nNotes: ${data.notes || ''}`;
    window.open(waLink(msg), '_blank');
 
