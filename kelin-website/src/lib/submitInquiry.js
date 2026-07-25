export async function submitInquiry(payload) {
  const response = await fetch('/api/inquiries/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  let data = null;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (!response.ok || !data?.ok) {
    const error = new Error(data?.error || 'Failed to submit inquiry');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
}

export function buildInquiryPayload(raw = {}) {
  const firstName = (raw.firstName || '').trim();
  const lastName = (raw.lastName || '').trim();
  const name = (raw.name || `${firstName} ${lastName}`.trim()).trim();

  return {
    name,
    firstName,
    lastName,
    email: (raw.email || '').trim(),
    company: (raw.company || '').trim(),
    address: (raw.address || '').trim(),
    countryCode: (raw.countryCode || '+63').trim(),
    phone: (raw.phone || '').trim(),
    subject: (raw.subject || raw._subject || 'Website Inquiry').trim(),
    message: (raw.message || '').trim(),
    inquiryType: (raw.inquiryType || 'general').trim(),
    productName: (raw.productName || raw['Machine Model'] || raw.machine || '').trim(),
    pageSource: (raw.pageSource || raw['Page Source'] || '').trim(),
    pageUrl: (raw.pageUrl || raw['Page URL'] || (typeof window !== 'undefined' ? window.location.href : '')).trim(),
  };
}
