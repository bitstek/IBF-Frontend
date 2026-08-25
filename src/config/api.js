/**
 * Centralized Backend API Configuration
 * Reads from VITE_API_URL environment variable defined in frontend/.env
 */
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000'
