/**
 * TASREEH BUSINESS SERVICES (HALA BUSINESS)
 * Interactive Application Engine
 */

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });

    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      });
    });
  }

  // 2. Scroll To Top Button
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollTopBtn?.classList.add('show');
    } else {
      scrollTopBtn?.classList.remove('show');
    }
  });

  scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. Service Category Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const serviceCards = document.querySelectorAll('.service-card');
  const dropdownItems = document.querySelectorAll('.dropdown-item');

  function filterServices(category) {
    filterBtns.forEach(btn => {
      if (btn.getAttribute('data-filter') === category) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    serviceCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      if (category === 'all' || cardCat === category) {
        card.style.display = 'flex';
        card.style.animation = 'fadeIn 0.4s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      filterServices(category);
    });
  });

  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      const category = item.getAttribute('data-filter');
      if (category) {
        filterServices(category);
      }
    });
  });

  // 4. Interactive Business Setup & Visa Calculator
  const jurisdictionCards = document.querySelectorAll('#jurisdictionOptions .option-card');
  const officeCards = document.querySelectorAll('#officeOptions .option-card');
  const visaSlider = document.getElementById('visaSlider');
  const visaCountDisplay = document.getElementById('visaCountDisplay');

  // Summary element targets
  const summaryJurisdiction = document.getElementById('summaryJurisdiction');
  const summaryLicenseCost = document.getElementById('summaryLicenseCost');
  const summaryVisaCount = document.getElementById('summaryVisaCount');
  const summaryVisaCost = document.getElementById('summaryVisaCost');
  const summaryOfficeCost = document.getElementById('summaryOfficeCost');
  const totalEstimatePrice = document.getElementById('totalEstimatePrice');

  let calcState = {
    jurisdictionName: 'Dubai Mainland (DED)',
    jurisdictionBase: 14500,
    visaCount: 1,
    visaUnitCost: 3800,
    officeName: 'Virtual Desk + Ejari',
    officeCost: 4500
  };

  function updateCalculator() {
    // Math
    const licenseCost = calcState.jurisdictionBase;
    const totalVisaCost = calcState.visaCount * calcState.visaUnitCost;
    const officeCost = calcState.officeCost;
    const grandTotal = licenseCost + totalVisaCost + officeCost;

    // UI Updates
    if (summaryJurisdiction) summaryJurisdiction.textContent = calcState.jurisdictionName;
    if (summaryLicenseCost) summaryLicenseCost.textContent = `AED ${licenseCost.toLocaleString()}`;
    if (summaryVisaCount) summaryVisaCount.textContent = calcState.visaCount;
    if (summaryVisaCost) summaryVisaCost.textContent = `AED ${totalVisaCost.toLocaleString()}`;
    if (summaryOfficeCost) summaryOfficeCost.textContent = `AED ${officeCost.toLocaleString()}`;
    if (totalEstimatePrice) totalEstimatePrice.innerHTML = `AED ${grandTotal.toLocaleString()} <span>/ year</span>`;
  }

  // Jurisdiction selection
  jurisdictionCards.forEach(card => {
    card.addEventListener('click', () => {
      jurisdictionCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      calcState.jurisdictionName = card.querySelector('.option-card-title').textContent;
      calcState.jurisdictionBase = parseInt(card.getAttribute('data-base'), 10) || 14500;
      updateCalculator();
    });
  });

  // Visa Slider
  visaSlider?.addEventListener('input', (e) => {
    const val = parseInt(e.target.value, 10);
    calcState.visaCount = val;
    if (visaCountDisplay) {
      visaCountDisplay.textContent = val === 0 ? '0 Visas (License Only)' : `${val} ${val === 1 ? 'Visa' : 'Visas'}`;
    }
    updateCalculator();
  });

  // Office selection
  officeCards.forEach(card => {
    card.addEventListener('click', () => {
      officeCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      calcState.officeName = card.querySelector('.option-card-title').textContent;
      calcState.officeCost = parseInt(card.getAttribute('data-cost'), 10) || 4500;
      updateCalculator();
    });
  });

  // WhatsApp Quote Button from Calculator
  const btnSendCalcWhatsApp = document.getElementById('btnSendCalcWhatsApp');
  btnSendCalcWhatsApp?.addEventListener('click', () => {
    const total = (calcState.jurisdictionBase + (calcState.visaCount * calcState.visaUnitCost) + calcState.officeCost).toLocaleString();
    const msg = `Hello Hala Business Service, I customized a setup estimate on your website:\n- Jurisdiction: ${calcState.jurisdictionName}\n- Visas: ${calcState.visaCount}\n- Workspace: ${calcState.officeName}\n- Estimated Total: AED ${total}\nPlease confirm the final quote and consultation availability.`;
    window.open(`https://wa.me/971551272700?text=${encodeURIComponent(msg)}`, '_blank');
  });

  // Book Consultation button from Calculator
  const btnBookCalcConsultation = document.getElementById('btnBookCalcConsultation');
  btnBookCalcConsultation?.addEventListener('click', () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const contactMsg = document.getElementById('contactMessage');
      if (contactMsg) {
        contactMsg.value = `Calculated Estimate: ${calcState.jurisdictionName}, ${calcState.visaCount} Visas, ${calcState.officeName}.`;
      }
    }
  });

  // 5. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    const body = item.querySelector('.faq-body');
    header?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBody = otherItem.querySelector('.faq-body');
        if (otherBody) otherBody.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        if (body) body.style.maxHeight = body.scrollHeight + 30 + 'px';
      }
    });
  });

  // 6. Service Modal Data & Logic
  const serviceDetails = {
    'golden-visa': {
      title: '10-Year Golden Visa VIP Program',
      tag: 'Exclusive UAE Residency',
      badge: 'VIP Fast-Track',
      icon: 'fa-crown',
      overview: 'The UAE Golden Visa grants 10 years of self-sponsored residency in Dubai, allowing foreign investors, entrepreneurs, executives, scientists, and exceptional talents to live, work, and thrive with unmatched freedom.',
      features: [
        '100% Self-sponsored with no local sponsor or corporate employer needed',
        'Valid for 10 full years and renewable indefinitely',
        'Stay outside the UAE for more than 6 months without visa cancellation',
        'Sponsor spouse, children of any age, and unlimited domestic helpers (maids, drivers)',
        'Exclusive Dubai Esaad Privilege Card providing luxury discounts'
      ],
      requirements: 'Real estate investment of AED 2M+, or professional employment with AED 30,000+ monthly salary and attested bachelor degree, or specialized executive nominations.',
      timeline: '3 to 5 business days from initial submission.'
    },
    'company-formation': {
      title: 'UAE Company Formation (Mainland, Free Zone & Offshore)',
      tag: 'Business Setup Solutions',
      badge: '100% Ownership',
      icon: 'fa-building',
      overview: 'Establish your commercial, professional, or industrial enterprise with full 100% expat foreign ownership. We guide you through activity selection, jurisdiction trade-offs, and swift license issuance.',
      features: [
        'Dubai Economy & Tourism (DET / DED) Mainland setup with no local partner requirements',
        'Top UAE Free Zones (DMCC, IFZA, Meydan, RAKEZ, DAFZA, Shams)',
        'Bilingual Memorandum of Association (MOA) and corporate bylaws',
        'Tier-1 Corporate Bank Account opening advisory and compliance support',
        'Multi-currency corporate structuring and tax compliance optimization'
      ],
      requirements: 'Passport copy, UAE entry stamp/visa copy, 3 proposed trade names, and chosen commercial activities.',
      timeline: '24 hours for instant Mainland licenses, 3 to 5 days for standard Free Zones.'
    },
    'trade-license-renewal': {
      title: 'Trade Licence Renewal & Corporate Amendments',
      tag: 'License Maintenance',
      badge: '24h Express',
      icon: 'fa-arrows-rotate',
      overview: 'Avoid DED fines and operational halts with our fast-track license renewal service. We handle lease verifications, partner additions/removals, and trade activity modifications.',
      features: [
        'Same-day express renewal with DED and Free Zone authorities',
        'Ejari renewal verification and office lease negotiation assistance',
        'Shareholder/Partner addition, removal, and share transfers',
        'Activity expansion and branch registration across UAE emirates',
        'Penalty reductions and license reactivation for frozen entities'
      ],
      requirements: 'Current Trade License copy, valid Ejari/Tenancy contract, and partners passport/Emirates ID copies.',
      timeline: 'Same-day turnaround (within 24 hours).'
    },
    'virtual-office': {
      title: 'Virtual Office Space & Registered Business Addresses',
      tag: 'Workspace Solutions',
      badge: 'DED Approved',
      icon: 'fa-laptop-code',
      overview: 'Get a prestigious Dubai corporate business address without paying exorbitant physical lease rates. Fully approved by the Dubai Economic Department and includes official Ejari.',
      features: [
        'Prime business locations in Business Bay, Downtown, Sheikh Zayed Rd & Al Qusais',
        'Immediate official Ejari certificate issued under your trade license',
        'Professional mail, courier, and call answering handling services',
        'Access to executive boardrooms and modern client meeting spaces',
        'Fulfills all DED and bank account inspection compliance requirements'
      ],
      requirements: 'Valid Trade License / Initial Approval and owner passport copies.',
      timeline: 'Instant issuance upon agreement (1 - 2 hours).'
    },
    'documents-clearing': {
      title: 'Comprehensive Corporate PRO & Documents Clearing',
      tag: 'Government Liaison',
      badge: 'Hassle-Free',
      icon: 'fa-file-shield',
      overview: 'A dedicated team of senior Arabic-speaking PRO specialists managing all ministerial, municipal, and immigration submissions on your behalf.',
      features: [
        'Direct representation across all federal and local government departments',
        'Document legalization, fine reductions, and status regularization',
        'Labor quota increases and corporate immigration file updates',
        'Door-to-door courier collection and return of all sensitive paperwork',
        'Dedicated corporate PRO account manager available 24/7'
      ],
      requirements: 'Company establishment card and authorization letter.',
      timeline: 'Continuous ongoing support and expedited fast-track channels.'
    },
    'amer-tasheel-tadbeer': {
      title: 'Amer, Tasheel & Tadbeer Government Services',
      tag: 'Official Government Hub',
      badge: 'Govt Authorized',
      icon: 'fa-landmark-dome',
      overview: 'One-stop authorized government typing center. We handle GDRFA entry permits and residency visas (Amer), MOHRE employment contracts and work permits (Tasheel), and domestic worker sponsorship (Tadbeer).',
      features: [
        'Amer: Express residency visa typing, entry permit issuance, and status changes',
        'Tasheel: Labor contract drafting, electronic work permits, and quota allocations',
        'Tadbeer: Sponsoring domestic staff, housekeepers, drivers, and nannies',
        'Absconding case resolutions and overstay fine waivers',
        'Zero waiting in queues with full digital submission handling'
      ],
      requirements: 'Sponsor Emirates ID, employee passport/visa, and salary certificate / tenancy contract.',
      timeline: '24 to 48 hours.'
    },
    'visa-immigration': {
      title: 'Investor, Partner & Corporate Employee Visa Immigration',
      tag: 'Residency Solutions',
      badge: '2 & 3 Year Visas',
      icon: 'fa-passport',
      overview: 'End-to-end residence visa processing for company owners, partners, directors, and staff members across Dubai Mainland and all UAE Free Zones.',
      features: [
        'Electronic Entry Permit / eVisa issuance',
        'In-country status amendment without leaving the UAE',
        'VIP medical fitness test typing and biometric appointment scheduling',
        'Residency visa stamping and Emirates ID card dispatch',
        'Employment contract registration with MOHRE'
      ],
      requirements: 'Trade License, Establishment Card, passport copy, photo, and educational certificates (if required).',
      timeline: '3 to 5 business days.'
    },
    'family-visa': {
      title: 'Family Residence Visa Sponsorship (Spouse, Kids & Parents)',
      tag: 'Family Relocation',
      badge: 'Family First',
      icon: 'fa-people-roof',
      overview: 'Bring your family to live with you in Dubai. We guide you through salary thresholds, tenancy requirements, attested certificates, and medical fitness clearances.',
      features: [
        'Spouse and children residency sponsorship (up to 2 or 3 years)',
        'Parent sponsorship with humanitarian approvals',
        'Newborn baby birth certificate attestation and visa issuance inside UAE',
        'VIP express medical appointments for spouse and adult dependents',
        'Complete paperwork handling from entry permit to Emirates ID'
      ],
      requirements: 'Sponsor salary certificate, Ejari tenancy contract, attested marriage & birth certificates, bank statements.',
      timeline: '3 to 5 business days.'
    },
    'insurance': {
      title: 'Corporate, Health & Commercial Insurance Solutions',
      tag: 'Risk & Health Protection',
      badge: 'DHA Compliant',
      icon: 'fa-shield-heart',
      overview: 'Mandatory UAE health insurance coverage for visa stamping alongside commercial property, public liability, and group employee health policies.',
      features: [
        'Basic Essential Benefit Plan (EBP) compliant with DHA & MOHAP regulations',
        'Comprehensive multi-tier medical networks with direct hospital billing',
        'Corporate group medical plans for startups and established enterprises',
        'Commercial general liability, professional indemnity, and property insurance',
        'Instant digital policy generation for fast visa stamping'
      ],
      requirements: 'Passport copy, visa copy, and Emirates ID.',
      timeline: 'Instant digital policy issuance (within 2 hours).'
    },
    'government-approval': {
      title: 'External Government Approvals & Ministerial NOCs',
      tag: 'Specialized Licensing',
      badge: 'Multi-Agency',
      icon: 'fa-certificate',
      overview: 'Certain specialized commercial activities require non-objection certificates (NOC) and approvals from specialized UAE ministries and authorities.',
      features: [
        'Dubai Municipality (Food safety, clinic layout, industrial storage)',
        'Roads & Transport Authority (RTA) for car rental, logistics, transport',
        'Dubai Civil Defense (DCD) for building safety and fire safety compliance',
        'Knowledge & Human Development Authority (KHDA) for training & schools',
        'Central Bank & Security Industry Regulatory Agency (SIRA) approvals'
      ],
      requirements: 'Initial Approval certificate, proposed location floor plans, and company profile.',
      timeline: '3 to 7 business days depending on authority.'
    },
    'ded-services': {
      title: 'Dubai Economic Department (DET / DED) Direct Services',
      tag: 'Mainland Authority',
      badge: 'Mainland DED',
      icon: 'fa-scale-unbalanced-flip',
      overview: 'Comprehensive direct liaison with Dubai Economy and Tourism (DET) for all company establishment, trade name reservation, commercial licensing, and branch registrations.',
      features: [
        'Trade name search, reservation, and instant certificate issuance',
        'Initial Approval and activity code mapping from DED classification list',
        'Instant License scheme (launch business immediately without office Year 1)',
        'Commercial permits for sales, promotions, and signage branding',
        'Company liquidation, deregistration, and official DED audit clearance'
      ],
      requirements: 'Passport copies of shareholders and proposed business activities.',
      timeline: '24 to 48 hours.'
    },
    'notary-services': {
      title: 'Legal Drafting & Dubai Courts Notary Public Services',
      tag: 'Legal Formations',
      badge: 'Legal MOJ',
      icon: 'fa-feather-pointed',
      overview: 'Professional legal drafting of contracts in certified bilingual Arabic-English format, attested digitally before Dubai Courts and Ministry of Justice Notary Public.',
      features: [
        'Memorandum of Association (MOA) and Articles of Association (AOA)',
        'General and Special Power of Attorney (POA) for business and property',
        'Board Resolutions, Share Sale Agreements, and Partnership Deeds',
        'Local Service Agent (LSA) and Corporate Agent Agreements',
        'Digital online notary signing with biometric authentication'
      ],
      requirements: 'Drafting requirements, Emirates ID / Passport copies of all signatories.',
      timeline: '24 hours for drafting and digital notarization.'
    },
    'emirates-id-medical': {
      title: 'VIP Express Medical Fitness & Emirates ID Processing',
      tag: 'Express Biometrics',
      badge: 'VIP 2-Hour Medical',
      icon: 'fa-address-card',
      overview: 'Skip the long queues with our VIP express medical fitness testing (results in 2-4 hours) and fast-track biometric appointments for rapid Emirates ID printing.',
      features: [
        'VIP luxury medical fitness lounge access (blood test & chest X-ray)',
        'Expedited results certified directly by DHA/MOHAP in 2 to 4 hours',
        'Fast-track VIP biometric appointment at federal ICP service centers',
        'Courier delivery of original plastic Emirates ID card to your door',
        'Typing and fee settlement handled end-to-end'
      ],
      requirements: 'Original passport, entry permit/visa copy, and passport photo.',
      timeline: 'Medical results in 2-4 hours; biometrics same day or next day.'
    },
    'ejari-services': {
      title: 'Official Ejari Registration & Tenancy Contracts',
      tag: 'Dubai Land Dept',
      badge: 'Land Dept (DLD)',
      icon: 'fa-house-chimney-crack',
      overview: 'Official Dubai Land Department (DLD) Ejari tenancy contract registration and certification required for company trade licenses, renewals, and family visas.',
      features: [
        'Commercial office, retail shop, flexi-desk, and warehouse Ejari registration',
        'Residential tenancy contract Ejari for family visa sponsorship',
        'Official Ejari cancellation and transfer certificates',
        'Resolution of landlord registration disputes and title deed verifications',
        'Instant official PDF Ejari certificate with QR code validation'
      ],
      requirements: 'Tenancy contract, Landlord Title Deed, Tenant Trade License / Emirates ID.',
      timeline: '1 to 2 hours.'
    },
    'certificate-attestation': {
      title: 'Document Legalization & Certificate Attestation',
      tag: 'Global Legalization',
      badge: 'MOFA & Embassy',
      icon: 'fa-stamp',
      overview: 'Worldwide certificate attestation services for educational degrees, birth certificates, marriage certificates, corporate board resolutions, and commercial powers of attorney.',
      features: [
        'Ministry of Foreign Affairs (MOFA UAE) official stamp and sticker',
        'Home country government legalization (Notary, State Dept, Foreign Affairs)',
        'UAE Embassy / Consulate legalization in home country',
        'Certified legal Arabic translation accredited by Ministry of Justice',
        'Secure door-to-door international courier with tracking'
      ],
      requirements: 'Original certificate / document and passport copy of holder.',
      timeline: '3 to 7 business days depending on originating country.'
    }
  };

  const serviceModal = document.getElementById('serviceModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalBody = document.getElementById('modalBody');

  window.openServiceModal = function (serviceKey) {
    const data = serviceDetails[serviceKey];
    if (!data || !modalBody || !serviceModal) return;

    modalBody.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.8rem;">
        <span class="section-tag" style="margin: 0;"><i class="fa-solid ${data.icon}"></i> ${data.tag}</span>
        <span class="service-badge badge-vip">${data.badge}</span>
      </div>
      <h2 style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--color-primary-darker); margin-bottom: 1rem;">
        ${data.title}
      </h2>
      <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin-bottom: 1.5rem;">
        ${data.overview}
      </p>

      <h4 style="font-family: var(--font-heading); font-size: 1.1rem; color: var(--color-primary-darker); margin-bottom: 0.8rem;">
        Key Highlights & Deliverables:
      </h4>
      <ul class="service-features-list" style="margin-bottom: 1.5rem;">
        ${data.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('')}
      </ul>

      <div style="background: var(--color-body-bg); border: 1px solid var(--color-border); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.8rem;">
        <div style="font-size: 0.85rem; color: var(--color-text-main); margin-bottom: 0.5rem;">
          <strong><i class="fa-solid fa-file-lines" style="color: var(--color-primary);"></i> Basic Requirements:</strong> ${data.requirements}
        </div>
        <div style="font-size: 0.85rem; color: var(--color-text-main);">
          <strong><i class="fa-solid fa-clock" style="color: var(--color-gold-dark);"></i> Expected Timeline:</strong> ${data.timeline}
        </div>
      </div>

      <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;">
        <a href="https://wa.me/971551272700?text=Hello%20Hala%20Business%20Service,%20I%20am%20interested%20in%20${encodeURIComponent(data.title)}" target="_blank" class="btn btn-whatsapp" style="flex: 1;">
          <i class="fa-brands fa-whatsapp"></i> Inquire on WhatsApp
        </a>
        <button class="btn btn-primary" onclick="closeServiceModalAndScroll('${data.title}')" style="flex: 1;">
          <i class="fa-solid fa-calendar-check"></i> Book Consultation
        </button>
      </div>
    `;

    serviceModal.classList.add('active');
  };

  function closeServiceModal() {
    serviceModal?.classList.remove('active');
  }

  modalCloseBtn?.addEventListener('click', closeServiceModal);
  serviceModal?.addEventListener('click', (e) => {
    if (e.target === serviceModal) {
      closeServiceModal();
    }
  });

  window.closeServiceModalAndScroll = function(serviceTitle) {
    closeServiceModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      const serviceSelect = document.getElementById('contactService');
      if (serviceSelect) {
        // Try matching select options
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceTitle.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase().replace('■', '').trim())) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
  };

  // 7. Toast Notification Handler
  const toastNotice = document.getElementById('toastNotice');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg, duration = 4000) {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, duration);
  }

  // 8. Hero Quick Form Submission
  const heroQuickForm = document.getElementById('heroQuickForm');
  heroQuickForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('heroName')?.value.trim();
    const phone = document.getElementById('heroPhone')?.value.trim();
    const service = document.getElementById('heroService')?.value;

    const waMsg = `Hello Hala Business Service,\nMy Name: ${name}\nPhone: ${phone}\nInterested in: ${service}\nPlease contact me with more information.`;
    showToast('Inquiry submitted! Redirecting to WhatsApp...');

    setTimeout(() => {
      window.open(`https://wa.me/971551272700?text=${encodeURIComponent(waMsg)}`, '_blank');
      heroQuickForm.reset();
    }, 1200);
  });

  // 9. Main Contact Form Submission
  const mainContactForm = document.getElementById('mainContactForm');
  mainContactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName')?.value.trim();
    const phone = document.getElementById('contactPhone')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const service = document.getElementById('contactService')?.value;
    const notes = document.getElementById('contactMessage')?.value.trim() || 'None';

    const waMsg = `Hello Hala Business Service,\nI would like to book a consultation:\n- Name: ${name}\n- Phone: ${phone}\n- Email: ${email}\n- Service: ${service}\n- Details: ${notes}`;
    showToast('Thank you! Our PRO consultant will connect with you shortly on WhatsApp.');

    setTimeout(() => {
      window.open(`https://wa.me/971551272700?text=${encodeURIComponent(waMsg)}`, '_blank');
      mainContactForm.reset();
    }, 1200);
  });

  // Initial Calculation Run
  updateCalculator();

});
