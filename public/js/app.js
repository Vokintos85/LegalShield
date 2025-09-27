/** Настройки контактов — замени на реальные */
const CONTACTS = {
  phone: '+7 999 000 00 00',                   // номер для WhatsApp
  telegram: 'pravovoishchit',                  // username без @
  email: 'hello@pravovoishchit.example',       // почта для mailto
  defaultText: 'Здравствуйте! Нужна консультация по гражданскому праву.'
};

function openWhatsApp() {
  const phone = (CONTACTS.phone || '').replace(/\D/g, '');
  const text = encodeURIComponent(CONTACTS.defaultText);
  if (!phone) return alert('Не указан номер WhatsApp в CONTACTS.phone');
  window.open(`https://wa.me/${phone}?text=${text}`, '_blank', 'noopener');
}

function openTelegram() {
  const user = (CONTACTS.telegram || '').replace(/^@/, '');
  if (!user) return alert('Не указан Telegram username в CONTACTS.telegram');
  window.open(`https://t.me/${user}`, '_blank', 'noopener');
}

function openEmail() {
  const subject = 'Заявка с сайта Правовой щит';
  const body = `${CONTACTS.defaultText}\n\nИмя:\nКонтакт:\nКомментарий:`;
  window.location.href = `mailto:${CONTACTS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
