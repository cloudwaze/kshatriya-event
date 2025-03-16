// Adapters for converting between backend and frontend data models
import * as API from './api';
import { Sponsor as FrontendSponsor } from './sponsors';

/**
 * Convert a backend sponsor to frontend format
 */
export function backendSponsorToFrontend(backendSponsor: API.Sponsor): FrontendSponsor {
  return {
    id: backendSponsor.id,
    name: backendSponsor.name,
    tier: backendSponsor.tier,
    logo: backendSponsor.logo || backendSponsor.logo_url || '',
    website: backendSponsor.website || backendSponsor.website_url || '',
    description: backendSponsor.description || '',
    contactName: backendSponsor.contact_name || '',
    contactEmail: backendSponsor.contact_email || '',
    contactPhone: backendSponsor.contact_phone || '',
    amountPaid: backendSponsor.amount_paid || 0,
    paymentStatus: backendSponsor.payment_status || 'pending',
    createdAt: backendSponsor.created_at,
    updatedAt: backendSponsor.updated_at,
  };
}

/**
 * Convert a frontend sponsor to backend format for creation
 */
export function frontendSponsorToBackendCreate(frontendSponsor: Omit<FrontendSponsor, 'id' | 'createdAt' | 'updatedAt'>): API.SponsorCreate {
  return {
    name: frontendSponsor.name,
    tier: frontendSponsor.tier,
    logo_url: frontendSponsor.logo,
    website_url: frontendSponsor.website,
    description: frontendSponsor.description,
    contact_name: frontendSponsor.contactName,
    contact_email: frontendSponsor.contactEmail,
    contact_phone: frontendSponsor.contactPhone,
    amount_paid: frontendSponsor.amountPaid,
    payment_status: frontendSponsor.paymentStatus,
  };
}

/**
 * Convert a frontend sponsor to backend format for update
 */
export function frontendSponsorToBackendUpdate(frontendSponsor: Partial<Omit<FrontendSponsor, 'id' | 'createdAt' | 'updatedAt'>>): API.SponsorUpdate {
  const backendSponsor: API.SponsorUpdate = {};

  if (frontendSponsor.name !== undefined) backendSponsor.name = frontendSponsor.name;
  if (frontendSponsor.tier !== undefined) backendSponsor.tier = frontendSponsor.tier;
  if (frontendSponsor.logo !== undefined) backendSponsor.logo_url = frontendSponsor.logo;
  if (frontendSponsor.website !== undefined) backendSponsor.website_url = frontendSponsor.website;
  if (frontendSponsor.description !== undefined) backendSponsor.description = frontendSponsor.description;
  if (frontendSponsor.contactName !== undefined) backendSponsor.contact_name = frontendSponsor.contactName;
  if (frontendSponsor.contactEmail !== undefined) backendSponsor.contact_email = frontendSponsor.contactEmail;
  if (frontendSponsor.contactPhone !== undefined) backendSponsor.contact_phone = frontendSponsor.contactPhone;
  if (frontendSponsor.amountPaid !== undefined) backendSponsor.amount_paid = frontendSponsor.amountPaid;
  if (frontendSponsor.paymentStatus !== undefined) backendSponsor.payment_status = frontendSponsor.paymentStatus;

  return backendSponsor;
} 