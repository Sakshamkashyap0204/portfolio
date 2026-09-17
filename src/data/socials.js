// ─── Contact & Social Links ──────────────────────────────────────────────────
// Edit this file to update your contact details and social links everywhere.

export const contact = {
  email: 'prasadsaksham27@gmail.com',
  phone: '+91 77 37967730',
  phoneTel: '+917737967730', // used in tel: href — no spaces
}

export const socials = {
  github:   'https://github.com/Sakshamkashyap0204',
  linkedin: 'https://www.linkedin.com/in/saksham-prasad-b15815254/',
}

// Used in the Contact section and Footer
export const contactItems = [
  {
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: 'FiMail',
  },
  {
    label: 'Phone',
    value: contact.phone,
    href: `tel:${contact.phoneTel}`,
    icon: 'FiPhone',
  },
  {
    label: 'LinkedIn',
    value: 'saksham-prasad-b15815254',
    href: socials.linkedin,
    icon: 'FiLinkedin',
  },
  {
    label: 'GitHub',
    value: 'Sakshamkashyap0204',
    href: socials.github,
    icon: 'FiGithub',
  },
]

// Used in the Footer
export const footerSocials = [
  { label: 'GitHub',   href: socials.github,   icon: 'FiGithub' },
  { label: 'LinkedIn', href: socials.linkedin,  icon: 'FiLinkedin' },
  { label: 'Email',    href: `mailto:${contact.email}`, icon: 'FiMail' },
]
