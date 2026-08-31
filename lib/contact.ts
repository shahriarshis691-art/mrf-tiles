export function contactHref(interest?: string) {
  if (!interest) return "/#contact";
  return `/?interest=${encodeURIComponent(interest)}#contact`;
}

export function buildWhatsAppUrl(
  whatsapp: string,
  fields: {
    name: string;
    phone: string;
    message: string;
    interest?: string;
  },
) {
  const lines = [
    "Hello MRF Galaxy,",
    `Name: ${fields.name}`,
    `Phone: ${fields.phone}`,
    fields.interest ? `Interest: ${fields.interest}` : null,
    "",
    fields.message,
  ].filter((line): line is string => line !== null);

  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
